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
            <Text style={{fontSize: ((styles.height/styles.width) *10), textTransform: 'uppercase', fontWeight:'500', padding:'2%'}}>Select your birthday</Text>
            <DatePicker 
            textColor='black'
            
              mode='date'
              date={this.state.date}
              onDateChange={(date)=> this.setDate(date)}
              maximumDate={new Date(Date.now())}
              />
         <TouchableOpacity style={styles.signupbtn} onPress={()=>this.props.navigation.navigate('Home')}>
            <Text style={styles.signupbtntext}>Finish</Text>
          </TouchableOpacity>
          </View>
    
    )
  }
}
