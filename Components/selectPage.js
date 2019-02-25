import React, {Component} from 'react';
import {Button, Container, Header, Left, Content, Title, Form, Picker, Body, Icon, Right, Footer } from  'native-base';
import {View, Text, ListView, TextInput, StyleSheet,TouchableHighlight} from 'react-native';
const places = [
    {country: 'Canada'},
    {country: 'Japan'},
    {country: 'Sudan'},
    {country: 'Combodia'},
    {country: 'pakistan'},
    {country: 'Dubai'},
    {country: 'Nepal'}
];
const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
class SelectPage extends Component
{
    constructor(props) {
        super(props);
        this.state = {
          pickUp: undefined,
          dropOff : undefined,
        };
        this.state = {
            searchedAdresses: [],
            searchedAdresses1: []
        };
      }
     
      doWork = () => {
        let pickUpLoaction = this.state.searchedAdresses;
        let dropOffLocation = this.state.searchedAdresses1;

        if(pickUpLoaction === '' && dropOffLocation === ''){
            alert('Please Specify The Locations!!');
        }else{
            this.props.navigation.navigate('summary',{
                pickup: pickUpLoaction,
                dropOff: dropOffLocation
            });
        }
        
      }
      static navigationOptions = {
        title: 'Select Location',
        headerStyle: {
            backgroundColor: '#3f51b5',
          },
          headerTintColor: '#fff',
      };
      searchedAdresses = (searchedText) => {
        let searchedAdresses = places.filter(function(adress) {
          return adress.country.toLowerCase().indexOf(searchedText.toLowerCase()) > -1;
        });
        // alert(JSON.stringify(searchedAdresses));
        this.setState({searchedAdresses: searchedAdresses});
      };
      searchedAdresses1 = (searchedText) => {
        let searchedAdresses = places.filter(function(adress) {
          return adress.country.toLowerCase().indexOf(searchedText.toLowerCase()) > -1;
        });
        // alert(JSON.stringify(searchedAdresses));
        this.setState({searchedAdresses1: searchedAdresses});
      };
    
        renderAdress = (adress) => {
        return (
            
          <View style={{justifyContent:'center', alignItems:'center'}}>
            <Text style={{fontWeight:'bold',fontSize:15}}>{adress.country}</Text>
          </View>
         
        );
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
                      <View style={{flex:0.5}}>
                            <TextInput 
                                style={styles.textinput}
                                onChangeText={this.searchedAdresses}
                                placeholder="Type your adress here" />
                            <ListView
                            dataSource={ds.cloneWithRows(this.state.searchedAdresses)}
                            renderRow={this.renderAdress} />
                      </View>
                      <Right>
                      <View></View>
                      <View>
                            <TextInput 
                                style={styles.textinput}
                                onChangeText={this.searchedAdresses1}
                                placeholder="Type your adress here" />
                            <ListView
                            dataSource={ds.cloneWithRows(this.state.searchedAdresses1)}
                            renderRow={this.renderAdress}
                            renderSeparator={(rowId) => <View key={rowId} style={styles.separator} />} />
                      </View>
                      </Right>
                    </View>
                </Content>
                    <Button full style={{margin:10}} onPress={this.doWork} >
                        <Text style={{color:'#fff', fontSize:20}}>Next </Text> 
                    </Button>
                
            </Container>    
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#FFFFFF',
    },
    textinput: {
      marginTop: 30,
      backgroundColor: '#DDDDDD',
      height: 40,
      width: 150,
    },
    separator: {
        
        height: StyleSheet.hairlineWidth,
        backgroundColor: '#8E8E8E',
      },
  });
export default SelectPage;