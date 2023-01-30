import {Component} from 'react'
import {Text, SafeAreaView, ScrollView, View, TextInput, TouchableOpacity} from 'react-native'
import styles from '../../../styles/styles'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


class Discover extends Component {
render(){
    return(
        <SafeAreaView style={styles.screen}>
          <ScrollView showsVerticalScrollIndicator='true'>
            {/* Discover page text + searchbar */}
            <View style={{flex: 1,}}>
              <Text style={{fontWeight:'500', fontSize: 80, letterSpacing: 2}}>Find</Text>
              {/* Searchbar */}
              <View style={{alignItems:'center', justifyContent:'center'}}>
                <View style={{flexDirection: 'row', border:1, borderWidth:1, borderRadius:50, width: (styles.width * .90), padding:'1%'}}>
                  <MaterialCommunityIcons name='magnify' size={27} color='#989898'></MaterialCommunityIcons>
                  <TextInput placeholder='Search' color='#989898' style={{fontWeight:'500'}}></TextInput>
                </View>
              </View>
            </View>
           
            {/* <View style={{flex:1, marginTop:30}}>
              <View style={{flexDirection:'row'}}>
                <TouchableOpacity>
                  <Text style={{fontSize: 30, fontWeight:'500', letterSpacing:1}}>#Trending</Text>
                </TouchableOpacity>
              </View>
            </View> */}
          </ScrollView>
        </SafeAreaView>
           
           )
}

}

  export default Discover