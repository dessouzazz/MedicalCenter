import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react'
import styles from './style'


export function Sobre({ navigation }){
    return(
    <View style={styles.container}>
      <StatusBar hidden />
      <Text style={styles.titulo}>MEDICALCENTER</Text>
      <Text style={styles.titulo}>Center Seu portal completo de saúde na palma da sua mão!</Text>
      <Text style={styles.texto}>
        Cuidar da saúde nunca foi tão fácil! Com o Medical Center, você tem acesso a um mundo de funcionalidades que vão te ajudar a manter sua saúde em dia, tudo isso na palma da sua mão.
      </Text>
      <Text style={styles.texto}>
        Disponível para:
      </Text>
      <Text style={styles.texto}>
        Android
      </Text>
      <Text style={styles.texto}>
        IOS
      </Text>

    </View>
    )

}