import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import{ Content, Item, Input, Container, Icon, Right, Button} from 'native-base';
// import {AutoComplete} from 'native-base-autocomplete';
class SelectPage extends Component
{
    constructor(props){
        super(props);
        this.state = ({
            pickUpLocation: [],
            dropOffLocation: []
        })
    }
    static navigationOptions = {
        title: 'Select Location',
        headerStyle: {
            backgroundColor: '#3f51b5',
          },
          headerTintColor: '#fff',
      };
      pickUpLocation = (location) => {
          if(location != ''){
              this.setState({pickUpLocation: location});
          }
      }
      dropOffLocation = (location) => {
          if(location != ''){
              this.setState({
                  dropOffLocation: location
              });
          }

      }
      goToSummaryPage = () => {
        //   alert(this.state.pickUpLocation.length);
          if(this.state.pickUpLocation.length <= 1){
              alert('Enter the Locations!!');
          }else if(this.state.dropOffLocation.length <=1){
              alert('Enter anything');
          }else{
            this.props.navigation.navigate('summary', {
                pickup: this.state.pickUpLocation,
                dropOff: this.state.dropOffLocation
            })

          }
      }
    render() 
    {
        return(
            <Container>
                <Content>
               
                    <Text style={{fontSize:20, margin:10}}>Pickup:</Text>
                    <Item regular style={{margin:15}}>
                        <Icon active name="paper-plane" />
                        <Input autoComplete='street-address' placeholder="Pickup Location" onChangeText={this.pickUpLocation} />
                    </Item>
                    
                    <Text style={{fontSize:20, margin:10}}>Drop Off:</Text>
                    <Item regular style={{margin:15}}>
                        <Icon active name='bicycle' />
                        <Input placeholder='Drop Off Location' onChangeText={this.dropOffLocation} />
                    </Item>
                </Content>
                <Button full style={{margin:10}} onPress={this.goToSummaryPage}>
                    <Text style={{color:'#fff', fontSize:19.8}}>Next</Text>
                </Button>
            </Container>
        );
    }
}


export default SelectPage;