import React, { Component } from 'react'
import { View, Text, SafeAreaView, TextInput, Dimensions, StyleSheet, TouchableOpacity } from "react-native";
import '../../styles/styles'
import styles from '../../styles/styles';
export default class RegisterTwo extends Component {
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
      <Text style={styles.title}>Create a username.</Text>
      <Text style={styles.signupsubtext} >This is how others can connect with you on Libre.</Text>
      <TextInput type='text' placeholder='@Username' style={styles.textinput}></TextInput>
      <TouchableOpacity  style={styles.signupbtn} onPress={()=>this.props.navigation.navigate('RegisterThree')}>
      <Text style={styles.signupbtntext}>Next</Text>
      </TouchableOpacity>
  </SafeAreaView>
    
    )
  }
}
