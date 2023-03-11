import React, { Component } from 'react'
import { View, Text, TextInput, TouchableOpacity, Linking } from "react-native";
import styles from '../../styles/styles'
import { Query, QueryCache } from '@tanstack/react-query';
import { SafeAreaView } from 'react-native-safe-area-context';
import qs from 'qs';

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

async  sendEmail(to, subject, body, options = {}) {
  this.setState({emailCode: Math.random()})
  console.log("Generated email verifcation, 201")
  const { cc, bcc } = options;

  let url = `mailto:${to}`;

  // Create email link query
  const query = qs.stringify({
      subject: subject,
      body: body,
      cc: cc,
      bcc: bcc
  });

  if (query.length) {
      url += `?${query}`;
  }

  // check if we can use this link
  const canOpen = await Linking.canOpenURL(url);

  if (!canOpen) {
      throw new Error('Provided URL can not be handled');
  }

  return Linking.openURL(url);
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
   this.props.navigation.navigate('RegisterTwo')
  } else{
    this.setState({error: 'Error creating an account, try again'})
  }
}



render() {

 console.log(this.state)
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


 {/* <View style={{'flexDirection': 'row', 'borderRadius':10,'borderWidth':0.5,'overflow': 'hidden',}}> */}
           
            {/* <TouchableOpacity onPress={()=>this.sendEmail(
                    this.state.email,
                      'Libra Email Verification',
                    `${this.state.emailCode} is your Libra code. Just FYI, it'll expire soon`,
                  { cc: 'ajalantbrown@gmail.com;' }
                  ).then(() => {
                    console.log('Your message was successfully sent!');
                  }).catch(err => console.log(err))}>
            <Text style={{
              'height': 40,
              'padding':10,
              'backgroundColor': '#83cc9a'
            }}>Send Code</Text>
            </TouchableOpacity>
            <TextInput style={{
              'height': 40,
              'borderLeft':0.5,
              'padding':10
            }}
            onChangeText={event=> console.log(event)}
            value={this.state.emailCode}
            placeholder="Verification Code"
            keyboardType="numeric"
            /> */}
      
         {/* sendEmail(
    'user@domain.com',
       'We need your feedback',
    'UserName, we need 2 minutes of your time to fill this quick survey [link]',
 { cc: 'user@domain.com; user2@domain.com; userx@domain1.com' }
).then(() => {
    console.log('Your message was successfully sent!');
}); */}  