import React, {Component} from 'react';
import {View, Text} from 'react-native';
import styles from './sideMenu.style';

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
