import { Component } from 'react';
import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    AsyncStorage,
    ScrollView
} from 'react-native';
import ImageSlider from 'react-native-image-slider';
import {
    Button
} from 'native-base';
class FirstScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loggedIn: false
        }
        this._mySync();

    }

    _mySync = async () => {
        const userToken = await AsyncStorage.getItem('userToken');
        userToken === 'abc' ? this.setState({ loggedIn: true }) : this.setState({ loggedIn: false })
    }
    static navigationOptions = { title: "Welcome", header: null };
    render() {
        return (
            <View style={{ flex: 1 }}>
                <ScrollView style={styles.slide} pagingEnabled={true} horizontal={true}>
                    <ImageSlider
                        images={[
                            require('./images/img.jpg'),
                            require('./images/img1.jpg'),
                            require('./images/img2.jpg'),
                        ]} />
                </ScrollView>
                <View>
                    <Button full onPress={this.state.loggedIn ? () => this.props.navigation.navigate('App') : () => this.props.navigation.navigate('Auth')}>
                        <Text style={{ color: '#fff' }}>Next</Text>
                    </Button>
                </View>


            </View>
        );
    }
}

const styles = StyleSheet.create({
    slide: {
        flex: 6,
        // marginBottom: 15
    },
    msgContainer: {
        margin: 10,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center'
    },
    welcomeMsg: {
        fontSize: 20,
        fontFamily: 'Roboto',
        fontWeight: 'bold',
        textAlign: 'center'
    },
    buttonContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end'

    }

})

export default FirstScreen;

