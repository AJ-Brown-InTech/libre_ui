import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from "react-native"
import DatePicker from 'react-native-date-picker'
import styles from '../../styles/styles'
export default class RegisterThree  extends Component {
  constructor(props){
  super(props)
  this.state = { date: new Date(),
    selected: undefined
      }
  this.setDate = this.setDate.bind(this)
}
setDate(newDate) {
  this.setState({date: newDate});
}
  render() {
  

    return (
          <View style={styles.container}>
            <Text style={styles.title}>Select your birthday.</Text>
            <DatePicker 
              style={styles.textinput}
              mode='date'
              date={this.state.date}
              onDateChange={(date)=> this.setDate(date)}
              maximumDate={new Date(Date.now())}
              />
         <TouchableOpacity style={styles.loginbtn} onPress={()=>this.props.navigation.navigate('RegisterFour')}>
            <Text style={styles.loginbtntext}>Continue</Text>
          </TouchableOpacity>
          </View>
    
    )
  }
}
