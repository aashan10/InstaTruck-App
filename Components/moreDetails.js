import React, {Component} from 'react';
import {View, Text, Switch} from 'react-native';
import {Container, Content, Icon, Right, Separator, List, ListItem, Left, Body} from 'native-base';

class MoreDetails extends Component
{
    constructor(props){
        super(props);
        this.state= ({
            trueSwitchIsOn: true,
            falseSwitchIsOn: false,
            garyo:false,
            laterSwitch:false,
            VehicleType: 'Closed'
        });
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
                                onValueChange={this.toggleRubberizedSwitch}
                                style={{marginBottom:10}}
                                />
                        </Right>
                    </ListItem>
                    </List>
                </Content>
            </Container>
        );
    }
}

export default MoreDetails;