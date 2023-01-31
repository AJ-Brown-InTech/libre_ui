import React, { Component } from 'react'
import { View, Text, SafeAreaView, TextInput, Dimensions, StyleSheet, TouchableOpacity } from "react-native";
import '../../styles/styles'
import styles from '../../styles/styles';
export default class RegisterTwo extends Component {
  
  render() {
    
    return (

  <SafeAreaView style={styles.container}>
      <Text style={{fontSize: ((styles.height/styles.width) *10), textTransform: 'uppercase', fontWeight:'500', padding:'2%'}}>Create a username</Text>
      <TextInput type='text' placeholder='@Username' placeholderTextColor='darkgrey' style={styles.textinput}></TextInput>
      <TouchableOpacity  style={styles.signupbtn} onPress={()=>this.props.navigation.navigate('RegisterThree')}>
      <Text style={styles.signupbtntext}>Next</Text>
      </TouchableOpacity>
  </SafeAreaView>
    
    )
  }
}
