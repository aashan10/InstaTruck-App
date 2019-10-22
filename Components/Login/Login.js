import React, {Component} from 'react';
import {View, Text, AsyncStorage} from 'react-native';
import {withNavigation} from 'react-navigation';
import {Container, Header, Body, Content, Spinner} from 'native-base';

class checkLogin extends Component
{
    constructor(props){
        super(props);
        this.isloggedIn();
        
    }
    isloggedIn = async() => {
        let token = await AsyncStorage.getItem('userToken');
        if(token === 'abc'){
            this.props.navigation.navigate('Home');
            return;
        }
        this.props.navigation.navigate('signIn');
    }
    static navigationOptions = {header:null}
    render(){
        return(
            <Container>
                <Header>
                    <Body style={{margin:10}}>
                        <Text style={{color:'#fff', fontSize:20}}>Please Wait!!!</Text>
                    </Body>
                </Header>
                <Content>
                    <View style={{alignContent:'center', alignItems:'center'}}>
                        <Spinner color='blue' />
                    </View>
                </Content>
            </Container>
        );
    }
}
export default withNavigation(checkLogin);