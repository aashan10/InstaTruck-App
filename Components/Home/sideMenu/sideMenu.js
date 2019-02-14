import React, {Component} from 'react';
import {View, ScrollView, Text} from 'react-native';
import {NavigationActions} from 'react-navigation';
import styles from './sideMenu.style';
import PropTypes from 'prop-types';

export default class SideMenu extends Component
{
    // nagivateToScreen = (route) => () => {
    //         const nagivateAction = NavigationActions.navigate({
    //             routeName : route
    //         });
    //         this.props.nagigation.dispatch(nagivateAction);
    // }

    render() {
        return (
            <View style={styles.container}>
                <Text>Side Menu!</Text>
            </View>
        );
    }
}

// SideMenu.PropTypes = {
//     navigation: PropTypes.object
// };
