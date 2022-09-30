// Cadatrar = Rever semelhanca de senha
import React, {useState} from 'react';
import { SafeAreaView, View, Text, Button, StyleSheet, TextInput, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'

import {createUserWithEmailAndPassword} from 'firebase/auth'; 
import {auth} from '../services/firebaseConnections';
import { TouchableOpacity } from 'react-native-gesture-handler';


export default function Cadastrar(props) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordRepeat, setPasswordRepeat] =  useState('');

   function createUser(navigation){
       createUserWithEmailAndPassword(auth, email,password)
        .then(value=>{
            console.log('Cadastrado com sucesso!\n' + value.user.uid);
            props.navigation.navigate('Login');
        })
        .catch(error => console.log(error));
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.containerLogo}>
                <View>
                    <Image source={require('../assets/image/logo.png')}
                        style={styles.logo}
                    />
                </View>
                <View style={styles.containerTxtLogo}>
                    <Text style={styles.textTitle}>Mind Booster</Text>
                </View>
            </View>
            <View style={styles.container2}>
                <View style={styles.formatTBody}>
                    <Text style={styles.textBody}>Preencha os dados do seu cadastro</Text>
                </View>
                <View style={styles.emailT}>
                    <TextInput
                        label = "Email"
                        placeholder="E-mail"
                        placeholderTextColor="#000000"
                        keyboardType="email-address"
                        autoFocus={true}
                        color={'#000000'}
                        value={email}
                        onChangeText={value => setEmail(value)}
                        style={styles.textInput}
                    />
                </View>
                <View style={styles.senhaT}>
                    <TextInput
                        placeholder="Senha" 
                        placeholderTextColor="#000000"
                        secureTextEntry
                        autoFocus={true}
                        value={password}
                        onChangeText={value=> setPassword(value)}
                        style={styles.textInput}
                    />
                </View>
                <View style={styles.senhaT}>
                    <TextInput
                        placeholder="Repetir Senha" 
                        placeholderTextColor="#000000"
                        secureTextEntry
                        autoFocus={true}
                        value={passwordRepeat}
                        onChangeText={value=> setPasswordRepeat(value)}
                        style={styles.textInput}
                    />
                </View>
                <View style={styles.buttonCADASTRAR}>
                    <Button
                        title="CADASTRAR"
                        color="#6A61A1"
                        style={{
                            paddingVertical: 10,
                        }}
                        onPress={() => {
                            createUser();
                    }}
                    />
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#423F5D',
    },
    container2: {
        paddingRight: '9%',
        paddingLeft: '9%',

    },
    containerLogo: {
        alignItems: 'flex-start',
        flexDirection: 'row',
        paddingLeft: '3%',
    },
    containerTxtLogo: {
        paddingTop: '1.5%',
    },
    logo: {
        width: 70,
        height: 70,
    },
    textTitle: {
        fontFamily: 'Pacifico-Regular',
        fontSize: 24,
        color: 'white',
    },
    formatTBody: {
        alignItems: 'center',
        paddingTop: '20%',
        paddingBottom: '10%',
    },
    textBody: {
        color: 'white',
        fontSize: 26,
        textAlign: 'center',

    },
    emailT: {
        paddingTop: '20%',
    },
    senhaT: {
        paddingTop: '5%',
    },

    textInput: {
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: '#6200EE',
        color: '#000000',

    },
    textForget: {
        color: 'white',
        textAlign: 'right',

    },

    buttonCADASTRAR: {
        paddingTop: '10%',
    },
})