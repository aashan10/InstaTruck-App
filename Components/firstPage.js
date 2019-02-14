import {Component} from 'react';
import * as React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { TextInput, Avatar, Button } from 'react-native-paper';
import ImageSlider from 'react-native-image-slider';
import App from '../App';
import Login from './Login/Login';
import { createStackNavigator, createAppContainer } from "react-navigation";

class firstPage extends Component
{
    render(){
        const {navigate} = this.props.navigation;
        return(
        <View>
            <View>
                <Text style={styles.welcomeMsg}>Welcome to InstaTruck</Text>
            </View>
            <View style={styles.buttonContainer}>
                <Button mode="text" onPress={()=> navigate('Hello hello')}>Skip</Button>
            </View>
        </View>
        );
    }
}
const RootStack  = createStackNavigator({
    Home : {screen:App},
    nextPage: {screen:Login}
 });

 const Data = createAppContainer(RootStack);
const styles = StyleSheet.create({
    container:
    {
        flex:1,
        backgroundColor : '#fff',
    },
    slide:{
        flex:3,
        margin: 10,
        marginBottom: 15
    },
    msgContainer:{
        margin:10,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center'
    },  
    welcomeMsg:{
        fontSize: 20,
        fontFamily:'Roboto',
        fontWeight: 'bold',
        textAlign:'center'
    },
    buttonContainer:{
        flex:1,
        flexDirection : 'row',
        justifyContent: 'flex-end'

    }
   
})

export default Data;