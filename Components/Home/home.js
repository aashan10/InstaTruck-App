import React ,{Component} from 'react';
import {View, Text, StyleSheet, Platform, Switch} from 'react-native';
import { Container, Header, Left, Body, Icon, Title, Button, Content, Footer, Right } from 'native-base';
import {createDrawerNavigator, createAppContainer} from 'react-navigation';
import About from '../About';
import {Swiper} from 'react-native-swiper';
import ImageSlider from 'react-native-image-slider';
class HomeDetails extends Component
{
    static navigationOptions = "Home"
    render()
    {
        return(
            <Container>
                <Header>
                    <Left>
                        <Button transparent onPress= { () => this.props.navigation.openDrawer()}>
                            <Icon name="menu"/>
                        </Button>
                    </Left> 
                    <Body>
                        <Title>
                            Choose A vehicle
                        </Title>
                    </Body>
                </Header>
               <ImageSlider style={{flex:1}} autoPlayWithInterval={2000} images={[
                    require('../images/img1.jpg'),
                    'http://placeimg.com/640/480/any',
                    'http://placeimg.com/640/480/any'
                ]}/>
                <Content>
                   <View style={{backgroundColor:'#34495e', padding:10}}>
                        <Text style={{color: '#fff', fontSize: 18}}>Book</Text>  
                        <Switch></Switch> 
                   </View>
                </Content>
                <Footer style={{backgroundColor:'#fff'}}>
                    <Right>
                        <Button transparent danger >
                            <Text style={{fontSize: 18, color: 'red'}}>Next</Text>
                        </Button>
                    </Right>
                </Footer>
            </Container>
        );
    }
}
const nav = createDrawerNavigator({
    Home: {
        screen: HomeDetails
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