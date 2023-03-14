import React, { Component } from 'react'
import { View, Text, TextInput, TouchableOpacity, Linking } from "react-native";
import styles from '../../styles/styles'
import { SafeAreaView } from 'react-native-safe-area-context';

 export default class RegisterOne extends Component {
  constructor(props){
  super(props)
  this.state = {
    routeName: this.props.route.name,
    password: '',
    passwordInput:false,
    email: '',
    emailInput:false,
    error: '',
    verified: false,
    emailCode: 0
  }
}

 validate = (text) => {
  let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
  if (reg.test(text) === false) {
    this.setState({error: 'Email is invalid'})
    this.setState({ email: text.toLowerCase(), emailInput: false })
    return 
  } else {
    this.setState({error: ''})
    this.setState({ email: text.toLowerCase(), emailInput: true })
    console.log("Email is Correct");
    return
  }
}

handleChange = event => {
   if (event.length < 6){
     this.setState({ password: event, passwordInput:false, error: 'Password length is too short' })
     console.log("Password length is too short");
     return
   } else {
    this.setState({ password: event, passwordInput: true, error: '' })
     console.log("Password is valid");
    return
  }
}

navigationHandler(){
  if(this.state.email && this.state.password != null && this.state.error.length <= 0){
    this.props.navigation.navigate('RegisterTwo')
    return
  } else{
    this.setState({error: 'Error creating account, please try again.'})
    return
  }
}

verifedHandler(){
  if (this.state.emailInput == true && this.state.passwordInput == true ){
    let userDetails = {email: this.state.email, password: this.state.password} 
    console.log(this.props)
  
   this.props.navigation.navigate('RegisterTwo', {email: this.state.email, password:this.state.password})
  } else{
    this.setState({error: 'Error creating an account, try again'})
  }
}

render() {
    return (
        <SafeAreaView style={styles.container}>
         <Text style={styles.title}>Sign Up</Text>
         <TextInput placeholder='Email' style={styles.textinput} placeholderTextColor='darkgrey'  name='email' value={this.state.email} onChangeText={event => this.validate(event)} type="text"/>
         <TextInput placeholder='Password' style={styles.textinput} placeholderTextColor='darkgrey' name='password' value={this.state.password} onChangeText={event => this.handleChange(event)} type="password" secureTextEntry={true}/>
         <TextInput error={this.state.error} value={this.state.error}/>
         <TouchableOpacity style={styles.signupbtn} onPress={()=>this.verifedHandler()}>
            <Text style={styles.signupbtntext}>Continue</Text>
          </TouchableOpacity>
          <Text style={styles.fineprint}>By signing up you acknowledge and have read our privacy policy and agree to our terms of service.</Text> 
          <View style={styles.footer}>
            <Text style={styles.footertxt}>Already have an account? 
              <Text style={{fontWeight: '600'}}  onPress={()=> this.props.navigation.navigate('Login')} > Login</Text>
            </Text>
          </View> 
        </SafeAreaView>
       
    )
  }
}