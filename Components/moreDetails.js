import React, {Component} from 'react';
import {View, Text, Switch,Slider, Alert} from 'react-native';
import {Container, Content, Icon, Right, List, ListItem, Left, Body, Input, Button, Item, Label} from 'native-base';
import {withNavigation} from 'react-navigation';
import MultiSelect from 'react-native-multiple-select';
 class MoreDetails extends Component
{
    constructor(props) {
            super(props);
            this.state = ({
                trueSwitchIsOn: true,
                falseSwitchIsOn: false,
                garyo: false,
                laterSwitch: false,
                VehicleType: 'Closed',
                rubbertrueswitchIsOn: true,
                rubberfalseSwitchIsOn: false,
                rubberlaterSwitch: false,
                value: 0,
                selectedItems: [],
                labourConfirm: false,
                comment: '',
                rubberizedPlatform: false,
            });
        this.items = [{
            id: '92iijs7yta',
            name: 'Household Goods',
        }, {
            id: 'a0s0a8ssbsd',
            name: 'Construction Materials',
        }, {
            id: '16hbajsabsd',
            name: 'Spare Parts',
        }, {
            id: 'nahs75a5sg',
            name: 'Food Items',
        }, {
            id: '667atsas',
            name: 'Garments/Textiles',
        }, {
            id: 'hsyasajs',
            name: 'Plywood/Timber',
        }, {
            id: 'djsjudksjd',
            name: 'Medicial Supplies/Pharmacy',
        }, {
            id: 'sdhyaysdj',
            name: 'Soaps and/or FMCG',
        }, {
            id: 'suudydjsjd',
            name: 'Furniture',
        }];

        }
    static navigationOptions = {
        title: 'Add More Details',
        headerStyle: {
            backgroundColor: '#3f51b5',
        },
        headerTintColor: '#fff',
    };
      toggleVehicleSwitch = (value) => {
          if (!this.state.laterSwitch) {
              this.setState({
                  falseSwitchIsOn: value,
                  garyo: true,
                  laterSwitch: true,
                  VehicleType: 'Open'
              });
              return;
          }
          if (this.state.laterSwitch != false) {
              this.setState({
                  falseSwitchIsOn: false,
                  garyo: false,
                  laterSwitch: false,
                  VehicleType: 'Closed'
              });
          }
      }
      toggleRubberizedSwitch = (value) => {
          if (!this.state.rubberlaterSwitch) {
              this.setState({
                rubberizedPlatform:true,
                  rubberfalseSwitchIsOn: value,
                  rubberlaterSwitch: true
              });
              return;
          }
          if (this.state.rubberlaterSwitch != false) {
              this.setState({
                rubberizedPlatform:false,
                  rubberfalseSwitchIsOn: false,
                  rubberlaterSwitch: false,

              });
          }
      }
      change = (value) => {
          this.setState(() => {
              return {
                  value: parseFloat(value),
              };
          });
          this.setState({
              labourConfirm: true
          });
      }
    onSelectedItemsChange = (selectedItems) => {
        this.setState({
            selectedItems: selectedItems
        });
    };

