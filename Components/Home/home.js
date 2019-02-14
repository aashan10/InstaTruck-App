import React ,{Component} from 'react';
import {View, Text, StyleSheet, Platform} from 'react-native';
import { Container, Header, Left, Body, Icon, Title, Button } from 'native-base';
import {createDrawerNavigator, createAppContainer} from 'react-navigation';
import About from '../About';
import Home1 from '../Home';
class HomeDetails extends Component
{
    static navigationOptions = "Home"
    render()
    {
        return(
            <Container>
                <Header>
                    <Left>
                        <Button transparent onPress={()=> this.props.nagivation.openDrawer()}>
                            <Icon name="menu"/>
                        </Button>
                    </Left>
                </Header>
            </Container>
        );
    }
}
const nav = createDrawerNavigator({
    Home: {
        screen: Home1
    },
    About : {
        screen: About
    },
},{
    drawerPosition: 'left',
    initialRouteName: 'Home',
    drawerBackgroundColor: 'gray',
    drawerWidth: 200,
});
export const Home = createAppContainer(nav);
export default Home;