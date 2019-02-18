import React ,{Component} from 'react';
import {View, Text, StyleSheet, Platform, Switch} from 'react-native';
import { Container, Header, Left, Body, Icon, Title, Button, Content, Footer, Right, DatePicker } from 'native-base';
import Home from '../Drawer/Home';
import ImageSlider from 'react-native-image-slider';
class HomeDetails extends Component
{
    state = {
        trueSwitchIsOn: true,
        falseSwitchIsOn: false,
        garyo: false
      };
    static navigationOptions = "Home"
    kamGar = (value) => {
         this.setState({
             falseSwitchIsOn: value,
             garyo: true
        });
        
    }
    render()
    {
        const DatePickers =  <DatePicker
        defaultDate={new Date(2019, 4, 4)}
        minimumDate={new Date(2019, 1, 1)}
        maximumDate={new Date(2019  , 12, 31)}
        locale={"en"}
        />
        const message = <Text>Hello World!!</Text>
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
                   <View style={{backgroundColor:'#34495e', padding:10,flexDirection:"row", flexWrap:"wrap"}}>
                        <Text style={{color: '#fff', fontSize: 18}}>Book</Text>  
                        <Right>
                            <View style={{flexDirection:"row", flexWrap:"wrap"}}>
                            <Text style={{color: '#fff'}}>Now</Text>
                              <Switch
                                onValueChange={this.kamGar}
                                style={{marginBottom: 10}}
                                value={this.state.falseSwitchIsOn}     
                                />
        
                             <Text style={{color:'#fff'}}>Later</Text>
                            </View>
                        </Right>    
                   </View>
                   <View>
                   {this.state.garyo ? DatePickers : message }
                   </View>
                </Content>
                <Footer style={{backgroundColor:'#ecf0f1'}}>
                    <Right>
                        <Button transparent danger onPress={() => this.props.navigation.navigate('PlaceSelect')} >
                            <Text style={{fontSize: 18, color: 'red', marginRight:15}}>Next</Text>
                        </Button>
                    </Right>
                </Footer>
            </Container>
        );
    }
}
export default HomeDetails;
// const nav = createDrawerNavigator({
//     Home: {
//         screen: HomeDetails
//     },
//     About : {
//         screen: About
//     },
// },{
//     drawerPosition: 'left',
//     initialRouteName: 'Home',
//     drawerBackgroundColor: 'gray',
//     drawerWidth: 200,
// });
// export const Home = createAppContainer(nav);
// export default Home;