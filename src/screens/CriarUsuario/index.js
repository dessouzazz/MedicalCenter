import React, { useState } from 'react'
import { firebase } from '../../services/firebaseConfig'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import styles from './style';


export function CriarUsuario({ navigation }){

    const [nome, setNome] = useState("")
    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")
    const [errorCreateUser, setErrorCreateUser] = useState(null)

    function validate(){
      if (nome == ""){
        setErrorCreateUser("Informe o seu nome")
      } else if(email == ""){
        setErrorCreateUser("Informe o seu Email")
      } else if(senha == ""){
        setErrorCreateUser("Informe a senha desejada")
      }else{
        setErrorCreateUser(null)
        criarUsuario();
      }
    }

    const criarUsuario = () => {
      const auth = getAuth();
      createUserWithEmailAndPassword(auth, email, senha)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log('Criou usuário....')
        // ao criar vc colocu para navegar por uma 'Tabs' porém não existe essa Tabs declarada..
        navigation.navigate('Login')
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorCreateUser(errorMessage);
      });
    }

    return(

    <View style={styles.container}>
      <StatusBar hidden />

      {errorCreateUser != null && (
          <Text style={styles.alert}>{errorCreateUser}</Text>
      )}

      <Image style={{width:100, height: 100}} source ={require('../../../assets/cruz-vermelha.png')}/>
      <Text style={{fontSize: 30, marginTop:20, color:'#E0E1DD'}}>MEDICALCENTER</Text>

      <TextInput placeholder="Seu Nome" style={styles.TextInput}  value={nome}
      onChangeText={text=>setNome(text)}
      />

      <TextInput placeholder="Seu Email" style={styles.TextInput}  value={email}
       onChangeText={text=>setEmail(text)}
       />

      <TextInput secureTextEntry={true} placeholder="Sua Senha" style={styles.TextInput}  value={senha} onChangeText={text=>setSenha(text)}
      />

      <TouchableOpacity style={styles.btnCadastro} onPress={validate}>
        <Text style={{color:'white', textAlign: 'center',}}>CADASTRAR!</Text>
      </TouchableOpacity>

      <Text style={{color:'white', textAlign: 'center', marginTop: 20, fontSize:15}}>Já possui uma Conta? Clique no Botão abaixo</Text>

      <TouchableOpacity onPress={() => navigation.navigate('Login')} style={styles.btnRealizarLogin}>
        <Text style={{color:'white', textAlign: 'center',}}>Realizar Login</Text>
      </TouchableOpacity>

    </View>
    )

}

