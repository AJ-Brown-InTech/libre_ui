import React, { Component } from 'react'
import { View, Text, TextInput, Dimensions, StyleSheet, TouchableOpacity } from "react-native";
import styles from '../../styles/styles'
import { SafeAreaView } from 'react-native-safe-area-context';

export default class RegisterOne extends Component {
  constructor(props){
    super(props)
    this.state = {
      selectedAccount : undefined,
      accounts: ['Business', 'Creator', 'Normee']
    }
  }
  render() {
  
    return (
        <SafeAreaView style={styles.container}>
         <Text style={styles.signuptitle}>Sign Up</Text>
         <TextInput placeholder='Password'style={styles.textinput}/>
         <TextInput placeholder='Email'style={styles.textinput}/>
         <Text style={styles.fineprint}>By pressing Sign Up & Accept you acknowledge you have read our privacy policy and agree to our Terms of Service.</Text>
         <TouchableOpacity style={styles.signupbtn} onPress={()=>this.props.navigation.navigate('RegisterTwo')}>
            <Text style={styles.signupbtntext}>Sign Up & Accept</Text>
          </TouchableOpacity>
          {console.log(this.props.navigation.navigate("Login"))}
        <SafeAreaView style={styles.footer}><Text>Already have an account? <Text style={{fontWeight: '700'}} onPress={()=>this.props.navigation.navigate('Login')}>Log In</Text></Text></SafeAreaView> 
        </SafeAreaView>
    
    )
  }
}
