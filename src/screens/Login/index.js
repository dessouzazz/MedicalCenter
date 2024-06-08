import { firebase } from '../../services/firebaseConfig'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react'
import styles from './style'


export function Login({ navigation }){
  let errorCustom;

  const [email, setEmail] = useState("")
  const [senha, setSenha] = useState("")
  const [errorLogin, setErrorLogin] = useState(null)

  function validate() {
    if (email == "") {
        setErrorLogin("INFORME UM E-MAIL!")
    } else if (senha == "") {
        setErrorLogin("INFORME A SENHA!")
    } else {
        setErrorLogin(null)
        login()
    }
  }

  function login() {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, senha)
      .then((userCredential) => {
          const user = userCredential.user;
          navigation.navigate('Tabs')
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        if(errorCode == 'auth/invalid-email') {
          errorCustom = 'Endereço e-mail inválido'
      } else if(errorCode == 'auth/invalid-credential') {
          errorCustom = 'E-mail ou senha incorreta'
      } else {
          errorCustom = 'Não foi possível fazer login ,tente novamente!'
      }

        setErrorLogin(errorCustom)
        console.log(error.code)
      });
  }
    return(
    <View style={styles.container}>
      <StatusBar hidden />

      <Image style={{width:100, height: 100}} source ={require('../../../assets/cruz-vermelha.png')}/>
      <Text style={{fontSize: 30, marginTop:20, color:'#E0E1DD'}}>MEDICALCENTER</Text>

      {errorLogin != null && (
                <Text style={styles.alert}>{errorLogin}</Text>
      )}

      <TextInput placeholder="Seu Email" style={styles.TextInput} value={email} onChangeText={text=>setEmail(text)}/>

      <TextInput secureTextEntry={true} placeholder="Sua Senha" style={styles.TextInput} value={senha} onChangeText={text=>setSenha(text)}/>

      <TouchableOpacity style={styles.btnCadastro} onPress={validate}>
        <Text style={{color:'white', textAlign: 'center',}}>LOGIN!</Text>
      </TouchableOpacity>

      <Text style={{color:'white', textAlign: 'center', marginTop: 20, fontSize:15}}>Já possui uma Conta? Clique no Botão abaixo</Text>

      <TouchableOpacity onPress={() => navigation.navigate('CriarUsuario')} style={styles.btnRealizarLogin}>
        <Text style={{color:'white', textAlign: 'center',}}>Realizar Cadastro</Text>
      </TouchableOpacity>

    </View>
    )

}


// olha o firebase se ta salvando la, nem sei onde olha na vdd perai 'min


