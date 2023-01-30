import {Component} from 'react'
import {Text, SafeAreaView, ScrollView, View, Image, TouchableOpacity} from 'react-native'
import styles from '../../../styles/styles'

class Activity extends Component {
render(){
    return(
        <SafeAreaView style={styles.screen}>
          <ScrollView showsVerticalScrollIndicator='true' style={{margin:'3%'}}>
            {/* Activity title */}
            <View style={{flexDirection:'row', border:1, borderBottomWidth:1, borderBottomColor:'#AEB5BC', paddingBottom:10}}>
              <Text style={{fontWeight:'500', fontSize:80}}>Activity</Text>    
            </View>
            {/* Today*/}
            <View style={{marginTop:20, border:1, borderBottomWidth:1, borderBottomColor:'#AEB5BC'}}>
              <Text style={{fontSize:20}}>Today</Text>
              {/* user data = image username action, followback or friends */}
              <View style={{flexDirection:'row', alignItems:'center', marginTop:'2%', margin:'3%', }}>
                <View style={{width:70, height:70, borderRadius:100, overflow:'hidden'}}>
                  <Image source={{uri: 'https://images.unsplash.com/photo-1674851993254-15766f31879f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80'}} style={{flex:1}} resizeBy='center'></Image>
                </View>
                <View style={{flex:1, alignSelf:'center', marginLeft:'5%', marginRight:'4%'}}>
                  <Text style={{fontWeight:'700'}}>nolan_williamson</Text>
                  <Text style={{color:"#52575D"}}>Started following you 14h</Text>
                </View>
                <View style={{flex:1}}>
                  <TouchableOpacity >
                    <Text style={{  borderColor:'#83cc9a',backgroundColor:'#83cc9a', fontSize:17, textTransform:'capitalize', alignSelf:'center', color:'white',border: 1,borderWidth: 1, borderRadius:10, fontWeight: '500', padding: '5%', paddingLeft: '20%' ,paddingRight: '20%', overflow:'hidden' }}>Follow</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            {/* This week */}
            <View style={{marginTop:20, border:1, borderBottomWidth:1, borderBottomColor:'#AEB5BC'}}>
              <Text style={{fontSize:20}}>This Week</Text>
              {/* user data = image username action, followback or friends */}
              <View style={{flexDirection:'row', alignItems:'center', marginTop:'2%', margin:'3%'}}>
                <View style={{width:70, height:70, borderRadius:100, overflow:'hidden'}}>
                  <Image source={{uri: 'https://images.unsplash.com/photo-1674156397151-5694a8bfbd51?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'}} style={{flex:1}} resizeBy='center'></Image>
                </View>
                <View style={{flex:1, alignSelf:'center', marginLeft:'5%', marginRight:'4%'}}>
                  <Text style={{fontWeight:'700'}}>psychopop</Text>
                  <Text style={{color:"#52575D"}}>Started following you 1w</Text>
                </View>
                <View style={{flex:1}}>
                  <TouchableOpacity >
                    <Text style={{  borderColor:'#83cc9a',backgroundColor:'#83cc9a', fontSize:17, textTransform:'capitalize', alignSelf:'center', color:'white',border: 1,borderWidth: 1, borderRadius:10, fontWeight: '500', padding: '5%', paddingLeft: '20%' ,paddingRight: '20%', overflow:'hidden' }}>Follow</Text>
                  </TouchableOpacity>
                </View>
              </View>
              <View style={{flexDirection:'row', alignItems:'center', marginTop:'2%', margin:'3%'}}>
                <View style={{width:70, height:70, borderRadius:100, overflow:'hidden'}}>
                  <Image source={{uri: 'https://images.unsplash.com/photo-1669917408072-a02f3f2fed0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80'}} style={{flex:1}} resizeBy='center'></Image>
                </View>
                <View style={{flex:1, alignSelf:'center', marginLeft:'5%', marginRight:'4%'}}>
                  <Text style={{fontWeight:'700'}}>cali_grizzle</Text>
                  <Text style={{color:"#52575D"}}>Started following you 1w</Text>
                </View>
                <View style={{flex:1}}>
                  <TouchableOpacity >
                    <Text style={{  borderColor:'#83cc9a',backgroundColor:'#83cc9a', fontSize:17, textTransform:'capitalize', alignSelf:'center', color:'white',border: 1,borderWidth: 1, borderRadius:10, fontWeight: '500', padding: '5%', paddingLeft: '20%' ,paddingRight: '20%', overflow:'hidden' }}>Follow</Text>
                  </TouchableOpacity>
                </View>
              </View>
              <View style={{flexDirection:'row', alignItems:'center', marginTop:'2%', margin:'3%'}}>
                <View style={{width:70, height:70, borderRadius:100, overflow:'hidden'}}>
                  <Image source={{uri: 'https://images.unsplash.com/photo-1674763671434-22b2671c863b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80'}} style={{flex:1}} resizeBy='center'></Image>
                </View>
                <View style={{flex:1, alignSelf:'center', marginLeft:'5%', marginRight:'4%'}}>
                  <Text style={{fontWeight:'700'}}>therealemilywuu</Text>
                  <Text style={{color:"#52575D"}}>Started following you 1w</Text>
                </View>
                <View style={{flex:1}}>
                  <TouchableOpacity >
                    <Text style={{  borderColor:'#83cc9a',backgroundColor:'#83cc9a', fontSize:17, textTransform:'capitalize', alignSelf:'center', color:'white',border: 1,borderWidth: 1, borderRadius:10, fontWeight: '500', padding: '5%', paddingLeft: '20%' ,paddingRight: '20%', overflow:'hidden' }}>Follow</Text>
                  </TouchableOpacity>
                </View>
              </View>
              <View style={{flexDirection:'row', alignItems:'center', marginTop:'2%', margin:'3%'}}>
                <View style={{width:70, height:70, borderRadius:100, overflow:'hidden'}}>
                  <Image source={{uri: 'https://images.unsplash.com/photo-1636272370833-ca8f707684d3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80'}} style={{flex:1}} resizeBy='center'></Image>
                </View>
                <View style={{flex:1, alignSelf:'center', marginLeft:'5%', marginRight:'4%'}}>
                  <Text style={{fontWeight:'700'}}>jessehernandez</Text>
                  <Text style={{color:"#52575D"}}>Rated you 1w</Text>
                </View>
                <View style={{flex:1}}>
                  <TouchableOpacity >
                    <Text style={{  borderColor:'#83cc9a',backgroundColor:'#83cc9a', fontSize:17, textTransform:'capitalize', alignSelf:'center', color:'white',border: 1,borderWidth: 1, borderRadius:10, fontWeight: '500', padding: '5%', paddingLeft: '20%' ,paddingRight: '20%', overflow:'hidden' }}>Friends</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          {/* This Month */}
          <View style={{marginTop:20, border:1, borderBottomWidth:1, borderBottomColor:'#AEB5BC'}}>
              <Text style={{fontSize:20}}>This Month</Text>
              {/* user data = image username action, followback or friends */}
              <View style={{flexDirection:'row', alignItems:'center', marginTop:'2%', margin:'3%'}}>
                <View style={{width:70, height:70, borderRadius:100, overflow:'hidden'}}>
                  <Image source={{uri: 'https://images.unsplash.com/photo-1674156397151-5694a8bfbd51?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'}} style={{flex:1}} resizeBy='center'></Image>
                </View>
                <View style={{flex:1, alignSelf:'center', marginLeft:'5%', marginRight:'4%'}}>
                  <Text style={{fontWeight:'700'}}>psychopop</Text>
                  <Text style={{color:"#52575D"}}>Started following you 1w</Text>
                </View>
                <View style={{flex:1}}>
                  <TouchableOpacity >
                    <Text style={{  borderColor:'#83cc9a',backgroundColor:'#83cc9a', fontSize:17, textTransform:'capitalize', alignSelf:'center', color:'white',border: 1,borderWidth: 1, borderRadius:10, fontWeight: '500', padding: '5%', paddingLeft: '20%' ,paddingRight: '20%', overflow:'hidden' }}>Follow</Text>
                  </TouchableOpacity>
                </View>
              </View>
              <View style={{flexDirection:'row', alignItems:'center', marginTop:'2%', margin:'3%'}}>
                <View style={{width:70, height:70, borderRadius:100, overflow:'hidden'}}>
                  <Image source={{uri: 'https://images.unsplash.com/photo-1669917408072-a02f3f2fed0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80'}} style={{flex:1}} resizeBy='center'></Image>
                </View>
                <View style={{flex:1, alignSelf:'center', marginLeft:'5%', marginRight:'4%'}}>
                  <Text style={{fontWeight:'700'}}>cali_grizzle</Text>
                  <Text style={{color:"#52575D"}}>Started following you 1w</Text>
                </View>
                <View style={{flex:1}}>
                  <TouchableOpacity >
                    <Text style={{  borderColor:'#83cc9a',backgroundColor:'#83cc9a', fontSize:17, textTransform:'capitalize', alignSelf:'center', color:'white',border: 1,borderWidth: 1, borderRadius:10, fontWeight: '500', padding: '5%', paddingLeft: '20%' ,paddingRight: '20%', overflow:'hidden' }}>Follow</Text>
                  </TouchableOpacity>
                </View>
              </View>
              <View style={{flexDirection:'row', alignItems:'center', marginTop:'2%', margin:'3%'}}>
                <View style={{width:70, height:70, borderRadius:100, overflow:'hidden'}}>
                  <Image source={{uri: 'https://images.unsplash.com/photo-1674763671434-22b2671c863b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80'}} style={{flex:1}} resizeBy='center'></Image>
                </View>
                <View style={{flex:1, alignSelf:'center', marginLeft:'5%', marginRight:'4%'}}>
                  <Text style={{fontWeight:'700'}}>therealemilywuu</Text>
                  <Text style={{color:"#52575D"}}>Started following you 1w</Text>
                </View>
                <View style={{flex:1}}>
                  <TouchableOpacity >
                    <Text style={{  borderColor:'#83cc9a',backgroundColor:'#83cc9a', fontSize:17, textTransform:'capitalize', alignSelf:'center', color:'white',border: 1,borderWidth: 1, borderRadius:10, fontWeight: '500', padding: '5%', paddingLeft: '20%' ,paddingRight: '20%', overflow:'hidden' }}>Follow</Text>
                  </TouchableOpacity>
                </View>
              </View>
              <View style={{flexDirection:'row', alignItems:'center', marginTop:'2%', margin:'3%'}}>
                <View style={{width:70, height:70, borderRadius:100, overflow:'hidden'}}>
                  <Image source={{uri: 'https://images.unsplash.com/photo-1636272370833-ca8f707684d3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80'}} style={{flex:1}} resizeBy='center'></Image>
                </View>
                <View style={{flex:1, alignSelf:'center', marginLeft:'5%', marginRight:'4%'}}>
                  <Text style={{fontWeight:'700'}}>jessehernandez</Text>
                  <Text style={{color:"#52575D"}}>Rated you 1w</Text>
                </View>
                <View style={{flex:1}}>
                  <TouchableOpacity >
                    <Text style={{  borderColor:'#83cc9a',backgroundColor:'#83cc9a', fontSize:17, textTransform:'capitalize', alignSelf:'center', color:'white',border: 1,borderWidth: 1, borderRadius:10, fontWeight: '500', padding: '5%', paddingLeft: '20%' ,paddingRight: '20%', overflow:'hidden' }}>Friends</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </ScrollView>
            
        </SafeAreaView>
           
          )
        }

}

  export default Activity