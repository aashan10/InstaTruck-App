import React, {Component} from 'react';
import {View, Text, Switch,Slider, CheckBox, StyleSheet, Image} from 'react-native';
import {Container, Content, Card, CardItem, Left, Right, Button, Footer, FooterTab} from 'native-base';

class placeOrder extends Component
{     
    placeOrder = () =>{
        alert('Your Order has been Placed!!');
        this.props.navigation.navigate('Home');
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
        //  let imageIndexs = this.props.navigation.state.params.imageIndex;
        //  if(imageIndexs == 0){
        //      imgPath = require('./images/tataAce.jpg');
        //  } else if(imageIndexs == 1){
        //      imgPath = require('./images/tata407.jpg');
        //  } else{
        //      imgPath= require('./images/canter.jpg');
        //  }
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
                                    <Text style={styles.dataStyle}>{date}</Text>
                                </Right>
                                </CardItem>
                                
                                <CardItem cardBody style={{margin:10, padding:5}} bordered>
                                <Left>
                                    <Text style={styles.dataStyle}>Time:</Text>
                                </Left>
                                <Right>
                                    <Text style={styles.dataStyle}>{time}</Text>
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

                                <CardItem cardBody style={{margin:10, padding:5}} bordered>
                                <Left>
                                    <Text style={styles.dataStyle}>Rubberied Platofrm:</Text>
                                </Left>
                                <Right>
                                    <Text style={styles.dataStyle}>{rubberizedPlatform? <Text>True</Text> : <Text>False</Text>}</Text>
                                </Right>
                                </CardItem>
                                <CardItem cardBody style={{margin:10}}>
                                    <Text style={styles.dataStyle}>Selected Vechile:</Text>
                                </CardItem>
                                <CardItem cardBody style={{margin:10, padding:5}} bordered>
                                    <Image  source={require('./images/tata407.jpg')} style={{ height : 200, width:null, flex : 1 }} />
                            </CardItem>
                        </Card>
                    </Content>
                    <Footer>
                        <FooterTab style={{backgroundColor:'#2c3e50'}}>
                            <Button onPress={()=> this.props.navigation.goBack()}>
                                <Text style={{color:'#fff', fontSize:15}}>Previous</Text>
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