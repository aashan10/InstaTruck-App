import React, {Component} from 'react';
import {View, Image,Text,StyleSheet} from 'react-native';
import LoginDetails from './LoginDetails';
import {Container, Header, Body, Title, Content, Button} from 'native-base';

const signInComponent = () => {
    const navigationOptions = {header: null};
    return (
        <Container>
        <Header>
            <Body>
                <Title>
                    Login
                </Title>
            </Body>
        </Header>
            <LoginDetails />
            <Content>
            <Button  block style={{margin:10}} onPress={() => this.navigation.navigate('Home')}>
                <Text style={{color: '#fff', fontSize:20}}>Login</Text>
            </Button>
            </Content>
        </Container>
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