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
import Profile from './Components/profile';
import checkLogin from './Components/Login/Login';
import {Root} from 'native-base';

const AppStack =  createStackNavigator({
    Home : {screen:HomeDetails,header:'none'},
    logout: {screen:Logout,header:'none'},
    profile: {screen:Profile},
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
const checkNav = createStackNavigator({
    checkLogin:{screen:checkLogin, header:'none'},
});
export default class App extends Component
{ 
    constructor(){
        super();
        this.state = {
            FirstTimeLunch : 'false'
        };
        this.checkData();
    }
        checkData = async() => {
            await AsyncStorage.getItem('alreadyLaunched').then(value => {
                console.log(value);
                 if(value === null ){
                     this.setState({FirstTimeLunch:'true'});
                     AsyncStorage.setItem('alreadyLaunched', "true"); 
                 } else {
                     this.setState({FirstTimeLunch : 'false'});
                 }
             });    
        }
    render() {
        console.log(`return mathi ${this.state.FirstTimeLunch}`)
        const AppContainer =  createAppContainer(
            createSwitchNavigator(
            {
                firstScreen : FirstScreen,
                login:checkNav,
                Auth:AuthStack,
                App:AppStack
               
            },
                this.state.FirstTimeLunch === 'true' ?  {initialRouteName:'firstScreen'} : {initialRouteName:'login'}
            )
        );
        return (   
            <Root>
                 <AppContainer />  
            </Root>        
       
           
        );
    }
}
