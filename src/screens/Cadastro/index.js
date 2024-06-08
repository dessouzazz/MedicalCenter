import { firebase } from '../../services/firebaseConfig'
import { getDatabase, push, ref, set } from "firebase/database";
import { StyleSheet, Text, View, Image, ActivityIndicator, TextInput, TouchableOpacity } from 'react-native';
import { getAuth } from "firebase/auth";
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react'
import styles from './style'


const db = getDatabase();
const auth = getAuth();

export function Cadastro({ navigation }){

  const [nome, setNome] = useState("")
  const [date, setDate] = useState("")
  const [motivo, setMotivo] = useState("")
  const [exibirSpinner, setExibirSpinner] = useState(false);
  const [errorCreateTask, setErrorCreateTask] = useState(null)

  const validate = () => {
    if (nome == "") {
        setErrorCreateTask("Informe o Nome do Médico")
    } else if (motivo == "") {
        setErrorCreateTask("Informe o motivo da Sua Consulta")
    } else if (date == "") {
      setErrorCreateTask("Informe a data da consulta")
    } else {
        setErrorCreateTask(null)
        createTask()
    }
  }

  const createTask = () => {
    // Obtem a referência do nó "tasks" do usuário que tá logado
     setExibirSpinner(true);
    const taskListRef = ref(db, 'tasks/' + auth.currentUser.uid);
    // Define uma id para a nova tarefa
    console.log(taskListRef)
    const newTaskRef = push(taskListRef);
    // Cria a tarefa no banco
    setTimeout( () => {
    set(newTaskRef, {
        nome: nome,
        date: date,
        motivo: motivo
    }).then(() => {
      setExibirSpinner(false);
      alert('Agendamento Cadastro com Sucesso!')
    })
    .catch((err) => {
      console.log("Call back de Errro")
    });
  }, 3000)
  }
  return(
    <View style={styles.container}>

      <StatusBar hidden />

      {exibirSpinner && (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#0D1B2A" />
          <Text>Cadastrando agendamento...</Text>
        </View>
      )}

      {errorCreateTask != null && (
                <Text style={styles.alert}>{errorCreateTask}</Text>
      )}
      
      <Text style={{fontSize: 30, marginTop:20, color:'#E0E1DD'}}>Tela de Cadastro Agendamento Médico</Text>
      <Text style={{fontSize: 17, marginTop:20, color:'#E0E1DD'}}>Digite abaixo o nome do médico que irá realizar a consulta:</Text>

      <TextInput 
        style={styles.TextInput}
        placeholder="Médico"
        value={nome}
        onChangeText={setNome}
        ></TextInput>

      <Text style={{fontSize: 17, marginTop:20, color:'#E0E1DD'}}>Digite abaixo o dia da Consulta:</Text>

      <TextInput
        style={styles.TextInput}
        placeholder="Data"
        value={date}
        onChangeText={setDate}
      ></TextInput>

      <Text style={{fontSize: 17, marginTop:20, color:'#E0E1DD'}}>Digite abaixo o motivo da Consulta:</Text>

      <TextInput
        style={styles.TextInput}
        placeholder="Motivo"
        value={motivo}
        onChangeText={setMotivo}
      ></TextInput>

      <TouchableOpacity
        style={styles.button}
        onPress={validate}
      >
        <Text style={styles.textButton}>Criar</Text>
      </TouchableOpacity>

    </View>
    )

}