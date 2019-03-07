import React ,{Component} from 'react';
import {View, Text, StyleSheet, Platform, Image, Switch, Dimensions, TimePickerAndroid, AsyncStorage} from 'react-native';
import { Container, Header, Left, Body, Icon, Title, Button, Content, Footer, Right, DatePicker, Card, CardItem } from 'native-base';
import {withNavigation, createDrawerNavigator,createAppContainer} from 'react-navigation';
import ImageSlider from 'react-native-image-slider';
import Swiper from 'react-native-custom-swiper';
import Logout from '../logout';
import DateTimePicker from 'react-native-modal-datetime-picker';
 
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
            isDateTimePickerVisible:false,
            timePicker:false,
            dateTimeSelected:false,
            choosenDate: new Date(),
            ImageId: 1,
            imgArray : [ 
                require('../images/tataAce.jpg'),
                require('../images/tata407.jpg'),
                require('../images/canter.jpg'), 
            ],
            currentIndex: 0,
            bookingDate: '',
            bookingTime: '',
            vehicle: 'Tata Ace | Tata Super Ace',
          };
    }    
    kamGar = (value) => {
        if(!this.state.laterSwitch){
            this.setState({
                 falseSwitchIsOn: value,
                 garyo: true,
                 isDateTimePickerVisible:true,
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
            let vehicleType = this.state.currentIndex;
            // alert(vehicleType);
            if(index === 0){
                this.setState({
                    vehicle: 'Tata Ace | Tata Super Ace'
                });
            } else if(index === 1){
                this.setState({
                    vehicle:'Tata 407'
                });
            } else{
                this.setState({
                    vehicle:'Canter 14'
                })
            }
    }
    sateDate = (newDate) => {
        this.setState({choosenDate: newDate, timePicker:true})
    }
    renderImageSwipeItem = (item) => {
        var {width} = Dimensions.get('window');
        return (
            <View>
                <Image source={item} style={{ flex: 1, alignSelf: 'stretch', width:width  }}  resizeMode='contain'/>
            </View>
        )
    }
    
        _hideDateTimePicker = () => this.setState({ isDateTimePickerVisible: false });

            _handleDatePicked = (date) => {
                var hours = date.getHours();
                var minutes = date.getMinutes();
                var ampm = hours >= 12 ? 'pm' : 'am';
                hours = hours % 12;
                hours = hours ? hours : 12; // the hour '0' should be '12'
                minutes = minutes < 10 ? '0'+minutes : minutes;
                var strTime = hours + ':' + minutes + ' ' + ampm;
                let formattedDate = date.toDateString();

                this.setState({
                    bookingDate : formattedDate,
                    bookingTime:strTime,
                    dateTimeSelected:true
                });
               
                this._hideDateTimePicker();
            };
       goToNextPage = () => {
           this.props.navigation.navigate('PlaceSelect',{
            date:this.state.bookingDate,
            time:this.state.bookingTime,
            vehicleType:this.state.vehicle,
            imageIndex:this.state.currentIndex
            });
       }     
    static navigationOptions = {  header: null };
    render()
    {
        const DatePickers =  <View>
        <DateTimePicker
          isVisible={this.state.isDateTimePickerVisible}
          onConfirm={this._handleDatePicked}
          onCancel={this._hideDateTimePicker}
          mode={'datetime'}
          is24Hour={false}
        />
        </View>
        const message = <Text></Text>
        const bookedDateAndTime = 
        <Card style={{margin:15}}>
        <CardItem>
        <Body>
        <Text style={{fontSize:20, fontWeight:'bold', color:'#2980b9'}}>On : {this.state.bookingDate} </Text>
        <Text style={{fontSize:20, fontWeight:'bold', color:'#2c3e50'}}>AT: {this.state.bookingTime} </Text>
        <Text style={{fontSize:20, fontWeight:'bold', color:'#2c3e50'}}>vehicleType: {this.state.vehicle} </Text>
        </Body>
        </CardItem>
        </Card>
        const nextBtn = <Button style={{marginBottom:10}} transparent danger onPress={this.goToNextPage} >
        <Text style={{fontSize: 20, color: 'red', marginRight:15}}>Next</Text>
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
                   {this.state.garyo===true ? DatePickers : message }
                    {this.state.dateTimeSelected && this.state.laterSwitch ? bookedDateAndTime : message}
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










{/* <Card><CardItem><Body><Text style={{fontSize:20, fontStyle:'italic', fontWeight:'bold', color:'#2980b9'}}>On: {this.state.choosenDate}</Text><Text style={{fontSize:20, fontStyle:'italic', fontWeight:'bold', color:'#16a085'}}>AT: {this.state.bookingTime}</Text></Body></CardItem></Card> */}