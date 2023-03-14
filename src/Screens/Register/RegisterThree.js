import React, { Component } from 'react'
import { View, Text, TouchableOpacity, TextInput } from "react-native"
import DatePicker from 'react-native-date-picker'
import styles from '../../styles/styles'
import rest_api from '../../lib/rest'
export default class RegisterThree  extends Component {
  constructor(props){
  super(props)
  this.state = { date: new Date(),
    selected: undefined,
    error: ''
      }
  this.setDate = this.setDate.bind(this)
}
setDate(newDate) {
  this.setState({date: newDate});
}

formatDate(date){
  let FormatDate = date.toLocaleDateString()
  return FormatDate
}

createUserAccount(){
  let birthday = this.formatDate(this.state.date)
  console.log(birthday)
  let payload = {dob: birthday, ...this.props.route.params}
  //post request to the backend
  let api = rest_api.api_instance()
  api.post("/register", payload).then((res)=>{
     if (res.status == 200){
      this.setState({error:''})
      return this.props.navigation.navigate('Home')
     }
   }).catch(err => {
    console.log("TEST",err)
    return this.setState({error: err})
   })
} 
  render() {
    return (
          <View style={styles.container}>
            <Text style={{fontSize: ((styles.height/styles.width) *10), textTransform: 'uppercase', fontWeight:'500', padding:'2%'}}>Select your birthday</Text>
            <DatePicker 
            textColor='black'
              mode='date'
              date={this.state.date}
              onDateChange={(date)=> this.setDate(date)}
              maximumDate={new Date(Date.now())}
              minimumDate={new Date(new Date().setFullYear(new Date().getFullYear() - 90))}
              />
               <TextInput error={this.state.error} value={this.state.error}/>
         <TouchableOpacity style={styles.signupbtn} onPress={()=> this.createUserAccount()}>
            <Text style={styles.signupbtntext}>Finish</Text>
          </TouchableOpacity>
          </View>
    
    )
  }
}
