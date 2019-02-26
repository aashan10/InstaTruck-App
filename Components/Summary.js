import React, {Component} from 'react';
import { Text, View} from 'react-native';
import{Container, Content, Card, CardItem, Header, Left, Badge, Footer, FooterTab, Button, Right} from 'native-base';
class LocationSummary extends Component
{
    constructor(props)
    {
        super(props);
       
    }
    render()
    {
        const pickup = this.props.navigation.getParam('pickup','empty');
        const dropOff = this.props.navigation.getParam('dropOff','empty');
        return(
            <Container>
               
                <Content>
                    <Card style={{padding:20, margin:40}}>
                        <CardItem>
                        <Left>
                            <Badge >
                                <Text style={{color:'#fff', alignContent:'center',alignItems:'center'}}>Pickup</Text>
                            </Badge>
                        </Left>
                            <Text style={{color:'#000', fontSize:15}}>
                                {JSON.stringify(pickup)}                            
                            </Text>
                        </CardItem>
                    </Card>
                    <Card style={{margin:40, padding:20}}>
                        <CardItem>
                        <Left>
                            <Badge success >
                                <Text style={{color:'#fff'}}>DropOff</Text>
                            </Badge>
                        </Left>
                            <Text style={{color:'#000', fontSize:15}}>
                                {JSON.stringify(dropOff)}                            
                            </Text>
                        </CardItem>
                    </Card>
                </Content>
                <Footer>
                    <FooterTab>
                        <Button onPress={() => this.props.navigation.goBack()}>
                            <Text style={{color:'#fff'}}> Prev</Text>
                        </Button>
                        <Button>
                            <Text style={{color:'#fff'}}>Next</Text>
                        </Button>
                    </FooterTab>
                </Footer>
          </Container>
        );
    }
}
export default LocationSummary;

// https://places.cit.api.here.com/places/v1/autosuggest?at=40.74917,-73.98529&q=chrysler&app_id={4IA6YSooyQZhtBt6OYsK}&app_code={KjeIkxpV6veS8Hj3fn4ASA}