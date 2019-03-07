import React, {Component} from 'react';
import {View, Text, Switch,Slider, CheckBox, StyleSheet} from 'react-native';
import {Container} from 'native-base';

class placeOrder extends Component
{     
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
         let vechileType =this.props.navigation.getParam('vechileType','empty');
         console.log(vechileType);
         let closedType =this.props.navigation.getParam('closedType','empty');
         console.log(closedType);
         let rubberizedPlatform =this.props.navigation.getParam('rubberizedPlatform','empty');
         console.log(rubberizedPlatform);
         let goodsDetails =this.props.navigation.state.params.goodsDetails;
         console.log(goodsDetails[0]);
        
        return(
            <View style={{flex:1,alignContent:'center', alignItems:'center'}}>
                <Text style={styles.dataStyle}>Order Details</Text>
                <Text style={styles.dataStyle}>Comment:{comment}</Text>
                <Text style={styles.dataStyle}>PickUp:{pickup.country}</Text>
                <Text style={styles.dataStyle}>DropOff:{dropOff.country}</Text>
                <Text style={styles.dataStyle}>Date:{date}</Text>
                <Text style={styles.dataStyle}>Time:{time}</Text>
                <Text style={styles.dataStyle}>VechileType:{vechileType}</Text>
                <Text style={styles.dataStyle}>ClosedType: {closedType}</Text>
                <Text style={styles.dataStyle}>Rubber:{rubberizedPlatform? <Text>True</Text> : <Text>False</Text>}</Text>
                   <View>
                        <Text style={styles.dataStyle}>Data: {goodsDetails.map((items,key) => {
                                 return(<Text style={styles.dataStyle} key={key}>{items} || </Text>);
                                 })}
                        </Text>
                    </View> 
            </View>
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