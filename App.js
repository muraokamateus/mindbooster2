
//O que ja havia
import React from 'react';
import { StyleSheet } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

//O que foi criado
import Login from './src/screens/Login';
import Cadastrar from './src/screens/Cadastrar';
import Menu from './src/components/Menu';
import MinhasColecoes from './src/screens/MinhasColecoes';
import PaginaCartoes from './src/screens/PaginaCartoes';
import AddColecoes from './src/screens/card/AddColecoes';
import AddCartoes from './src/screens/card/AddCartoes';
import EditColecoes from './src/screens/card/EditColecoes';
import EditCartoes from './src/screens/card/EditCartoes';
import PlayScreen from './src/screens/PlayScreen';

import Icon from 'react-native-vector-icons/Ionicons'

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//Importacoes para projeto 2
import app from './src/services/firebaseConnections';
import { initializeFirestore } from 'firebase/firestore';

// // Importacoes para projeto 2 - Redux
// import { store } from './src/redux/store';
// import { Provider } from 'react-redux';


const Stack = createNativeStackNavigator();

const App = () => {

  // /: () => React$Node

  //const db = initializeFirestore(app, {experimentalForceLongPolling:true});

  return (
    <>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
          <Stack.Screen name="Cadastrar" component={Cadastrar} options={{ headerShown: false }} />
          <Stack.Screen name="Menu" component={Menu} options={{ headerShown: false }} />
          <Stack.Screen name="MinhasColecoes" component={MinhasColecoes}
            options={({route})=>({
              headerShown: true,
              title: "Minhas coleções",
              headerTintColor: '#ffffff',
              headerStyle: {
                backgroundColor: '#43405E',
              }
            })} />
          <Stack.Screen name="PaginaCartoes" component={PaginaCartoes}
            options={({route})=>({
              idCartaoColecao: route.params?.IdColecao,
              headerShown: true,
              title: "Coleções - Objetos",
              headerTintColor: '#ffffff',
              headerStyle: {
                backgroundColor: '#43405E',
              }
            })} />
          <Stack.Screen name="AddColecoes" component={AddColecoes}
            options={{
              headerShown: true,
              title: "Minhas coleções",
              headerTintColor: '#ffffff',
              headerStyle: {
                backgroundColor: '#43405E',
              }
            }} />
          <Stack.Screen 
            name="AddCartoes"
            component={AddCartoes}
            options={({route})=>({
              idAddCartao: route.params?.idCartaoColecao,
              headerShown: true,
              title: "Coleção-objetos",
              headerTintColor: '#ffffff',
              headerStyle: {
                backgroundColor: '#43405E',
              }
            })} />
          <Stack.Screen
            name="EditColecoes"
            component={EditColecoes}
            options={({ route }) => ({
              idColecao: route.params?.idItemColecao,
              nome: route.params?.iNome,
              descricao: route.params?.iDescricao,
              headerShown: true,
              title: "Editar Colecao",
              headerTintColor: '#ffffff',
              headerStyle: { backgroundColor: '#43405E', }
            })}
          />
          <Stack.Screen
            name="EditCartoes"
            component={EditCartoes}
            options={({ route }) => ({
              idCartao: route.params?.idItemCartao,
              frente: route.params?.iFrente,
              verso: route.params?.iVerso,
              headerShown: true,
              title: "Coleção-objetos",
              headerTintColor: '#ffffff',
              headerStyle: {
                backgroundColor: '#43405E',
              }
            })} />
        </Stack.Navigator>
      </NavigationContainer>

    </>
  );
};

export default App;
