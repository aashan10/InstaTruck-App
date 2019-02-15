import  {Component} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import * as React from 'react';
import { Container, Header, Content, Form, Item, Input, Label, Button } from 'native-base';
import { Actions } from 'react-native-router-flux';
// const gotoHomePage = () => {
//     Actions.home();       
// }
class LoginDetails extends Component
{
    
    constructor(props)
    {
        super(props);
        // this.getUserData = this.getUserData.bind(this);
        this.state = {
            username: '',
            password: '',
            isLoggedIn: false,
          }
    }
    getUserData = () => {
        let username = this.state.username;
        let password = this.state.password;
        if(username === '' && password === ''){
            alert('Enter Your Username and Password!!');
        }else{
            this.apiCall();
        }
        
    }
    async apiCall()
        {
            await fetch('https://reqres.in/api/login', {
                method: 'POST',
                headers: {
                    Accept : 'application/json',
                    'Content-Type' : 'application/json',
                },
                body : JSON.stringify({
                    email: this.state.username,
                    password: this.state.password,
                }),
            }).then((response) => response.json())
              .then((responseJson) => {
                this.setState({isLoggedIn : true});
              })
                .catch((error) => {
                    alert('No Internet Connection');
                    console.error(error);
                });
        }
    render()
    {
        return(
            <Container>
                <Content>
                    <Form>
                        <Item floatingLabel>
                            <Label>Username</Label>
                            <Input
                            onChangeText={(text) => this.setState({username:text})}
                            returnKeyType="next"
                            keyboardType="default" />
                        </Item>
                        <Item floatingLabel last >
                            <Label>Password</Label>
                            <Input 
                            secureTextEntry={true}
                            returnKeyType="go"
                            onChangeText={(text) => this.setState({password:text})} />
                        </Item>
                    </Form>
                    <Button  block  onPress={this.getUserData} >
                        <Text>Login</Text>
                    </Button>
                </Content>
            </Container>
        );    
    }
}

const styles = StyleSheet.create({
    container:{
        padding:10,
        alignContent: 'center',
        alignItems : 'center'
    },
    input:{
        color:"#ecf0f1",
        fontSize:15,
        margin:10,
        height:60,
        marginBottom: 10
    },
    buttonContainer:{
        backgroundColor: '#2980b6',
        paddingVertical: 15,
    },
    button: {
        color: 'white',
        fontWeight:'700',
        textAlign: 'center'
    }
})

export default LoginDetails;