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

let FirstTimeLunch = false;
let checkFirstTimeLunch = async () =>{
    const checkFirst = await AsyncStorage.getItem('firstTime');
    alert(checkFirst);
    checkFirst ? FirstTimeLunch = true : FirstTimeLunch = false;
}
const AppContainer = createAppContainer(
    createSwitchNavigator(
    {
        firstScreen : FirstScreen,
        Auth:AuthStack,
        App:AppStack
       
    },
    FirstTimeLunch ? { initialRouteName: 'firstScreen'} : { initialRouteName:'App'}
    )
);
export default class App extends Component
{
  
    
    render() {
        return (           
        <AppContainer />  
           
        );
    }
}
