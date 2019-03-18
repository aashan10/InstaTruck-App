import React, {Component} from 'react';
import {View, Text, Switch,Slider, CheckBox, StyleSheet, Image, AsyncStorage} from 'react-native';
import {Container, Content, Card, CardItem, Left, Right, Button, Footer, FooterTab, Body} from 'native-base';

class placeOrder extends Component
{     

    constructor(props){
        super(props);
        this.state = {
            date:'',
            time:'',
            currentBook :'',
            imageIndex:'',
        };
        this.getUtakoValue();
    }
    getUtakoValue =  async() => {
        let currentBook = await AsyncStorage.getItem('bookNow');
        console.log('=============jdfjfjhdfjfdjh========00');
        console.log(currentBook);
        if(currentBook == 'true'){
            this.setState({currentBook:currentBook});
            var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
            var date =  new Date;
            let day = days[date.getDay()];
            let months = ['Jan', 'Feb', 'Mar', 'Apr','May','Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
            let month = months[date.getMonth()];
            combinedDate = day + ' ' + month + ' ' +  date.getDate() + ' ' + date.getFullYear();
            this.setState({date:combinedDate});
            let hours = date.getHours();
            var minutes = date.getMinutes();
            let ampm = hours>=12 ? 'pm' : 'am';
            hours = hours %12;
            hours = hours ? hours:12;
            minutes = minutes < 10 ? '0'+minutes : minutes;
            let time = hours + ':' + minutes + ' ' + ampm;
            this.setState({time:time}); 
        }
        let imageIndex = await AsyncStorage.getItem('imageIndex');
        this.setState({imageIndex:imageIndex});
    }
    placeOrder = async() =>{
        //Fetch Request here to save to database!!
        alert('Your Order has been Placed!!');
        this.props.navigation.navigate('Home',{
            orderPlaced:'true'
        });
    }
    render()
    {
        let comment =this.props.navigation.getParam('comment','empty');
            console.log(comment);
         let pickup =this.props.navigation.getParam('pickUp','empty');
         console.log(pickup);
         let dropOff =this.props.navigation.getParam('dropOff','empty');
         console.log(dropOff);
         let date =this.props.navigation.getParam('date','empty');
         console.log(date);
         let time =this.props.navigation.getParam('time','empty');
         console.log(time);
         let vechileType =this.props.navigation.state.params.vechileType;
         console.log(vechileType);
         let closedType =this.props.navigation.getParam('closedType','empty');
         console.log(closedType);
         let rubberizedPlatform =this.props.navigation.getParam('rubberizedPlatform','empty');
         console.log(rubberizedPlatform);
         let goodsDetails =this.props.navigation.state.params.goodsDetails;
         console.log(goodsDetails);
         let imageIndex = this.props.navigation.state.params.imageIndex;
         if(imageIndex == 0){
             imgPath = require('./images/tataAce.jpg');
             console.log(imgPath);
         } else if(imageIndex == 1){
             imgPath = require('./images/tata407.jpg');
             console.log(imgPath);
         } else{
             imgPath= require('./images/canter.jpg');
             console.log(imgPath);
         }
        return(
            <Container>
                    <Content>
                        <Card>
                            <CardItem header bordered>
                                <Text style={{ fontSize:20, fontWeight: '600', color: '#333' }}>Order Details</Text>
                            </CardItem>
                            <CardItem cardBody style={{margin:10, padding:5}} bordered>
                                <Left>
                                    <Text style={styles.dataStyle} >PickUp Location:</Text>
                                </Left>
                                <Right>
                                    <Text style={styles.dataStyle}>{pickup.country}</Text>
                                </Right>
                            </CardItem>
                            <CardItem cardBody style={{margin:10, padding:5}} bordered >
                                <Left>
                                    <Text style={styles.dataStyle}>DropOff Location:</Text>
                                </Left>
                                <Right>
                                    <Text style={styles.dataStyle}>{dropOff.country}</Text>
                                </Right>
                                </CardItem>
                                <CardItem cardBody style={{margin:10, padding:5}} bordered >
                                <Left>
                                    <Text style={styles.dataStyle}>Date:</Text>
                                </Left>
                                <Right>
                                    <Text style={styles.dataStyle}>{this.state.date === '' ? date : this.state.date}</Text>
                                </Right>
                                </CardItem>
                                
                                <CardItem cardBody style={{margin:10, padding:5}} bordered>
                                <Left>
                                    <Text style={styles.dataStyle}>Time:</Text>
                                </Left>
                                <Right>
                                    <Text style={styles.dataStyle}>{this.state.time === '' ? time : this.state.time}</Text>
                                </Right>
                                </CardItem>
                                
                                <CardItem cardBody style={{margin:10, padding:5}} bordered>
                                <Left>
                                    <Text style={styles.dataStyle}>Vechile:</Text>
                                </Left>
                                <Right>
                                    <Text style={styles.dataStyle}>{vechileType}</Text>
                                </Right>
                                </CardItem>
                                
                                <CardItem cardBody style={{margin:10, padding:5}} bordered>
                                <Left>
                                    <Text style={styles.dataStyle}>VechileType:</Text>
                                </Left>
                                <Right>
                                    <Text style={styles.dataStyle}>{closedType}</Text>
                                </Right>
                                </CardItem>
                                <CardItem cardBody style={{margin:10,padding:7}}>
                                    <Left><Text style={styles.dataStyle}>Goods Details</Text></Left>
                                    <Body>
                                       <Text style={styles.dataStyle}>{goodsDetails},</Text> 
                                    </Body>
                                </CardItem>
                                <CardItem cardBody style={{margin:10, padding:5}} bordered>
                                <Left>
                                    <Text style={styles.dataStyle}>Rubberied Platofrm:</Text>
                                </Left>
                                <Right>
                                    <Text style={styles.dataStyle}>{rubberizedPlatform? <Text>True</Text> : <Text>False</Text>}</Text>
                                </Right>
                                </CardItem>
                                <CardItem cardBody style={{margin:10, padding:5}} bordered>
                                <Left>
                                    <Text style={styles.dataStyle}>comment:</Text>
                                </Left>
                                <Right>
                                    <Text style={styles.dataStyle}>{comment}</Text>
                                </Right>
                                </CardItem>
                                <CardItem cardBody style={{margin:10}}>
                                    <Text style={styles.dataStyle}>Selected Vechile:</Text>
                                </CardItem>
                                <CardItem cardBody style={{margin:10, padding:5}} bordered>
                                    <Image  source={imgPath} style={{ height : 200, width:null, flex : 1 }} />
                            </CardItem>
                        </Card>
                    </Content>
                    <Footer>
                        <FooterTab style={{backgroundColor:'#2c3e50'}}>
                            <Button onPress={()=> this.props.navigation.goBack()}>
                                <Text style={{color:'#fff', fontSize:15}}>Cancel</Text>
                            </Button>
                            <Button onPress={this.placeOrder}>
                                <Text style={{color:'#fff', fontSize:15}}>Place Order</Text>
                            </Button>
                        </FooterTab>
                    </Footer>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    dataStyle:{
        fontSize:20, 
        fontWeight:'bold'
    }
})



export default placeOrder;