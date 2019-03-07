import React, {Component} from 'react';
import {View, Text, TouchableOpacity, ListView, StyleSheet} from 'react-native';
import{ Content, Item, Input, Container, Icon, Right, Button, ListItem, List} from 'native-base';
import { withNavigation} from 'react-navigation';
const places = [
    {country: 'Canada'},
    {country: 'Japan'},
    {country: 'Sudan'},
    {country: 'Combodia'},
    {country: 'pakistan'},
    {country: 'Dubai'},
    {country: 'Nepal'},
    {country: 'America'}
];
const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
class SelectPage extends Component
{
    constructor(props){
        super(props);
        this.state = {
            pickUpLocation: [],
            dropOffLocation: [],
            dhekaunepickUp : '',
            dhekaunedropOff: ''
        };
    }
    static navigationOptions = {
        title: 'Select Location',
        headerStyle: {
            backgroundColor: '#3f51b5',
          },
          headerTintColor: '#fff',
      };
      pickUpLocation = (location) => {
          let searchedLocation = places.filter(function(address){
              return address.country.toLowerCase().indexOf(location.toLowerCase()) > -1;
          });
          this.setState({pickUpLocation:searchedLocation});
      };
      dropOffLocation = (location) => {
          let searchedLocation = places.filter(function(address) {
            return address.country.toLowerCase().indexOf(location.toLowerCase()) > -1;
          });
          this.setState({dropOffLocation:searchedLocation});
          };

      
      goToSummaryPage = () => {
        const date = this.props.navigation.state.params.date;
        console.log(date);
        const time = this.props.navigation.state.params.time;
        console.log(time);
        const vechileType = this.props.navigation.state.params.vehicleType;
        console.log(vechileType);
        const imageIndex = this.props.navigation.state.params.imageIndex;
          if(this.state.pickUpLocation.length <= 1){
              alert('Enter the Locations!!');
          }else if(this.state.dropOffLocation.length <=1){
              alert('Enter Drop Off Location');
          }else{
              console.log(this.state.pickUpLocation);
              console.log(this.state.dropOffLocation);
            this.props.navigation.navigate('summary', {
                pickup: this.state.pickUpLocation,
                dropOff: this.state.dropOffLocation,
                date: date,
                time: time,
                vechileType:vechileType,
                imageIndex:imageIndex,
                

            })

          }
      }

      setLocation = (locationData) => {
        if(this.state.pickUpLocation.length <= 1){
            this.setState({pickUpLocation:locationData})
        }else if(this.state.dropOffLocation.length<=1){
            this.setState({dropOffLocation:locationData})
        }
        
      }

      renderAdress = (address) => {
        return (
           <View>
                <TouchableOpacity onPress={this.setLocation.bind(this,address)}>
                <Text style={{margin:10, fontSize:20}}>{address.country}</Text>
                </TouchableOpacity>
                
            </View>
        );
    }
    render() 
    {
       
        return(
            <Container>
                <Content>
               
                    <Text style={{fontSize:20, margin:10, fontWeight:'bold'}}>Pickup:</Text>
                    <Item regular style={{margin:15}}>
                        <Icon active name="paper-plane" />
                        <Input autoComplete='street-address' placeholder="Pickup Location" onChangeText={this.pickUpLocation} value={this.state.pickUpLocation.country} />
                    </Item> 
                    <ListView
                            dataSource={ds.cloneWithRows(this.state.pickUpLocation)}
                            renderRow={this.renderAdress}
                            renderSeparator={(rowId) => <View key={rowId} style={styles.separator} />} />                  
                    <Text style={{fontSize:20, margin:10, fontWeight:'bold'}}>Drop Off:</Text>
                    <Item regular style={{margin:15}}>
                        <Icon active name='bicycle' />
                        <Input placeholder='Drop Off Location' onChangeText={this.dropOffLocation} value={this.state.dropOffLocation.country} />
                    </Item>
                    <ListView
                            dataSource={ds.cloneWithRows(this.state.dropOffLocation)}
                            renderRow={this.renderAdress}
                            renderSeparator={(rowId) => <View key={rowId} style={styles.separator} />} />
                 </Content>
                <Button full style={{margin:10}} onPress={this.goToSummaryPage}>
                    <Text style={{color:'#fff', fontSize:19.8}}>Next</Text>
                </Button>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    separator: {
        
        height: StyleSheet.hairlineWidth,
        backgroundColor: '#8E8E8E',
      },
})

export default withNavigation(SelectPage);