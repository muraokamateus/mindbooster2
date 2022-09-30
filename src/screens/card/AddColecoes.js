import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
Icon.loadFont();

//Importacoes para projeto 2
import { initializeFirestore, collection, addDoc } from 'firebase/firestore';
import app from '../../services/firebaseConnections';



export default function AddColecoes(props) {

    const [nome, setNome] = useState('')
    const [descricao, setDescricao] = useState('')


    const db = initializeFirestore(app, { experimentalForceLongPolling: true })
    const colecoesCollection = collection(db, "colecoes")

    const addColecoes = () => {
        const docColecoes = {
            nome: nome,
            descricao: descricao,
        }

        addDoc(colecoesCollection, docColecoes).then((docRef) => {
            console.log("Novo documento inserido com sucesso: " + docRef.id);
        }).catch((erro) => {
            console.log("Erro: " + erro);
        })
    }

    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.textBody}>Preencha os dados referente à coleção a ser criada</Text>
            </View>

            {/* style={{ width: '100%', paddingBottom: '5%', }}> */}
            <View style={styles.textName}>
                <TextInput
                    label='Nome da Coleção'
                    placeholder="Nome da Coleção"
                    placeholderTextColor="#000000"
                    onChangeText={setNome}
                    value={nome}
                    style={styles.textInput}
                />
            </View>

            <View style={{
                width: '100%',
                paddingBottom: '5%',
            }}>
                <TextInput
                    placeholder="Descrição"
                    placeholderTextColor="#000000"
                    onChangeText={setDescricao}
                    value={descricao}
                    style={styles.textInput}
                    numberOfLines={4}
                />
            </View>
            <View style={styles.imageConfig}>
                <Text style={styles.textNameImagem} >Imagem</Text>
                <Icon style={styles.iconConfig} name={"plus"} size={50} color="#a0a0a0" />
            </View>


            <View style={{ paddingBottom: '12%', }}>
                < TouchableOpacity style={{
                    height: 45,
                    alignItems: "center",
                    alignItems: 'center',
                    backgroundColor: "#6A61A1",
                    borderRadius: 5,
                    justifyContent: 'center'
                }}
                    onPress={() => {
                        addColecoes();
                        props.navigation.pop(1);
                        //props.navigation.navigate("MinhasColecoes");
                    }
                    }
                >
                    <Text
                        style={{
                            color: "#ffffff",
                            fontSize: 16,
                        }}>
                        CADASTRAR
                    </Text>
                </ TouchableOpacity>
            </View>

            <View style={{}}>
                < TouchableOpacity style={{
                    height: 45,
                    alignItems: "center",
                    alignItems: 'center',
                    borderWidth: 1,
                    borderRadius: 5,
                    borderColor: '#ffffff',
                    justifyContent: 'center',

                }}
                    onPress={() => props.navigation.pop(1)}>
                    <Text
                        style={{
                            color: "#ffffff",
                            fontSize: 16,
                        }}>
                        CANCELAR
                    </Text>
                </ TouchableOpacity>
            </View>




        </View >
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#3c345d',
        paddingTop: '5%',
        paddingRight: '9%',
        paddingLeft: '9%',
    },
    textBody: {
        color: 'white',
        fontSize: 20,
        textAlign: 'center',
        paddingBottom: '7%',

    },
    textInput: {
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: '#6200EE',
        color: '#000000',
        borderRadius: 7,

    },
    imageConfig: {
        backgroundColor: '#fff',
        borderRadius: 5,
        height: 180,
        borderColor: '#6200EE',
        marginVertical: 2,
        padding: 8,
    },
    iconConfig: {
        alignSelf: 'center',
        marginTop: 50, 
    },
    textName: {
        paddingBottom: '5%',
        color:"#8a2be2" 
    },
    textNameImagem: {
        color:"#8a2be2" 
    },
})