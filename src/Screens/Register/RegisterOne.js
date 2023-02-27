import React, { Component } from 'react'
import { View, Text, TextInput, TouchableOpacity, Linking } from "react-native";
import styles from '../../styles/styles'
import { SafeAreaView } from 'react-native-safe-area-context';
import qs from 'qs';

export default class RegisterOne extends Component {
  constructor(props){
  super(props)
  this.state = {
    routeName: this.props.route.name,
    password: '',
    email: '',
    error: '',
    verified: false,
    emailCode: 0
  }
}

//   handleChange = (event) => {
//     console.log(event)
//     this.setState({ email: event });
    
//  };

 validate = (text) => {
  let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
  if (reg.test(text) === false) {
    this.setState({error: 'Email is invalid'})
    this.setState({ email: text.toLowerCase() })
    return false;
  } else {
    this.setState({error: ''})
    this.setState({ email: text.toLowerCase() })
    console.log("Email is Correct");
    return
  }
}

handleChange = event => {
   if (event < 6){
     this.setState({error: 'Password length is too short'})
     this.setState({ password: event.toLowerCase() })
     console.log("Password length is too short");
     return
   } else {
    this.setState({error: ''})
    this.setState({ password: event.toLowerCase() })
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


render() {

 console.log(this.state)
  //'{"username": "thisisatest", "email": "ajalantbrown@yahoo.com", "password": "password1234", "dob":"01/01/2021"}'
    return (
        <SafeAreaView style={styles.container}>
         <Text style={styles.title}>Sign Up</Text>
         <TextInput placeholder='Email' style={styles.textinput} placeholderTextColor='darkgrey'  name='email' value={this.state.email} onChangeText={event => this.validate(event)} />
         <TextInput placeholder='Password' style={styles.textinput} placeholderTextColor='darkgrey' name='password' value={this.state.password} onChangeText={event => this.handleChange(event)} type="password"  />
         <View style={{'flexDirection': 'row', 'borderRadius':10,'borderWidth':0.5,'overflow': 'hidden',}}> 
            <TouchableOpacity onPress={()=>this.sendEmail(
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
            />
        </View>
         {/* sendEmail(
    'user@domain.com',
       'We need your feedback',
    'UserName, we need 2 minutes of your time to fill this quick survey [link]',
 { cc: 'user@domain.com; user2@domain.com; userx@domain1.com' }
).then(() => {
    console.log('Your message was successfully sent!');
}); */}
         {/* <TouchableOpacity style={styles.signupbtn} onPress={()=>this.props.navigation.navigate('RegisterTwo')}>
            <Text style={styles.signupbtntext}>Continue</Text>
          </TouchableOpacity>
          <Text style={styles.fineprint}>By signing up you acknowledge and have read our privacy policy and agree to our terms of service.</Text> */}
        
           <View style={styles.footer}>
                <Text style={styles.footertxt}>Already have an account? 
                  <Text style={{fontWeight: '600'}}  onPress={()=> this.props.navigation.navigate('Login')}> Login</Text>
                </Text>
              </View> 
        </SafeAreaView>
    
    )
  }
}
