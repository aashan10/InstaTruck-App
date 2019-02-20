import {createDrawerNavigator, createAppContainer, withNavigation} from 'react-navigation';
import React,{Component} from 'react';
import HomeDetails from '../Home/HomeDetails';
import Logout from '../logout';
const nav = createDrawerNavigator({
    Home: {
        screen: HomeDetails
    },
    Logout : {
        screen: Logout
    },
},{
    drawerPosition: 'left',
    initialRouteName: 'Home',
    drawerBackgroundColor: '#fff',
    drawerWidth: 200,
});
const navigationOptions = {header: null};
export const Home = createAppContainer(nav);
export default withNavigation(Home, navigationOptions);