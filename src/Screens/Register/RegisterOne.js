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
         <Text style={styles.title}>Sign Up</Text>
         
        <TextInput placeholder='Use phone or email'style={styles.textinput}/>
        <TextInput placeholder='Create a password'style={styles.textinput}></TextInput>
      
     <TouchableOpacity style={styles.loginbtn} onPress={()=>this.props.navigation.navigate('RegisterTwo')}>
            <Text style={styles.loginbtntext}>Continue</Text>
          </TouchableOpacity>
        {/* <SafeAreaView style={{top:  deviceHeight/5}}><Text>Already have an account? <Text style={{fontWeight: '700'}} onPress={()=>this.props.navigation.navigate('Login')}>Log In</Text></Text></SafeAreaView>  */}
        </SafeAreaView>
    
    )
  }
}
