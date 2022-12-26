import React, { Component } from 'react'
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import styles from '../../styles/styles'
import { SafeAreaView } from 'react-native-safe-area-context';

export default class RegisterOne extends Component {
  
  render() {
  
    return (
        <SafeAreaView style={styles.container}>
         <Text style={styles.title}>Sign Up</Text>
         <TextInput placeholder='Password'style={styles.textinput} placeholderTextColor='darkgrey'/>
         <TextInput placeholder='Email'style={styles.textinput} placeholderTextColor='darkgrey'/>
         <Text style={styles.fineprint}>By pressing Sign Up & Accept you acknowledge you have read our privacy policy and agree to our Terms of Service.</Text>
         <TouchableOpacity style={styles.signupbtn} onPress={()=>this.props.navigation.navigate('RegisterTwo')}>
            <Text style={styles.signupbtntext}>Sign Up & Accept</Text>
          </TouchableOpacity>
        <SafeAreaView style={styles.footer}><Text>Already have an account? <Text style={{fontWeight: '700'}} onPress={()=>this.props.navigation.navigate('Login')}>Log In</Text></Text></SafeAreaView> 
        </SafeAreaView>
    
    )
  }
}
