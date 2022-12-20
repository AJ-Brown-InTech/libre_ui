import {Component} from 'react'
import {Text, View, Image, ScrollView, TouchableOpacity} from 'react-native'
import styles from '../../../styles/styles'


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
             <View style={styles.profilecontainer}>
                <View style={styles.profilectn}>
                   
                        <Text style={styles.profilename}>{dummydata.title}</Text>
                        <Image style={styles.profile} source={{uri: "https://images.unsplash.com/photo-1634983707236-fb45a8ef1063?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"}}/>
                        <Text style={styles.profileusername}>{dummydata.username}</Text>
                        <Text style={styles.profileusername}>{dummydata.city}</Text>
                        
                        <View style={styles.stats}>
                            <View style={styles.statctn}>
                                <Text>Followers:</Text>
                                <Text style={styles.profilenum}> {dummydata.followers}</Text>
                            </View>
                            <View style={styles.statctn}>
                                <Text>Following:</Text>
                                <Text style={styles.profilenum}> {dummydata.following}</Text>
                            </View>
                            <View style={styles.statctn}>
                                <Text>Votes:</Text>
                                <Text style={styles.profilenum}> {dummydata.votes}</Text>
                            </View>
                        </View> 
                        <Text style={styles.profilebio}>{dummydata.bio}</Text>
                        <Text style={styles.profilebio}>{dummydata.site}</Text>
                        <TouchableOpacity style={styles.profileeditbtn}>
                                    <Text style={styles.profileeditbtntext}>Edit Profile</Text>   
                        </TouchableOpacity> 
                </View>
                <ScrollView></ScrollView>
             </View>
           )
}

}
