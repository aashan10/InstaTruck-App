import React, {Component} from 'react';
import {View, Text, Switch,Slider} from 'react-native';
import {Container, Content, Icon, Right, Separator, List, ListItem, Left, Body} from 'native-base';
import {MultiSelect}  from 'react-native-multiple-select';
class MoreDetails extends Component
{
    constructor(props){
        super(props);
        this.state= ({
            trueSwitchIsOn: true,
            falseSwitchIsOn: false,
            garyo:false,
            laterSwitch:false,
            VehicleType: 'Closed',
            rubbertrueswitchIsOn:true,
            rubberfalseSwitchIsOn: false,
            rubberlaterSwitch:false,
            value:5,
            
        });
        this.items = [{
            id: '92iijs7yta',
            name: 'Ondo',
          }, {
            id: 'a0s0a8ssbsd',
            name: 'Ogun',
          }, {
            id: '16hbajsabsd',
            name: 'Calabar',
          }, {
            id: 'nahs75a5sg',
            name: 'Lagos',
          }, {
            id: '667atsas',
            name: 'Maiduguri',
          }, {
            id: 'hsyasajs',
            name: 'Anambra',
          }, {
            id: 'djsjudksjd',
            name: 'Benue',
          }, {
            id: 'sdhyaysdj',
            name: 'Kaduna',
          }, {
            id: 'suudydjsjd',
            name: 'Abuja',
          }];
          this.state = {
            selectedItems : []
          };
        
    }
    static navigationOptions = {
        title: 'Add More Details',
        headerStyle: {
            backgroundColor: '#3f51b5',
          },
          headerTintColor: '#fff',
      };
      toggleVehicleSwitch = (value) => {
        if(!this.state.laterSwitch){
            this.setState({
                 falseSwitchIsOn: value,
                 garyo: true,
                 laterSwitch:true,
                 VehicleType:'Open'
            });
            return;
        }
        if(this.state.laterSwitch!=false){
            this.setState({
                falseSwitchIsOn:false,
                garyo:false,
                laterSwitch:false,
                VehicleType:'Closed'
            });
        }
      }
      toggleRubberizedSwitch = (value) => {
            if(!this.state.rubberlaterSwitch){
                this.setState({
                    rubberfalseSwitchIsOn: value,
                    rubberlaterSwitch:true
                });
                return;
            }
            if(this.state.rubberlaterSwitch!=false){
                this.setState({
                    rubberfalseSwitchIsOn:false,
                    rubberlaterSwitch:false,
                    
                });
            }
      }
      change = (value) => {
            this.setState( () => {

                return {
                    value:parseFloat(value),
                };
            });
      }
     
      onSelectedItemsChange = selectedItems => {
        this.setState({ selectedItems });
      };
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

                    <ListItem icon>
                        <Left>
                            <Icon active name="labour" />
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

                    <ListItem icon>
                        <Left>
                            <Icon active name="database" />
                        </Left>
                        <Body>
                            <Text>Hellooo</Text>
                        </Body>
                    </ListItem>
                    </List>
                   
                </Content>
            </Container>
        );
    }
}

export default MoreDetails;


{/* <View style={{flex:1}}>
<MultiSelect
        hideTags
        items={this.items}
        uniqueKey="id"
        ref={(component) => { this.multiSelect = component }}
        onSelectedItemsChange={this.onSelectedItemsChange}
        selectedItems={this.selectedItems}
        selectText="Pick Items"
        searchInputPlaceholderText="Search Items..."
        onChangeInput={ (text)=> console.log(text)}
        altFontFamily="ProximaNova-Light"
        tagRemoveIconColor="#CCC"
        tagBorderColor="#CCC"
        tagTextColor="#CCC"
        selectedItemTextColor="#CCC"
        selectedItemIconColor="#CCC"
        itemTextColor="#000"
        displayKey="name"
        searchInputStyle={{ color: '#CCC' }}
        submitButtonColor="#CCC"
        submitButtonText="Submit"
        />
        <View>
        {this.multiSelect.getSelectedItemsExt(this.selectedItems)}
        </View>
</View> */}