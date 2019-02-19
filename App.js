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
    firstScreen : FirstScreen,
    signIn: signInComponent
    },{
        initialRouteName: 'firstScreen'
    }
    );

const AppContainer = createAppContainer(
    createSwitchNavigator(
    {
        firstScreen : FirstScreen,
        signIn : signInComponent,
        Home: Home,
        PlaceSelect: SelectPage
    },
    {
        initialRouteName : 'Home'
    })
);
export default class App extends Component
{
    render() {
        return (           
        <AppContainer />  
           
        );
    }
}
