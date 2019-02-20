import React ,{Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import signInComponent from './Components/Login/Login';
import FirstScreen from './Components/FirstScreen';
import SelectPage from './Components/selectPage';
import {createStackNavigator, createAppContainer, createSwitchNavigator} from 'react-navigation';
import Home from './Components/Drawer/Home';
import LoginDetails from './Components/Login/LoginDetails';

const AppStack =  createStackNavigator({
    Home : Home,
    PlaceSelect : SelectPage
    }
);
const AuthStack = createStackNavigator({
    signIn: signInComponent
    }
    );
let FirstTimeLunch = true;
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
