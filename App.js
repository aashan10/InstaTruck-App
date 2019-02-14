import React ,{Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import signInComponent from './Components/Login/Login';
import FirstScreen from './Components/FirstScreen';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import Home from './Components/Home/home';
const AppNavigator =  createStackNavigator({
    firstScreen : FirstScreen,
    signIn: signInComponent,
    Home : Home
    },
    {
        initialRouteName : "firstScreen"
    }
);
const AppContainer = createAppContainer(AppNavigator);
export default class App extends Component
{
    render() {
        return (
            <AppContainer />  
        );
    }
}
