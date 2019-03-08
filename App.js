import React ,{Component} from 'react';
import {AsyncStorage} from 'react-native';
import FirstScreen from './Components/FirstScreen';
import SelectPage from './Components/selectPage';
import {createStackNavigator, createAppContainer, createSwitchNavigator} from 'react-navigation';
import Home from './Components/Drawer/Home';
import LoginDetails from './Components/Login/LoginDetails';
import LocationSummary from './Components/Summary';
import MoreDetails from './Components/moreDetails';
import placeOrder from './Components/placeOrder';
import { CheckBox } from 'native-base';
const AppStack =  createStackNavigator({
    Home : {
        screen: Home,
        navigationOptions: {
            header: null
        }
    },
    PlaceSelect : SelectPage,
    summary: LocationSummary,
    Details: MoreDetails,
    placeOrder: placeOrder,
    },{
        initialRouteName:'Home'
    }
);
const AuthStack = createStackNavigator({
    signIn: LoginDetails
    

});
let FirstTimeLunch ;
let isLoggedIn ;
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
         if(value == 'abc')
         {
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
        FirstTimeLunch ?  {initialRouteName:'firstScreen'} : {initialRouteName:'Auth'}
    )
);
export default class App extends Component
{ 
    constructor(props){
        super(props);
        AsyncStorage.clear();
        checkData();
    }
    render() {
        return (           
        <AppContainer />  
           
        );
    }
}
