import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';


import { CriarUsuario } from './src/screens/CriarUsuario';
import { Login } from "./src/screens/Login";
import   Sobre  from "./src/screens/Sobre"
import { Cadastro} from "./src/screens/Cadastro"
import Tasks from "./src/screens/Tasks";
import  EditarTask from  "./src/screens/EditarTask";


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  return (
    <NavigationContainer>
      <Stack.Navigator
            // Abri a página inicial
            initialRouteName="Login"
            // Aplica estilo na barra de navegação
            screenOptions={{
                headerTitleAlign: 'center',
                headerTintColor: '#FFF',
                headerStyle: { backgroundColor: '#415A77' }
            }}
            >

          {/* <Stack.Screen name="Navegar" component={Navegar} options={{ title:'Tela de Navegação'}}/> */}
          <Stack.Screen name="CriarUsuario" component={CriarUsuario} options={{ title: 'Cadastro de Usuário'}}/>
          <Stack.Screen name="Login" component={Login} options={{ title: 'Login'}}/>
          <Stack.Screen name="Tabs" component={Tabs} options={{ headerShown: false }} />
          <Stack.Screen name="EditarTask" component={EditarTask} options={{ title: 'Editar task'}} />
          <Stack.Screen name="Sobre" component={Sobre} options={{ title: 'Sobre'}} />


    </Stack.Navigator>
    </NavigationContainer>
  );

}

function Tabs() {
  return (
      <Tab.Navigator
          screenOptions={{
              tabBarActiveTintColor: "#E0E1DD", //Cor de ícones ativos
              tabBarInactiveTintColor: "#0D1B2A", //Cor de ícones inativos
              tabBarActiveBackgroundColor: '#1B263B',
              tabBarShowLabel: true,
              tabBarStyle: { backgroundColor: '#778DA9' },
              headerShown: true,
              headerTintColor: '#E0E1DD',
              headerTitleAlign: 'center',
              headerStyle: { backgroundColor: '#778DA9' }
          }}
      >
          <Tab.Screen name="Tarefas" component={Tasks}
              options={{
                  tabBarIcon: ({ color }) => (
                      <MaterialCommunityIcons name="check-circle-outline" color={color} size={32} />
                  ),
              }}
          />
          
          <Tab.Screen name="Cadastro" component={Cadastro}
              options={{
                  tabBarIcon: ({ color }) => (
                      <MaterialCommunityIcons name="account" color={color} size={32} />
                  ),
              }}
          />
         <Tab.Screen name="Sobre" component={Sobre}
              options={{
                  tabBarIcon: ({ color }) => (
                      <MaterialCommunityIcons name="information-outline" color={color} size={32} />
                  ),
              }}
          />

      </Tab.Navigator>
  );
}