      gotToNextPage = () =>{
          if (this.state.selectedItems.length <= 0) {
              alert('Please Select the  Goods Details');
              return;
          }
          const pickUpLocation = this.props.navigation.getParam('pickup','empty');
          const dropOffLocation = this.props.navigation.getParam('dropOff','empty');
          const date = this.props.navigation.getParam('date','empty');
          const time = this.props.navigation.getParam('time','empty');    
          const vehicleType = this.props.navigation.getParam('vehicleType','empty');
          if (this.state.value === 0) {
              Alert.alert(
                  'Labour Cost',
                  'Are You Sure about labour cost?? It is currently set to ZERO.',
                  [{
                          text: 'NO',
                          onPress: () => this.setState({
                              labourConfirm: false
                          })
                      },
                      {
                          text: 'YES',
                          onPress: () => {
                              this.setState({
                                  labourConfirm: true
                              });
                              this.props.navigation.navigate('placeOrder',{
                                  comment: this.state.comment,
                                  pickUp: pickUpLocation ,
                                  dropOff: dropOffLocation ,
                                  date:date,
                                  time:time,
                                  vechileType:vehicleType,
                                  closedType:this.state.VehicleType,
                                  rubberizedPlatform:this.state.rubberizedPlatform,
                                  goodsDetails:this.state.selectedItems,
                              })
                          }
                      },
                  ]
              );
          }
          this.state.labourConfirm ? this.props.navigation.navigate('placeOrder',{
                                  comment: this.state.comment,
                                  pickUp: pickUpLocation,
                                  dropOff : dropOffLocation,
                                  date:date,
                                  time:time,
                                  vechileType:vehicleType,
                                  closedType:this.state.VehicleType,
                                  rubberizedPlatform:this.state.rubberizedPlatform,
                                  goodsDetails:this.state.selectedItems,
          }) : null;
          }

    render()
    {
        const RedText = <Text style={{color:'#EA2027'}}>{this.state.VehicleType}</Text>
        const GreenText = <Text style={{color:'#009432'}}>{this.state.VehicleType}</Text>
        return(
            <Container>
                <Content>
                    <List style={{marginTop:20}}>
                    <ListItem icon>
                    <Left>
                    <Icon active name="car"  /> 
                    </Left>
                    <Body>
                    <Text style={{fontSize:18}}> Vehicle Type</Text>
                    </Body>
                    <Right>
                    {this.state.VehicleType == 'Open'? GreenText : RedText }
                        <Switch
                        onValueChange={this.toggleVehicleSwitch}
                        style={{marginBottom: 10}}
                        value={this.state.falseSwitchIsOn}  />
                    </Right>
                    </ListItem>

                    <ListItem icon>
                        <Left>
                            <Icon active name="logo-buffer" />
                        </Left>
                        <Body>
                            <Text>Rubberized Platform</Text>
                        </Body>
                        <Right>
                            <Switch
                                value={this.state.rubberfalseSwitchIsOn}
                                onValueChange={this.toggleRubberizedSwitch}
                                style={{marginBottom:10}}
                                />
                        </Right>
                    </ListItem>

                    <ListItem icon style={{padding:10}}>
                        <Left>
                            <Icon active name="construct" />
                        </Left>
                        <Body>
                            <Text>Labour</Text>
                            <Slider
                             step={1}
                             maximumValue={10}
                             value={this.state.value}
                             onValueChange={this.change.bind(this)} />
                        </Body>
                        <Right>
                            <Text style={{fontSize:20, fontWeight:'bold'}}>{this.state.value}</Text>
                        </Right>
                    </ListItem>
                    <View style={{ margin:15}}>
                        <Text style={{padding:10, fontWeight:'bold', fontSize:17}}>Goods Details:</Text>
                            <MultiSelect    
                            items={this.items}
                            uniqueKey="name"
                            ref={(component) => { this.multiSelect = component }}
                            onSelectedItemsChange={this.onSelectedItemsChange}
                            selectedItems={this.state.selectedItems}
                            selectText="Select Goods Details"
                            searchInputPlaceholderText="Search Goods Type..."
                            submitButtonColor="#2980b9"
                            tagBorderColor="#CCC"/>
                         </View>
                        <ListItem icon>
                            <Left>
                                <Icon name="chatboxes" />
                            </Left>
                            <Body>
                                <Item floatingLabel>
                                    <Label>Comments</Label>
                                    <Input  onChangeText={(text) => this.setState({comment:text})}/>
                                </Item>
                            </Body>
                        </ListItem>
                   </List>
                </Content>
                <View style={{margin:10}} >
                    <Button block onPress={this.gotToNextPage} >
                        <Text style={{color:'#fff'}}>Next</Text>
                    </Button>
                  </View>
            </Container>
        );
    }
}

export default withNavigation(MoreDetails);

