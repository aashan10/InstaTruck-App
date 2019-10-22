import React,  {Component} from 'react';
import {View, Text, Dimensions, StyleSheet,AsyncStorage} from 'react-native';
import {withNavigation} from 'react-navigation';
import { NetInfo } from 'react-native';
import { Container, Content, Form, Item, Input, Label, Button, Thumbnail } from 'native-base';
class LoginDetails extends Component
{
  
    constructor(props)
    {
        super(props)
        this.state = {
            username: '',
            password: '',
            errorMessage: '',
            isConnected: true,
            wait: false,
        }
        NetInfo.isConnected.fetch().then(isConnected => {
            if(isConnected){
                console.log('Connected!!');
            }else{
                console.log('Offline');
            }
        })
        this._mySync();
    }
    _mySync = async () => {
        const userToken = await AsyncStorage.getItem('userToken');
        userToken === 'abc' ? this.props.navigation.navigate('Home') : null;
    }
    componentDidMount() {
        NetInfo.isConnected.addEventListener('connectionChange', this.handleConnectivityChange);
    }

    componentWillUnmount() {

        NetInfo.isConnected.removeEventListener('connectionChange', this.handleConnectivityChange);
    }
    handleConnectivityChange = (isConnected) => {
        if (isConnected) {
            this.setState({
                isConnected
            });
        } else {
            this.setState({
                isConnected
            });
        }
    }

     getUserData = async() => {
        let username = this.state.username;
        let password = this.state.password;
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ;
        if(username === '' && password === '')
        {
            alert('Please Enter Your Username and Password');
        } else if(reg.test(username) === false){
            this.setState({
                errorMessage: 'Please Enter a Valid Email Address'
            });
            return;
        }
        else{    
            let url = 'http://192.168.1.68/api';
            fetch(url,{
                method: 'POST',
                headers: {
                     Accept: 'application/json',
                     'Content-Type': 'application/json',
                    },
                 body: JSON.stringify({
                    email: username,
                    password: password,
                 }),
            })
            .then((response)=> response.json() )
            .then((responseJson) => {
                console.log(responseJson.message);
                console.log(responseJson.token);
                if(responseJson.message == 'Request successfully processed'){
                    AsyncStorage.setItem('apiToken', responseJson.token )
                    AsyncStorage.setItem('userToken' , 'abc');
                    this.props.navigation.navigate('App');
                } else if(responseJson.message == 'Unauthorized'){
                    this.setState({
                        errorMessage: 'Invalid credentials'
                    });
                    return;
                } else {
                    console.log(responseJson);
                    alert('Something went worng!! Please contact Suport!!');
                }
            }).catch((error)=>console.error(error));
            return;
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
        const Error = <View style={{flex:1, margin:10}}>
                        <Item error>
                            <Text style={{fontSize:20,color:'red'}}>{this.state.errorMessage}</Text>
                        </Item> 
                    </View>
        const noConnection = <View style={styles.offlineContainer}>
                                <Text style={styles.offlineText}>No Internet Connection</Text>
                            </View>            
        return(
            <Container>
                <Content>
                {this.state.isConnected != true ? noConnection : <Text></Text>}
                <View style={styles.logo}>
                <Thumbnail large source= {require('../images/logo.png')} />
                <Text style={{margin:10,fontWeight:'bold', fontSize: 30}}>InstaTruck</Text>
                </View>
                <View style={styles.container}>
                    <Form style={{margin:10}}>
                        <Item floatingLabel>
                            <Label>Email</Label>
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
                    {this.state.errorMessage != '' ? Error : <Text></Text>}
                </View>
                <Button  block style={{margin:10}} onPress={this.getUserData}>
                        <Text style={{color: '#fff', fontSize:20}}>Login</Text>
                </Button>
                </Content>
                </Container>
        );    
    }
}
const { width } = Dimensions.get('window');
const styles = StyleSheet.create({
    container:{
        flex: 1,
       marginTop: 25
    },
    logo:{
        flex: 1,
        marginTop: 30,
        padding:10,
        alignContent: 'center',
        alignItems: 'center',
    },
    offlineContainer: {
        backgroundColor: '#b52424',
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
        // flexDirection: 'row',
        width,
        position: 'absolute',
        // top: 30
      },
      offlineText: { 
        color: '#fff'
      }
})

export default withNavigation(LoginDetails);