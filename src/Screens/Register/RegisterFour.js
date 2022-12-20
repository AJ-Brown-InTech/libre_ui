import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from "react-native"
import {Picker} from '@react-native-picker/picker'
import styles from '../../styles/styles'

export default class RegisterFour extends Component {
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
           <Text style={styles.title}>Select your account type.</Text>
           <Picker 
              style={styles.input}
              selectedValue={this.state.selected}
              onValueChange={(option)=>this.setState({selected: option})}>
                <Picker.Item label='Business' value='1'></Picker.Item>
                <Picker.Item label='Content Creator' value='2'></Picker.Item>
                <Picker.Item label='Personal' value='3'></Picker.Item>
            </Picker>
            <TouchableOpacity style={styles.loginbtn} onPress={()=>this.props.navigation.navigate('Home')}>
              <Text style={styles.loginbtntext}>Next</Text>
            </TouchableOpacity> 
          </View>
    )
  }
}
