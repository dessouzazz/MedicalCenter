import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#0D1B2A',
      alignItems: 'center',
      justifyContent: 'center',
      padding:20,
    },

    alert: {
      fontSize: 18,
      textAlign: 'center',
      color: '#FFF',
      marginBottom: 20,
  },
  
    TextInput:{
      width:'100%',
      height: 40,
      backgroundColor:'white',
      borderRadius:20,
      paddingLeft: 10,
      marginTop:30,
    },

    button: {
      backgroundColor: '#415A77',
      marginTop: 40,
      padding: 10,
      borderRadius: 10,
      marginBottom: 20,
      width: '100%'
    },

    textButton: {
      fontSize: 24,
      textAlign: 'center',
      color: '#fff'
    },
    loadingContainer: {
      backgroundColor: '#FFF',
      padding: 15,
      width: 300,
      borderRadius: 20,
      alignItems: 'center',
      justifyContent: 'center'
    }
  
  });

  export default styles