import React ,{Component} from 'react';
import {View, Text, StyleSheet, Platform} from 'react-native';
import { Button } from 'native-base';
import {createDrawerNavigator, createAppContainer} from 'react-navigation';

class first  extends Component 
{
    static navOptions = {
        drawerLabel :'Home'
    }
    render()
    {
        return (
            <View style={{flex:1 }}>
                <Text>Home Page</Text>
                <Button block onPress= {()=>this.props.navigation.openDrawer()}>
                    <Text>Open</Text>
                </Button>
            </View>
        );
    }
}

class second extends Component
{
    static navOptions = {
        drawerLabel : 'About'
    }

    render()
    {
        return(
            <View style={{flex:1}}>
                <Text>About Page</Text>
                <Button block onPress={()=> this.props.navigation.openDrawer()}>
                    <Text>Close</Text>
                </Button>
            </View>
        );
    }
}

const nav = createDrawerNavigator({
    Home: {
        screen: first
    },
    About : {
        screen: second
    },
},{
    drawerPosition: 'left',
    initialRouteName: 'Home',
    drawerBackgroundColor: 'gray',
    drawerWidth: 200,
});
const App = createAppContainer(nav);
export default App;