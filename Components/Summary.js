import React, {Component} from 'react';
import { Text, View} from 'react-native';
import{Container, Content, Card, CardItem, Header, Left, Badge, Footer, FooterTab, Button, Right} from 'native-base';
class LocationSummary extends Component
{
    constructor(props)
    {
        super(props);
       
    }
    static navigationOptions = {
        title: 'Location Summary',
        headerStyle: {
            backgroundColor: '#3f51b5',
          },
          headerTintColor: '#fff',
      };
    render()
    {
        const pickup = this.props.navigation.getParam('pickup','empty');
        const dropOff = this.props.navigation.getParam('dropOff','empty');
        return(
            <Container>
               
                <Content>
                    <Card style={{ margin:40,marginTop:20}}>
                        <CardItem>
                            <Badge >
                                <Text style={{color:'#fff', alignContent:'center',alignItems:'center'}}>Pickup</Text>
                            </Badge>
                            <View style={{alignContent:'center', alignItems:'center'}}>
                            <Text style={{color:'#000', fontSize:15, marginLeft: 78}}>
                                {JSON.stringify(pickup)}                            
                            </Text>
                            </View>
                        </CardItem>
                    </Card>
                    <Card style={{margin:40,marginTop:20}}>
                        <CardItem>
                            <Badge success >
                                <Text style={{color:'#fff'}}>DropOff</Text>
                            </Badge>
                            <View style={{alignContent:'center', alignItems:'center'}}>
                            <Text style={{color:'#000', fontSize:15, marginLeft:78}}>
                                {JSON.stringify(dropOff)}                            
                            </Text>
                            </View>
                        </CardItem>
                    </Card>
                </Content>
                <Footer>
                    <FooterTab>
                        <Button onPress={() => this.props.navigation.goBack()}>
                            <Text style={{color:'#fff'}}> Prev</Text>
                        </Button>
                        <Button onPress={() => this.props.navigation.navigate('Details')}>
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