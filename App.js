import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native'; //navigation router container
import { createNativeStackNavigator } from '@react-navigation/native-stack'; //navigation router
import { SafeAreaProvider } from 'react-native-safe-area-context'; //screen handler for safeviewprovider
import Login from './src/Screens/Login/Login'
import RegisterOne from './src/Screens/Register/RegisterOne'
import RegisterTwo from './src/Screens/Register/RegisterTwo'
import RegisterThree from './src/Screens/Register/RegisterThree'
import RegisterFour from './src/Screens/Register/RegisterFour'
import Home from './src/Screens/Home/Home'

const Stack = createNativeStackNavigator();

class App extends React.Component {

  render (){

    return(
 <SafeAreaProvider>
    <NavigationContainer intialRouteName={Login}>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Login" component={Login} data={this.state}/>
        <Stack.Screen name="RegisterOne" component={RegisterOne} data={this.state}/>
        <Stack.Screen name="RegisterTwo" component={RegisterTwo} data={this.state}/>
        <Stack.Screen name="RegisterThree" component={RegisterThree} data={this.state}/>
        <Stack.Screen name="RegisterFour" component={RegisterFour} data={this.state}/>
        <Stack.Screen name="Home" component={Home} data={this.state}/>
      </Stack.Navigator>
    </NavigationContainer>
</SafeAreaProvider>
    )
    }
};

export default App
