import React ,{Component} from 'react';
import {View, Text, StyleSheet,AsyncStorage} from 'react-native';
import signInComponent from './Components/Login/Login';
import FirstScreen from './Components/FirstScreen';
import SelectPage from './Components/selectPage';
import {createStackNavigator, createAppContainer, createSwitchNavigator} from 'react-navigation';
import Home from './Components/Drawer/Home';
import LoginDetails from './Components/Login/LoginDetails';
import HomeDetails from './Components/Home/HomeDetails';
import LocationSummary from './Components/Summary';

const AppStack =  createStackNavigator({
    Home : {
        screen: Home,
        navigationOptions: {
            header: null
        }
    },
    PlaceSelect : SelectPage,
    summary: LocationSummary
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
