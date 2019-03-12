import React ,{Component} from 'react';
import {AsyncStorage} from 'react-native';
import FirstScreen from './Components/FirstScreen';
import SelectPage from './Components/selectPage';
import {createStackNavigator, createAppContainer, createSwitchNavigator,createDrawerNavigator} from 'react-navigation';
import LoginDetails from './Components/Login/LoginDetails';
import LocationSummary from './Components/Summary';
import MoreDetails from './Components/moreDetails';
import placeOrder from './Components/placeOrder';
import Logout from './Components/logout';
import HomeDetails from './Components/Home/HomeDetails';
import {Root} from 'native-base';
const AppStack =  createStackNavigator({
    Home : {screen:HomeDetails,header:'none'},
    logout: Logout,
    PlaceSelect : SelectPage,
    summary: LocationSummary,
    Details: MoreDetails,
    placeOrder: placeOrder,
    },{
        initialRouteName:'Home',
    }
);
const AuthStack = createStackNavigator({
    signIn: LoginDetails
    

});
let FirstTimeLunch = false ;
let isLoggedIn = false ;
let checkData = async() => {
    await AsyncStorage.getItem('alreadyLaunched').then(value => {
        console.log(value);
         if(value === null){
             FirstTimeLunch = true;
             AsyncStorage.setItem('alreadyLaunched', "true"); 
         } else {
             FirstTimeLunch = false;
             AsyncStorage.removeItem('alreadyLaunched');
         }
     });
     await AsyncStorage.getItem('userToken').then(value => {
         if(value === 'abc'){
             isLoggedIn = true;
         }
         isLoggedIn = false;
     });
}
const AppContainer =  createAppContainer(
    createSwitchNavigator(
    {
        firstScreen : FirstScreen,
        Auth:AuthStack,
        App:AppStack
       
    },
        // isLoggedIn == true ? {initialRouteName:'App'} : {initialRouteName:'Auth'},
        FirstTimeLunch == true ?  {initialRouteName:'firstScreen'} : {initialRouteName:'Auth'}
    )
);
export default class App extends Component
{ 
    constructor(props){
        super(props);
        
        checkData();
    }
    render() {
        return (   
            <Root>
                 <AppContainer />  
            </Root>        
       
           
        );
    }
}
