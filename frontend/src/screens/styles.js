import { StyleSheet, Dimensions } from 'react-native';

export default StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'white',
      flexDirection:'column',
    },
    container2: {
      flex: 0.7,
      alignItems: 'center',
      justifyContent: 'space-around',
    },
    linearGradient: {
      alignItems: 'center',
      borderRadius: 5,
      height: Dimensions.get('window').height * 1,
      width: Dimensions.get('window').width * 1,
    },
    header: {
      top: -60,
    },
    checklistContainer: {
      flexDirection: 'row',
      backgroundColor: '#EDE4E4',
      width: 600,
      height: 70,
      borderRadius: 20,
      justifyContent: 'space-evenly',
    },
    headerText: {
      fontWeight: 'bold',
      textAlign: 'center',
      fontSize: 30,
      fontFamily: 'Avenir'
    },
    checklistHeaderText: {
      fontWeight: 'bold',
      textAlign: 'center',
      fontFamily: 'Avenir',
      paddingTop: 25,
    },
      image :{
        height: 250,
        width: 400,
        marginTop: 50,
        marginBottom: 50,
      },
      dropdownBtnStyle: {
        width: "40%",
        height: 50,
        backgroundColor: "#FFF",
        borderRadius: 8,
        borderWidth: 1,
        borderColor: "#444",
        alignSelf: 'center',
        marginBottom: 20
      },
      dropdownBtnTxtStyle: { color: "#444", textAlign: "left" },
      dropdownStyle: { backgroundColor: "#EFEFEF" },
      dropdownRowStyle: {
        backgroundColor: "#EFEFEF",
        borderBottomColor: "#C5C5C5",
      },
      dropdownRowTxtStyle: { 
        color: "#444", textAlign: "center" 
      },
       input: {
          margin: 15,
          height: 40,
          borderColor: 'black',
          borderWidth: 1,
          width: Dimensions.get('window').width  * .4,
       },
    });
    