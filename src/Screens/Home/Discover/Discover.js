import {Component} from 'react'
import {Text, SafeAreaView, ScrollView, View, TextInput, TouchableOpacity} from 'react-native'
import styles from '../../../styles/styles'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


class Discover extends Component {
render(){
    return(
        <SafeAreaView style={styles.screen}>
          <ScrollView showsVerticalScrollIndicator='true'>
            <View style={{flex: 1,}}>
              <Text style={{fontWeight:'500', fontSize: 80, letterSpacing: 2}}>Discover</Text>
              <View style={{flexDirection: 'row', alignItems: 'center', justifyContent:'center'}}>
              <TextInput placeholder='Search' style={{border: 1, borderWidth:2, borderColor:"#DFD8C8", padding: '2%', borderRadius:50, width: (styles.width/1.5), flex:1, backgroundColor:'#dcdcdc'}}>
                <MaterialCommunityIcons name="magnify" size={27} color={"#52575D"}></MaterialCommunityIcons>
              </TextInput>
              <TouchableOpacity >
                <Text style={{border: 1, borderWidth:0, padding:'2%', fontSize: 17, color:"#52575D"}}>Cancel</Text>
              </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
        </SafeAreaView>
           
           )
}

}

  export default Discover