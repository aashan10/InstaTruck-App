import React, {Component} from 'react';
import {View,Text, AsyncStorage} from 'react-native';
import {Button} from 'native-base';
import {withNavigation} from 'react-navigation';

class Logout extends Component
{
    logout = async() => {
       await  AsyncStorage.removeItem('userToken');
        this.props.navigation.navigate('Auth');
    }
    render()
    {
        return(
            <View style={{alignContent:'center',alignItems:'center'}}>
                <Button full style={{margin:50}} onPress={this.logout}>
                <Text style={{color:'#fff', fontSize:20}}>Logout</Text>
                </Button>
            </View>
        );
    }
}
export default withNavigation(Logout);