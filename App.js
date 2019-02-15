import React ,{Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import signInComponent from './Components/Login/Login';
import FirstScreen from './Components/FirstScreen';
import {createStackNavigator, createAppContainer, createSwitchNavigator} from 'react-navigation';
import Home from './Components/Home/home';
const AppStack =  createStackNavigator({
    Home : Home
    }
);
const AuthStack = createStackNavigator({
    signIn: signInComponent
    });
const AppContainer = createAppContainer(createSwitchNavigator(
    {
        firstScreen : FirstScreen,
        signIn : signInComponent,
        Home : Home
    },
    {
        initialRouteName : 'Home'
    }
));
export default class App extends Component
{
    render() {
        return (
            <AppContainer />  
        );
    }
}
