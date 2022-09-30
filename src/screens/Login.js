import React, { useState } from 'react';
import { SafeAreaView, View, Text, Button, StyleSheet, TextInput, Image, } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import { auth } from '../services/firebaseConnections';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { FloatingLabelInput } from 'react-native-floating-label-input';


export default function Login(props) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function LoginAuth(navigation) {
        signInWithEmailAndPassword(auth, email, password)
            .then(value => {
                console.log('Login com Sucesso!\n');
                props.navigation.navigate('Menu');
            })
            .catch(error => console.log(error));
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.container2}>
                <Image source={require('../assets/image/logo.png')}
                    style={styles.logo}
                />
                <View style={styles.formatTitle}>
                    <Text style={styles.textTitle}>Mind Booster</Text>
                </View>
                <View style={styles.emailT}>
                    <TextInput
                        placeholder="E-mail"
                        placeholderTextColor="#000000"
                        keyboardType="email-address"
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
                        onChangeText={value => setPassword(value)}
                        style={styles.textInput}
                    />
                </View>
                {/* COlocar onde deve ir esquecia a senha */}
                <View>
                    <Text style={styles.textForget} onPress={() => props.navigation.navigate('')}>Esqueci a senha</Text>
                </View>
                <View style={styles.buttonENTRAR}>
                    <Button
                        style={{height:45,}}
                        title="ENTRAR"
                        color="#6A61A1"
                        onPress={() => {
                            LoginAuth();
                            props.navigation.navigate('Menu');//Excluir
                            
                        }}
                    />
                </View>
                <View style={styles.buttonCADASTRAR}>
                    <Button
                        style={{height:45,}}
                        title="CADASTRA-SE"
                        color="#B58D97"
                        onPress={() => props.navigation.navigate('Cadastrar')}
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
        padding: '9%',

    },
    logo: {
        alignSelf: 'center',
        paddingTop: '10%',
    },
    formatTitle: {
        alignItems: 'center',

    },
    textTitle: {
        fontFamily: 'Pacifico-Regular',
        fontSize: 46,
        color: 'white',
        alignSelf: 'center',
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
    buttonENTRAR: {
        paddingTop: '10%',
    },
    buttonCADASTRAR: {
        paddingTop: '35%',
        
    },
})