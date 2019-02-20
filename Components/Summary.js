import React, {Component} from 'react';
import {View, Text} from 'react-native';

class LocationSummary extends Component
{
    render()
    {
        const pickup = this.props.navigation.getParam('pickup','empty');
        const dropOff = this.props.navigation.getParam('dropOff','empty');
        return(
            <View style={{alignContent:'center', alignItems:'center'}}>
                <Text style={{fontSize:25, fontWeight:'bold'}}>LocationSummary</Text>
                <Text>From: {JSON.stringify(pickup)}</Text>
                <Text>To: {JSON.stringify(dropOff)}</Text>
            </View>
        );
    }
}
export default LocationSummary;