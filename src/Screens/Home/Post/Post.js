import {Component} from 'react'
import {Text, View} from 'react-native'
import styles from '../../../styles/styles'
import Camera from './Camera'
class Feed extends Component {
render(){
    return(
        <View style={styles.screen}>
            <Text >Post Page</Text>
              <Camera/>
           </View>
           
           )
}

}

  export default Feed