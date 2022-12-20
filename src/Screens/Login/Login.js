import React, { Component } from 'react'
import { TextInput, Text, Dimensions, StyleSheet, TouchableOpacity, ImageBackground} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from '../../styles/styles'
export default class Login extends Component {
  render() {

    return (

        <SafeAreaView style={styles.container}>
          <Text style={styles.title}>Login into your account</Text>
            <TextInput style={styles.textinput} placeholder='username / phone / email' placeholderTextColor='darkgrey'/> 
            <TextInput style={styles.textinput} placeholder='password' placeholderTextColor='darkgrey'/>

              <TouchableOpacity style={styles.loginbtn}onPress={()=>this.props.navigation.navigate('Home')} >
                  <Text style={styles.loginbtntext} >Login</Text>
              </TouchableOpacity>
              <Text style={styles.forgot}>Forgot Password?</Text>
              <SafeAreaView style={styles.footer}>
                <Text style={styles.footertxt}>Don't have an account? 
                  <Text style={{fontWeight: '700'}}  onPress={()=> this.props.navigation.navigate('RegisterOne')}> Sign Up</Text>
                </Text>
              </SafeAreaView> 
        </SafeAreaView>
    )
  }
}
 