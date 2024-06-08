import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#0D1B2A',
      alignItems: 'center',
      justifyContent: 'center',
      padding:20,
    },
  
    alert:{
      color: 'white',
      fontSize: 20
    },
    TextInput:{
      width:'100%',
      height: 40,
      backgroundColor:'white',
      borderRadius:20,
      paddingLeft: 10,
      marginTop:30,
    },
  
    btnCadastro:{
      width:'100%',
      height: 40,
      backgroundColor:'#778DA9',
      borderRadius:20,
      justifyContent: 'center',
      marginTop: 30,
    },
  
    btnRealizarLogin:{
      width:'80%',
      height: 60,
      backgroundColor:'#1B263B',
      borderRadius:20,
      justifyContent: 'center',
      marginTop: 20,
    }
  });

  export default styles