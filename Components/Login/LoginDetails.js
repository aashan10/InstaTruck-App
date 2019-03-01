import React,  {Component} from 'react';
import {View, Text, TouchableOpacity, StyleSheet,AsyncStorage} from 'react-native';
import {withNavigation} from 'react-navigation';
import { Container, Header, Content, Form, Item, Input, Label, Button, Thumbnail } from 'native-base';
class LoginDetails extends Component
{
  
    constructor(props)
    {
        super(props)
        this.state = {
            username: '',
            password: '',
            errorMessage: ''
        }
    }

     getUserData = async() => {
        let username = this.state.username;
        let password = this.state.password;
        if(username === '' && password === '')
        {
            alert('Please Enter Your Username and Password');
        }
        else{    
            await AsyncStorage.setItem('userToken' , 'abc');
            let url = 'https://epapi.pvdemo.com/login';
            fetch(url,{
                method: 'POST',
                headers: {
                     Accept: 'application/json',
                     'Content-Type': 'application/json',
                    },
                 body: JSON.stringify({
                    username: username,
                    password: password,
                 }),
            })
            .then((response)=> response.json() )
            .then((responseJson) => {
                alert(JSON.stringify(responseJson));
            }).catch((error)=>console.error(error));
            // return;
            this.props.navigation.navigate('App');
        }
    }
    static navigationOptions = {
        title: 'Login',
        headerStyle: {
            backgroundColor: '#3f51b5',
          },
          headerTintColor: '#fff',
      };
    render()
    {
        return(
            <Container>
                <Content>
                <View style={styles.logo}>
                <Thumbnail large source= {require('../images/logo.png')} />
                <Text style={{margin:10,fontWeight:'bold', fontSize: 30}}>InstaTruck</Text>
                </View>
                <View style={styles.container}>
                    <Form style={{margin:10}}>
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
                </View>
                <Button  block style={{margin:10}} onPress={this.getUserData}>
                        <Text style={{color: '#fff', fontSize:20}}>Login</Text>
                    </Button>
                </Content>
                </Container>
        );    
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
       marginTop: 25
    },
    logo:{
        flex: 1,
        marginTop: 20,
        alignContent: 'center',
        alignItems: 'center',
    }
})

export default withNavigation(LoginDetails);