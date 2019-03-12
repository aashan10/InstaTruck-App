import React, {Component} from 'react';
import {View,Text, AsyncStorage} from 'react-native';
import {Button, Container,Content, Header, Drawer, Left, Icon, Body} from 'native-base';
import {withNavigation} from 'react-navigation';
import SideBar from './Drawer/sideBar';
class Logout extends Component
{
    logout = async() => {
       await  AsyncStorage.removeItem('userToken');
        this.props.navigation.navigate('Auth');
    }
    closeDrawer = () => {
        this.drawer._root.close()
      };
      openDrawer = () => {
        this.drawer._root.open()
      };
      static navigationOptions = {  header: null };
    render()
    {
        return(
            <Drawer
            ref={(ref) => { this.drawer = ref; }}
            content={<SideBar navigator={this.navigator} />}
            onClose={() => this.closeDrawer()} >  
            <Container>
                <Header>
                    <Left>
                        <Button transparent onPress= { () => this.openDrawer()}>
                            <Icon name="menu"/>
                        </Button>
                    </Left> 
                    <Body>
                        <Text style={{fontSize:18, color:'#fff'}}>Logout</Text>
                    </Body>
                </Header>
                <Content>
                <View style={{alignContent:'center',alignItems:'center'}}>
                <Button full style={{margin:50}} onPress={this.logout}>
                <Text style={{color:'#fff', fontSize:20}}>Logout</Text>
                </Button>
            </View>
                </Content>
            </Container>
            </Drawer>
           
        );
    }
}
export default withNavigation(Logout);