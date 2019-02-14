import  {Component} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import * as React from 'react';
import { Container, Header, Content, Form, Item, Input, Label } from 'native-base';
import {TextInput, Button} from 'react-native-paper';
import { Actions } from 'react-native-router-flux';
// const gotoHomePage = () => {
//     Actions.home();       
// }
class LoginDetails extends Component
{
    constructor(props)
    {
        super(props);
        this.getUserData = this.getUserData.bind(this);
        this.state = {
            username: '',
            password: '',
          }

    }
    getUserData = () => {
        let username = this.state.username;
        let password = this.state.password;
        if(username === '' && password === ''){
            alert('Enter Your Username and Password!!');
        }else{
            // this.apiCall();
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
                  gotoHomePage();
                //   alert(JSON.stringify(responseJson));
              })
                .catch((error) => {
                    console.error(error);
                });
           
        }
    render()
    {
        return(
            <Container style={styles.container}>
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
                </Content>
                <Button style={styles.button} full onPress={this.getUserData} >
                    <Text>Login</Text>
                </Button>
            </Container>
            
            // <View style={styles.container}>
            //      <TextInput  
            //         type='outlined'
            //         onChangeText={(text) => this.setState({username:text})}
            //         style={styles.input}
            //         label="Username"
            //         selectionColor="black"
            //         returnKeyType="next"
            //         keyboardType="default"
                    
            //             />
            //     <TextInput  
            //         style={styles.input}
            //         label="Password"
            //         onChangeText={(text) => this.setState({password:text})}
            //         returnKeyType="go"
            //         keyboardType="default"
            //         secureTextEntry    />

            //         <Button mode='contained'  onPress={this.getUserData}>Login</Button>
            // </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        padding:10,
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