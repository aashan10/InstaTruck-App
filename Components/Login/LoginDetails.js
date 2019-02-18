import React,  {Component} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import { Container, Header, Content, Form, Item, Input, Label, Button, Thumbnail } from 'native-base';
class LoginDetails extends Component
{
    render()
    {
        return(
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
                </Content>
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

export default LoginDetails;