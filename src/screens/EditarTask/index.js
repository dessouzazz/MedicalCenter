import { firebase } from '../../services/firebaseConfig'
import { getDatabase, onValue, ref, set } from "firebase/database";
import { getAuth, signOut } from "firebase/auth";
import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import styles from './style'
const db = getDatabase();
const auth = getAuth();

export default function CreateTask({ navigation, route }) {
    const [nome, setNome] = useState("")
    const [date, setDate] = useState("")
    const [motivo, setMotivo] = useState("")
    const [errorCreateTask, setErrorCreateTask] = useState(null)

    const validate = () => {
        if (nome == "") {
            setErrorCreateTask("Informe o Nome do Doutor")
        } else if (motivo == "") {
            setErrorCreateTask("Informe a descrição da tarefa")
        }else if (date == "") {
            setErrorCreateTask("Informe a data")
        } else {
            setErrorCreateTask(null)
            editTask()
        }
    }

    // Função que atualiza registro no banco
    // "auth.currentUser.uid" é o id do usuário logado
    const editTask = () => {
        const taskListRef = ref(db, 'tasks/' + auth.currentUser.uid + '/' + route.params.id);
        set(taskListRef, {
            nome: nome,
            date: date,
            motivo: motivo
        });
        navigation.navigate('Tabs')
    }

    // Função que recupera os dados da terefa do banco e seta nos inputs
    const recuperarDados = () => {
        onValue(ref(db, 'tasks/' + auth.currentUser.uid + '/' + route.params.id), (snapshot) => {
            setNome(snapshot.val().nome)
            setDate(snapshot.val().date)
            setMotivo(snapshot.val().motivo)
        });
    }

    // Hook que chama da função que recupera dos dados da tarefa do banco logo que a tela é aberta
    useEffect(() => {
        recuperarDados();
    }, [])

    return (
        <View style={styles.container}>
            {errorCreateTask != null && (
                <Text style={styles.alert}>{errorCreateTask}</Text>
            )}

            <Text style={styles.titulo}>Editar Task</Text>

            <TextInput
                style={styles.input}
                placeholder='Nome'
                value={nome}
                onChangeText={setNome}
            />

            <TextInput
                style={styles.input}
                placeholder='Data'
                value={date}
                onChangeText={setDate}
            />

            <TextInput
                style={styles.input}
                placeholder='Descrição'
                value={motivo}
                onChangeText={setMotivo}
            />

            <TouchableOpacity
                style={styles.button}
                onPress={validate}
            >
                <Text style={styles.textButton}>Editar tarefa</Text>
            </TouchableOpacity>
        </View>
    )
}