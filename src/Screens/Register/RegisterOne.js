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
      
        
         <TouchableOpacity style={styles.signupbtn} onPress={()=>this.props.navigation.navigate('RegisterTwo')}>
            <Text style={styles.signupbtntext}>Continue</Text>
          </TouchableOpacity>
          <Text style={styles.fineprint}>By Signing up you acknowledge you have read our privacy policy and agree to our Terms of Service.</Text>
        
           <View style={styles.footer}>
                <Text style={styles.footertxt}>Already have an account? 
                  <Text style={{fontWeight: '600'}}  onPress={()=> this.props.navigation.navigate('Login')}> Login</Text>
                </Text>
              </View> 
        </SafeAreaView>
    
    )
  }
}
