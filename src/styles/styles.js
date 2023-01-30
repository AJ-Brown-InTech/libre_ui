import { StyleSheet, Dimensions } from "react-native";

//default device width + height 
const deviceHeight = Dimensions.get('window').height
const deviceWidth = Dimensions.get('window').width
const gradientGreen = 'linear-gradient(to right, #83cc9a, #73c58e, #62be82, #50b777, #3bb06b, #46b371, #4fb576, #58b87c, #7bc694, #9bd3ad, #bae0c6, #d9eddf)'
const mainGreen = '#83cc9a'

const styles =  StyleSheet.create({
    container: {
    flex: 1,
    alignItems:'center',
    justifyContent:'center',
    fontFamily: 'Helvetica Neue',
    margin:0,
    padding: 0,
    backgroundColor: 'white'
    },
    width: deviceWidth,
    height: deviceHeight,
    textinput: {
        borderBottomWidth: .7,
        width: (deviceWidth/1.5),
        paddingLeft: '3%',
        paddingBottom: '3%',
        paddingTop: '2%',
        fontSize: ((deviceHeight/deviceWidth) * 9),
        margin:'5%',
        borderRadius: 10 ,
        borderColor: 'black'
    },
    input: {
      borderBottomWidth: 1,
      width: (deviceWidth/1.5),
      padding: '2%',
      fontSize: ((deviceHeight/deviceWidth) * 8.5),
      marginTop: (15 * 2),
      marginBottom: 15,
  },

       
          title:{
            fontSize: ((deviceHeight/deviceWidth) *16), 
            fontWeight: '500', 
            textTransform: 'capitalize',
            padding:'2%'
          },
       

          loginbtn:{
            paddingBottom: '4%', 
            paddingTop: '4%', 
            backgroundColor: gradientGreen, 
            alignItems:'center',
            justifyContent:'center', 
            width: (deviceWidth/1.5), 
            margin: '4%'
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
      loginbtntext:{
        fontSize: ((deviceHeight/deviceWidth) *10),
        fontWeight:'600',
        letterSpacing:1,
        textTransform: 'uppercase'
      },
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