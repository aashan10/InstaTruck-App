import React, {Component} from 'react';
import {View,Text, AsyncStorage} from 'react-native';
import {Button} from 'native-base';
import {withNavigation} from 'react-navigation';

class Logout extends Component
{
    logout = async() => {
       await  AsyncStorage.clear();
        this.props.navigation.navigate('Auth');
    }
    render()
    {
        return(
            <View style={{flexDirection:'row',alignContent:'center',alignItems:'center'}}>
                <Button onPress={this.logout}><Text>Logout</Text></Button>
            </View>
        );
    }
}
export default withNavigation(Logout);