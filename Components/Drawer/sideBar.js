import React, {Component} from 'react';
import {Text, StyleSheet, Platform, Dimensions, Image} from 'react-native';
import {Container, Content, List, ListItem} from 'native-base';
import {withNavigation} from 'react-navigation';


const items = [
    {
        name : 'Home',
        route: 'Home',
        id:'1'

    },
    {
        name:'Logout',
        route:'logout',
        id:'2'
    }
];
const deviceHeight = Dimensions.get("window").height;
const drawerImg = require('../images/drawer-cover.png');

class SideBar extends Component  
{
    constructor(props) {
        super(props);
        this.state = {
          shadowOffsetWidth: 1,
          shadowRadius: 4
        };
      }
    render(){
        return(
            <Container>
                <Content bounces={false} style={{ flex: 1, backgroundColor: "#fff", top: -1 }}>

                <Image source={drawerImg} style={styles.drawerCover} />
                    <List>
                        <ListItem  button noBorder onPress={() => this.props.navigation.navigate('profile') }>
                            <Text style={{fontSize:18}}>Profile</Text>
                        </ListItem>
                        <ListItem button noBorder onPress={()=> this.props.navigation.navigate('logout')}>
                            <Text style={{fontSize:18}}>Logout</Text>
                        </ListItem>
                    </List>
                </Content>
            </Container>
                
            
        );
    }
}

const styles = StyleSheet.create({
    text: {
        fontWeight: Platform.OS === "ios" ? "500" : "400",
        fontSize: 16,
        marginLeft: 20
      },

      drawerCover: {
        alignSelf: "stretch",
        height: deviceHeight / 3.5,
        width: null,
        position: "relative",
        marginBottom: 10
      },
});

export default withNavigation(SideBar);