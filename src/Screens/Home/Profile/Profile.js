import {Component} from 'react'
import {Text, SafeAreaView, ScrollView, View, Image, StyleSheet, TouchableOpacity} from 'react-native'
import styles from '../../../styles/styles'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';



export default class Profile extends Component {
render(){
let dummydata = {
    title: "joesnuffy",
    bio: "Just vibin, follow for follow bitches! Follow my TT @snuffvomitjuice",
    username: "@joesnuffles369",
    profilepic: "https://images.unsplash.com/photo-1670264736611-7d9866f51c19?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=685&q=80",
    low_rating: 4.7,
    high_rating: 23,
    followers: 1000,
    following: 7,
    votes: 567,
    accounttype: '2',
    city: 'Portland, Oregon',
    site: "www.wefuckrabbitheads.com"
}

    return(
             <SafeAreaView style={styles.screen}>
              <ScrollView showsVerticalScrollIndicator={true}>
              <View style={local.titleBar}>
                <TouchableOpacity>
                    <MaterialCommunityIcons name="settings-helper" size={27} color="#52575D"></MaterialCommunityIcons>
                </TouchableOpacity>
                </View>
                <View style={{alignSelf: 'center'}}>
                  <View style={{alignItems:'center'}}>
                  {/* Profile Picture */}
                  <View style={{width: (200), height: (200), borderRadius: 100, overflow: 'hidden'}}>
                      <Image source={{uri: dummydata.profilepic}} style={{flex: 1} } resizeBy='center'/>
                  </View >
                  {/* Profile Name */}
                  <View style ={{alignItems: 'center', alignSelf: 'center', marginTop:18}}>
                    <Text style={{fontWeight: '300', fontSize: 25 }}>Santana Ramos</Text>
                    <Text style={{color: '#AEB5BC', marginTop: 3,fontSize: 20 }}>@therealramos</Text>
                  </View>
                  </View>
                  {/* Rating */}
                  <View style ={{flexDirection: 'row', alignSelf: 'center', marginTop:18}}>
                  <Text style={[local.text, local.subText]}>rating:</Text>
                        <Text style={[local.text, { fontSize: 50 }]}>4.2</Text>
                        <MaterialCommunityIcons name="star" size={20} color="#52575D"></MaterialCommunityIcons>
                  </View>
                  {/* Profile Stats */}
                  <View style={local.statsContainer}>
                    <View style={local.statsBox}>
                        <Text style={[local.text, { fontSize: 24 }]}>483</Text>
                        <Text style={[local.text, local.subText]}>Posts</Text>
                    </View>
                    <View style={[local.statsBox, { borderColor: "#DFD8C8", borderLeftWidth: 1, borderRightWidth: 1 }]}>
                        <Text style={[local.text, { fontSize: 24 }]}>45,844</Text>
                        <Text style={[local.text, local.subText]}>Followers</Text>
                    </View>
                    <View style={local.statsBox}>
                        <Text style={[local.text, { fontSize: 24 }]}>302</Text>
                        <Text style={[local.text, local.subText]}>Following</Text>
                    </View>
                </View>
                  {/* Edit Profile */}
                  <View style ={{flexDirection: 'row', alignSelf: 'center', marginTop:25}}>
                    <TouchableOpacity>
                      <Text style={{border: 1,borderWidth: 1, borderRadius:5, fontWeight: '400', borderColor:"#DFD8C8", padding: '2%', paddingLeft: '7%' ,paddingRight: '7%'  }}>Edit Profile</Text>
                    </TouchableOpacity>
                  </View>
                 {/* border */}
                 <View style={{border: 1,borderWidth: 0.5,marginTop:25, borderColor:"#DFD8C8"}}></View>
              {/* Post */}
          
                </View>
             
              </ScrollView>
             </SafeAreaView>
           )
}

}


const local = StyleSheet.create({
  statsContainer: {
    flexDirection: "row",
    alignSelf: "center",
    marginTop: 32
},
  subText: {
    fontSize: 12,
    color: "#AEB5BC",
    textTransform: "uppercase",
    fontWeight: "500"
  },
  statsBox: {
    alignItems: "center",
    flex: 1
  },
  text: {
    fontFamily: "HelveticaNeue",
    color: "#52575D"
  },
  titleBar: {
    flexDirection: "row-reverse",
    justifyContent: "space-between",
    marginTop: 24,
    marginHorizontal: 16
},
active: {
  backgroundColor: "#34FFB9",
  position: "absolute",
  bottom: 28,
  left: 10,
  padding: 4,
  height: 20,
  width: 20,
  borderRadius: 10
},

})
