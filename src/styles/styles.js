import { StyleSheet, Dimensions } from "react-native";

//default device width + height 
const deviceHeight = Dimensions.get('window').height
const deviceWidth = Dimensions.get('window').width

const styles =  StyleSheet.create({
  one:{
    color:'#83cc9a'
  },
  two:{
    color:"#52575D"
  },
  three:{
    color: '#AEB5BC'
  },
  four: {
    color:"#DFD8C8"
  },
  five:{
    color:'whitesmoke'
  },
    container: {
    flex: 1,
    alignItems:'center',
    justifyContent:'center',
    fontFamily: 'Helvetica Neue',
    margin:0,
    padding: 0,
  
    },
    width: deviceWidth,
    height: deviceHeight,
    textinput: {
        borderBottomWidth: 1,
        width: (deviceWidth/1.5),
        paddingLeft: '3%',
        paddingBottom: '3%',
        paddingTop: '2%',
        fontSize: ((deviceHeight/deviceWidth) * 9),
        margin:'5%',
        borderRadius: 10 ,
        borderColor: 'black'
    },
    codeinput: {
      borderBottomWidth: 1,
      width: (deviceWidth/3),
      paddingLeft: '3%',
      paddingBottom: '3%',
      paddingTop: '2%',
      fontSize: ((deviceHeight/deviceWidth) * 9),
      margin:'5%',
      borderRadius: 10 ,
      borderColor: 'black',
      
  },
  //   input: {
  //     borderBottomWidth: 1,
  //     width: (deviceWidth/1.5),
  //     padding: '2%',
  //     fontSize: ((deviceHeight/deviceWidth) * 8.5),
  //     marginTop: (15 * 2),
  //     marginBottom: 15,
  // },
       
  title:{
    fontSize: ((deviceHeight/deviceWidth) *16), 
    fontWeight: '500', 
    padding:'2%',
    letterSpacing:2,
    textTransform: 'uppercase'
  },
  fineprint:{
    fontSize:9,
    color: "#52575D",
    textAlign: 'center',
    marginLeft: '6%',
    marginRight: '6%',

  },
             signupbtn:{
              padding:'4.5%', 
              backgroundColor: '#83cc9a', 
              alignItems:'center',
              justifyContent:'center', 
              width: (deviceWidth/1.5), 
              margin: '5%' ,
              borderRadius:10,
               },
      // loginbtntext:{
      //   fontSize: ((deviceHeight/deviceWidth) *10),
      //   fontWeight:'600',
      //   letterSpacing:1,
      //   textTransform: 'uppercase'
      // },
      signupbtntext:{
        fontSize: ((deviceHeight/deviceWidth) *7),
        fontWeight:'600',
        letterSpacing:1,
        textTransform: 'uppercase'
      },
      signupsubtext:{
        fontSize: ((deviceHeight/deviceWidth) *7), 
        fontWeight: '300', 
        textAlign: 'center',
        margin: "4%"

      },
      footer:{
        top:  deviceHeight/6,
      },
      footertxt:{
        fontSize: ((deviceHeight/deviceWidth) *7),
      },
        screen:{
          flex: 1, 
        }

})      

export default styles