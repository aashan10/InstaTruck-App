import {Component} from 'react';
import * as React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import ImageSlider from 'react-native-image-slider';
import {Button, Badge} from 'native-base';
class FirstScreen extends Component
{
    static navigationOptions = { title:"Welcome", header: null };
    render(){
        return(
            <View style={{flex:1}}>
                <View style={styles.slide}>
                    <ImageSlider 
                        images = {[
                            require('./images/img.jpg'),
                            require('./images/img1.jpg'),
                            require('./images/img2.jpg'),
                        ]}/>
                </View>
                <View>
                    <Button full  onPress={() => this.props.navigation.navigate('signIn')}>
                        <Text style={{color:'#fff'}}>Login</Text>
                    </Button>
                </View>
            </View>

                        
        );
    }
}

const styles = StyleSheet.create({
    slide:{
        flex:6,
        // marginBottom: 15
    },
    msgContainer:{
        margin:10,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center'
    },  
    welcomeMsg:{
        fontSize: 20,
        fontFamily:'Roboto',
        fontWeight: 'bold',
        textAlign:'center'
    },
    buttonContainer:{
        flex:1,
        flexDirection : 'row',
        justifyContent: 'flex-end'

    }
   
})

export default FirstScreen;

