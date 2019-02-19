import {createDrawerNavigator, createAppContainer, withNavigation, createStackNavigator} from 'react-navigation';
import About from '../About';
import HomeDetails from '../Home/HomeDetails';
const nav = createDrawerNavigator({
    Home: {
        screen: HomeDetails
    },
    About : {
        screen: About
    },
},{
    drawerPosition: 'left',
    initialRouteName: 'Home',
    drawerBackgroundColor: 'gray',
    drawerWidth: 200,
});
export const Home = createAppContainer(nav);
export default withNavigation(Home);