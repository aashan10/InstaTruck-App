import React,{Component} from 'react';
import {View, Text, AsyncStorage, ScrollView} from 'react-native';
import {Container, Content, Card, CardItem} from 'native-base';

class Profile extends Component
{
    constructor(props){
        super(props);
        this.state = {
            userData:[],
        }
        this.getApiData();
    }
    getApiData = async() => {
        let url = 'https://epapi.pvdemo.com/employees?fields=id,name,email,job_title,start_date';
        let apiToken = await AsyncStorage.getItem('apiToken');
        console.log(apiToken);
        fetch(url,{
            method:'GET',
            headers:{
                'Authorization' : `Bearer ${apiToken}`,
            }
        }).then((response) => response.json())
          .then((responseJson) => {
              
              this.setState({
                  userData:responseJson.data
              })
              console.log(this.state.userData);
          }).catch((error) => {
              console.error(error);
          })
    }
    renderUsers(){
        return this.state.userData.map((data)=>{
    
            return(
                <Card key={data.id}>
                    <CardItem header bordered style={{margin:10}}>
                        <Text style={{fontSize:18, color:'#000', fontWeight:'bold'}}>{data.name}</Text>
                    </CardItem>
                    <CardItem cardBody style={{margin:10}}>
                        <Text style={{fontWeight:'bold'}}>Email:- </Text> 
                        <Text style={{fontSize:18}}>{data.email}</Text>
                    </CardItem>
                    <CardItem cardBody style={{margin:10}}>
                        <Text style={{fontWeight:'bold'}}>Job Title:- </Text> 
                        <Text style={{fontSize:18}}>{data.job_title}</Text>
                    </CardItem>
                </Card>
            );
        });
    }
    render(){
        return(
            <Container>
                <Content>
                    <ScrollView>
                    {this.renderUsers()}
                    </ScrollView>
                </Content>
            </Container>
        );
    }
}
export default Profile;