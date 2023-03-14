import React, { Component } from 'react'
import { View, Text, SafeAreaView, TextInput, TouchableOpacity } from "react-native";
import '../../styles/styles'
import styles from '../../styles/styles';
 export default class RegisterTwo extends Component {
  constructor(props){
    super(props)
    this.state =  {
      username: '',
      error:''
    }
  }
  
  handleChange = event => {
    if (event.length <= 6){
      this.setState({ username:event, error: 'Username length is too short' })
      console.log("Username length is too short");
      return
    } else {
     this.setState({ username: event,  error: '' })
      console.log("Username is valid");
     return
   }
 }
  
 verifedHandler(){
  if (this.state.username && this.state.error == '' ){
    this.props.navigation.navigate('RegisterThree', {username: this.state.username, ...this.props.route.params})
  } else{
    this.setState({error: 'Error creating a username'})
  }
}

  render() {

    return (
  <SafeAreaView style={styles.container}>
      <Text style={{fontSize: ((styles.height/styles.width) *10), textTransform: 'uppercase', fontWeight:'500', padding:'2%'}}>Create a username</Text>
      <TextInput type='text' placeholder='@Username' placeholderTextColor='darkgrey' style={styles.textinput} onChangeText={event => {this.handleChange(event)}}></TextInput>
      <TextInput error={this.state.error} value={this.state.error}/>
      <TouchableOpacity  style={styles.signupbtn} onPress={()=>this.verifedHandler()}> 
      <Text style={styles.signupbtntext}>Next</Text>
      </TouchableOpacity>
  </SafeAreaView>
    
    )
  }
}
