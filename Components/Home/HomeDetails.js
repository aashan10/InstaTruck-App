import React ,{Component} from 'react';
import {View, Text, StyleSheet, Platform, Image, Switch, TimePickerAndroid, AsyncStorage} from 'react-native';
import { Container, Header, Left, Body, Icon, Title, Button, Content, Footer, Right, DatePicker } from 'native-base';
import {withNavigation, createDrawerNavigator,createAppContainer} from 'react-navigation';
import ImageSlider from 'react-native-image-slider';
import Swiper from 'react-native-custom-swiper';
import Logout from '../logout';
 
class HomeDetails extends Component
{   
    constructor(props)
    {
        super(props)
        this.state = {
            trueSwitchIsOn: true,
            falseSwitchIsOn: false,
            garyo: false,
            laterSwitch:false,
            timePicker:false,
            dateTimeSelected:false,
            choosenDate: new Date(),
            ImageId: 1,
            imgArray : [ 
                require('../images/img.jpg'),
                require('../images/img1.jpg'),
                require('../images/img2.jpg'),
                require('../images/logo.png')   
            ],
            currentIndex: 0
          };
    }    
    kamGar = (value) => {
        if(!this.state.laterSwitch){
            this.setState({
                 falseSwitchIsOn: value,
                 garyo: true,
                 laterSwitch:true
            });
            return;
        }
        if(this.state.laterSwitch!=false){
            this.setState({
                falseSwitchIsOn:false,
                garyo:false,
                laterSwitch:false
            });
        }
               
    }
    
    handleImages = (index) => {
            this.setState({
                currentIndex: index 
            });
    }
    sateDate = (newDate) => {
        this.setState({choosenDate: newDate, timePicker:true})
    }
    renderImageSwipeItem = (item) => {
        return (
            <View>
                <Image source={item} resizeMode='center'/>
            </View>
        )
    }
    static navigationOptions = {  header: null };
    render()
    {
        const DatePickers =  <View><Text style={{fontSize:25,fontWeight:'bold'}}>Please Select Date And Time</Text><DatePicker
        defaultDate={new Date(2019, 2, 19)}
        minimumDate={new Date(2019, 1, 1)}
        maximumDate={new Date(2029  , 12, 31)}
        locale={"en"}
        onDateChange={this.sateDate}
        /></View>
        const message = <Text></Text>
        // const {Actions, hours,minute} =  TimePickerAndroid.open({
        //     hour:13,
        //     minute:27,
        //     is24Hour:false
        // });
        const nextBtn = <Button transparent danger onPress={() => this.props.navigation.navigate('PlaceSelect')} >
        <Text style={{fontSize: 18, color: 'red', marginRight:15}}>Next</Text>
    </Button>
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
               {/* <ImageSlider style={{flex:1}}  
               images= {Trucks} 
               onPositionChanged= {this.handleImages}
               /> */}
               <Swiper
                   style={{flex:1}}
                   currentSelectIndex={0}
                   swipeData={this.state.imgArray}
                   renderSwipeItem={this.renderImageSwipeItem}
                   onScreenChange={this.handleImages}
               />
                <Content>
                   <View style={{backgroundColor:'#34495e', padding:10,flexDirection:"row", flexWrap:"wrap"}}>
                        <Icon active name="lock" style={{color:'#fff'}} />
                        <Text style={{color: '#fff', fontSize: 18}}> Book</Text>  
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
                       <Text style={{fontSize:21.56}}>{this.state.currentIndex}</Text>
                   </View>
                   {this.state.garyo===true ? DatePickers : message }
                   {/* {this.state.timePicker === true ? Actions: message} */}
                </Content>
                <Footer style={{backgroundColor:'#ecf0f1'}}>
                    <Right>
                    {!this.state.laterSwitch ? nextBtn : message}
                    {this.state.laterSwitch && this.state.dateTimeSelected ? nextBtn : message}
                    </Right>
                </Footer>
            </Container>
        );
    }
}

export default HomeDetails;