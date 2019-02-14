import React, {Component} from 'react';
import {View, Image,Text,StyleSheet} from 'react-native';
import LoginDetails from './LoginDetails';
import {Container} from 'native-base';

const signInComponent = () => {
    const navigationOptions = {header: null};
    return (
        <Container>
             <View style={styles.LoginContainer}>
                 <Image style={styles.logo}resizeMode='contain'source={require('../images/logo.png')}  />
                 <Text style={styles.name}>InstaTruck</Text>
            </View>
            <View style={styles.formContainer}>
                <LoginDetails />
             </View>
        </Container>
        
        // {/* <View style={styles.LoginContainer}>
        // <Image style={styles.logo}resizeMode='contain'source={require('../images/logo.png')}  />
        //     <Text style={styles.name}>InstaTruck</Text>
        // </View>
        // <View style={styles.formContainer}>
        //     <LoginDetails />
        // </View> */}
    );
}

const styles = StyleSheet.create({
    name:{
        fontFamily:'Cochin',
        fontSize: 30,
        marginTop:200,
        fontWeight:'bold',
        color:'#16a085',
        justifyContent:'center'
    },
    LoginContainer:{
        marginTop:50,
        alignItems:'center',
        alignContent:'center',
        flexGrow: 1
    },
    logo:{
        height:200,
        width:300,
        position: 'absolute'
    }
})
export default signInComponent;