import React, { Component } from 'react'
import { TextInput, Text, TouchableOpacity} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from '../../styles/styles'
export default class Login extends Component {
  constructor(props){
    super(props)
  
  }
  render() {
    return (

        <SafeAreaView style={styles.container}>
          <Text style={styles.title}>Log in to Libre</Text>
            <TextInput style={styles.textinput} placeholder='Email or username' placeholderTextColor='darkgrey'/> 
            <TextInput style={styles.textinput} placeholder='Password' placeholderTextColor='darkgrey'/>

              <TouchableOpacity style={styles.signupbtn}onPress={()=>this.props.navigation.navigate('Home')} >
                  <Text style={styles.signupbtntext} >Log in</Text>
              </TouchableOpacity>
              <Text style={styles.forgot}>Forgot Username/Password?</Text>
              <SafeAreaView style={styles.footer}>
                <Text style={styles.footertxt}>Don't have an account? 
                  <Text style={{fontWeight: '600'}}  onPress={()=> this.props.navigation.navigate('RegisterOne')}> Sign Up</Text>
                </Text>
              </SafeAreaView> 
        </SafeAreaView>
    )
  }
}
 