import {Component} from 'react'
import {Text, View} from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import styles from '../../../styles/styles'
const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
}



class Feed extends Component {
render(){
    return(
        <View style={styles.screen}>
            <Text >Feed Page</Text>
  
           </View>
           
           )
}

}

  export default Feed