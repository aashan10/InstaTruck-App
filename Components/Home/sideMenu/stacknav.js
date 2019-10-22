import React from 'react';
import {TouchableOpacity } from 'react-native';
import {createStackNavigator} from 'react-navigation';
import IOSIcon from 'react-native-vector-icons';
import Home from '../home';

const stackNav = createStackNavigator({
    Main : {
        screen: Home,
        navigationOptions : ({navigation}) => ({
            title: "Main",
            headerLeft : (<TouchableOpacity onPress={()=>navigation.navigate("DrawerOpen")}>
                <IOSIcon name="ios-menu" size={30}/>
            </TouchableOpacity>
            ),
            headerStyle : {paddingRight:10, paddingLeft:15}
        })
    }
});

export default stackNav;