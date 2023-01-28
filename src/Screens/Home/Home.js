import {Component} from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
//import styles from '../../styles/styles'
//Main User screens
import Activity from './Activity/Activity'
import Discover from './Discover/Discover'
import Feed from './Feed/Feed'
import Profile from './Profile/Profile'
import Post from './Post/Post'

const Tab = createBottomTabNavigator();

class Home extends Component {
  
render(){
  const screenOptions = {
    unmountOnBlur: false,
    headerShown: false,
    tabBarStyle:{
      backgroundColor:'rgba(0,0,0,0.0)',
      color:'rgba(0,0,0,0.0)',
      border:0, 
  
    },
    tabBarItemStyle:{
     backgroundColor:'rgba(0,0,0,0.0)',
     border:0, 
    
    }
  };
  const color = 'whitesmoke'
    return(
   
    <Tab.Navigator 
    {...{ screenOptions }}
    initialRouteName="Feed"
    tabBarOptions={{
      activeTintColor: '#83cc9a',
      tabBarPosition: 'bottom',
      swipeEnabled: true,
      lazy: false,
      removeClippedSubviews: false,
      showLabel: false,
     
    }}>
      <Tab.Screen name="Feed" component={Feed} 
      options={{
          tabBarLabel: 'Feed',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size}  focused={true}/>
          ),
          headerShown: false
        }} />

      <Tab.Screen name="Discover" component={Discover} 
      options={{
        tabBarLabel: 'Discover',
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="magnify" color={color} size={size} focused={true}/>
        ),
        headerShown: false
      }}/>
           <Tab.Screen name="Post" component={Post} 
      options={{
        tabBarLabel: 'Post',
        tabBarIcon: ({ color , size}) => (
          <MaterialCommunityIcons name="plus-box" color={color} size={size} focused={true}/>
        ),
        headerShown: false
      }}/>
              <Tab.Screen name="Activity" component={Activity}  
      options={{
        tabBarLabel: 'Activity',
        tabBarIcon: ({ color, size, }) => (
          <MaterialCommunityIcons name="bell" color={color} size={size} focused={true} />
        ),
        tabBarBadge: 3,
        headerShown: false
      }}/>
      <Tab.Screen name="Profile" component={Profile} 
      options={{
        tabBarLabel: 'Profile',
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="account" color={color} size={size} focused={true} />
        ),
        headerShown: false
      }}/>
    </Tab.Navigator>
            )
    }
}

  export default Home