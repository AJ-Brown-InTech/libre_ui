import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native'; //navigation router container
import { createNativeStackNavigator } from '@react-navigation/native-stack'; //navigation router
import { SafeAreaProvider } from 'react-native-safe-area-context'; //screen handler for safeviewprovider
import { Query,QueryCache, QueryClient, QueryClientProvider } from '@tanstack/react-query'; // state management, cache, pretty much a small piece of heaven
import Login from './src/Screens/Login/Login'
import RegisterOne from './src/Screens/Register/RegisterOne'
import RegisterTwo from './src/Screens/Register/RegisterTwo'
import RegisterThree from './src/Screens/Register/RegisterThree'
import RegisterFour from './src/Screens/Register/RegisterFour'
import Home from './src/Screens/Home/Home'

const Stack = createNativeStackNavigator();

class App extends React.Component {

  render (){
    const client = new QueryClient()

    return(
 <SafeAreaProvider>
  <QueryClientProvider client={client} contextSharing={true}>
    <NavigationContainer intialRouteName={Login}>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="RegisterOne" component={RegisterOne} />
        <Stack.Screen name="RegisterTwo" component={RegisterTwo} />
        <Stack.Screen name="RegisterThree" component={RegisterThree} />
        <Stack.Screen name="RegisterFour" component={RegisterFour} />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
    </QueryClientProvider>
</SafeAreaProvider>
    )
    }
};

export default App
