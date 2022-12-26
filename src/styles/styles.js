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
    forgot:{
        fontSize: ((deviceHeight/deviceWidth) * 7),
        paddingTop: '2%',
       margin:'2%'
    },
        image: {
            width: deviceWidth,
            height: deviceHeight,
            justifyContent: 'space-between',
          },
          title:{
            fontSize: ((deviceHeight/deviceWidth) *16), 
            fontWeight: '500', 
            textTransform: 'capitalize',
            padding:'2%'
          },
          signuptitle:{
            fontSize: ((deviceHeight/deviceWidth) *25), 
            fontWeight: '500', 
            textTransform: 'capitalize',
            margin: "2%"
          },
          fineprint:{
            fontSize: ((deviceHeight/deviceWidth) *6.25), 
            fontWeight: '400', 
            color: '#bfc1c2',
            width: (deviceWidth/1.8),
            marginTop:"2%",
            marginBottom:"1%"
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
      profilectn:{
        backgroundColor: '#83cc9a',
        alignItems:'center',
        borderColor: 'black',
        width: deviceWidth,
        height: (deviceHeight * .475),
        
      },
      profile:{
        height: (deviceHeight/8),
        width: (deviceWidth/4),
        borderRadius: 50,
        margin: '1.5%',
        top: '12%'
       
      },
      profilename:{
        fontSize: ((deviceHeight/deviceWidth) *12) ,
         fontWeight: '700',
         top: '12%',
         color: '#343434'
         
      },
      profileusername:{
        fontSize: ((deviceHeight/deviceWidth) *7) ,
        fontWeight: '500',
        top: '12%',
        color: '#414a4c',
        margin: '1%'
      },
      profilecontainer: {
        flex: 2,
        alignItems:'center',
        justifyContent:'center',
        fontFamily: 'Helvetica Neue',
        margin:0,
        padding: 0,
        },
        stats:{
          flexDirection: 'row',
          top: '12%',
        },
        statctn:{
          flexDirection: 'row',
          alignItems: 'center',
          color: '#414a4c',
          margin: '2%',
        },
        profilenum:{
          color: '#343434', fontSize: ((deviceHeight/deviceWidth) *7), fontWeight: '700'
        },
        profilebio:{
          fontSize: ((deviceHeight/deviceWidth) *6.5) ,
          top: '12%',
          margin: '1.5%',
          fontWeight: '400',
          textAlign: 'center',
          color: '#414a4c',
        },
        profileeditbtn:{
          top: '12%',
          color: '#414a4c',
          backgroundColor: '#f4f0ec',
          width: (deviceWidth* .75),
          textAlign: 'center',
          borderRadius: 5,
          borderColor: 'black',
          margin: '1%'
        },
        profileeditbtntext:{
          fontSize: ((deviceHeight/deviceWidth) *6),
          letterSpacing: 1,
          textTransform: 'capitalize',
          textAlign: 'center',
          padding: '1.5%',
          fontWeight: '500',
        }

})      

export default styles