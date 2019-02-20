import React, {Component} from 'react';
import {Button, Container, Header, Left, Content, Title, Form, Picker, Body, Icon, Right, Footer } from  'native-base';
import {View, Text} from 'react-native';
const places = [
    {text: 'Canada'},
    {text: 'Japan'},
    {text: 'Sudan'},
    {text: 'Combodia'},
    {text: 'pakistan'},
    {text: 'Dubai'}
];
const onSelect = (suggestion) => {
    console.log(suggestion) // the pressed suggestion
  }
class SelectPage extends Component
{
    constructor(props) {
        super(props);
        this.state = {
          pickUp: undefined,
          dropOff : undefined
        };
      }
     
      doWork = () => {
        let pickUpLoaction = this.state.pickUp;
        let dropOffLocation = this.state.dropOff;
      }
      static navigationOptions = {
        title: 'Select Location',
        headerStyle: {
            backgroundColor: '#3f51b5',
          },
          headerTintColor: '#fff',
      };
    render()
    {
        return (
            <Container>
                <Content>
                    <View style={{flexDirection: 'row', flexWrap: 'wrap', margin:10}}>
                        <Text style={{fontWeight: 'bold', fontSize: 15}}>PickUp Point</Text>
                        <Right>
                        <Text style={{fontWeight: 'bold', fontSize: 15}}>Drop Off Point</Text>
                        </Right>
                    </View>
                    <View style={{borderBottomColor: 'black',borderBottomWidth: 1,}} />
                    <View style={{flex:1, flexDirection: 'row', flexWrap: 'wrap', margin:10}}>
                        <Form>
                            <Picker
                             mode="dropdown"
                             iosIcon={<Icon name="arrow-down" />}
                             selectedValue={this.state.pickUp} 
                             placeholderIconColor="#007aff"
                             onValueChange={(text) => this.setState({pickUp:text})}
                             style={{width: 150}}
                             >
                             
                                    <Picker.Item label="Kalanki" value="Kalanki" />
                                    <Picker.Item label="Kalimati" value="kalimati" />
                                    <Picker.Item label="Bhaktapur" value="Bhaktapur" />
                                    <Picker.Item label="Lalitpur" value="Lalitpur" />
                                    <Picker.Item label="DurbarMarg" value="DurbarMarg" />
                             </Picker>
                        </Form>
                        <Right>
                            <Form>
                                <Picker
                                mode="dialog"
                                iosIcon={<Icon name="arrow-down" />}
                                selected1   selectedValue={this.state.dropOff} 
                                placeholderIconColor="#007aff"
                                onValueChange={(text) => this.setState({dropOff:text})}
                                //  onValueChange={this.onValueChange1.bind(this)}
                                style={{width: 150}}
                                >
                                    <Picker.Item label="Kalanki" value="Kalanki" />
                                    <Picker.Item label="Kalimati" value="kalimati" />
                                    <Picker.Item label="Bhaktapur" value="Bhaktapur" />
                                    <Picker.Item label="Lalitpur" value="Lalitpur" />
                                    <Picker.Item label="DurbarMarg" value="DurbarMarg" />
                                </Picker>
                            </Form>
                        </Right>
                    </View>
                </Content>
                <Footer>
                    <Button transparent danger style={{margin:10}} onPress={this.doWork} >
                        <Text>Next </Text> 
                    </Button>
                </Footer>
            </Container>    
        );
    }
}

export default SelectPage;