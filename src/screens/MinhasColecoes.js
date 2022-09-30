import React, { useState, useEffect } from 'react';
import { SafeAreaView, View, Text, Button, StyleSheet, TextInput, Image, TouchableOpacity, Alert } from 'react-native';
import { FlatList } from 'react-native-gesture-handler'
import Icon from 'react-native-vector-icons/Ionicons';

///////////////////////////////////////////////////
//Parou de ser utilizado
//import Colecoes from '../components/Colecoes';
//////////////////////////////////////////////////

//import AddColecoes from '../components/AddColecoes';
//import colecoesData from '../../datajson/colecoesData.json'

//Importacoes para projeto 2
import { initializeFirestore, collection, addDoc, query, onSnapshot, doc, deleteDoc } from 'firebase/firestore';
import app from '../services/firebaseConnections';

export default function MinhasColecoes(props) {

    const [listaColecoes, setListaColecoes] = useState();

    const db = initializeFirestore(app, { experimentalForceLongPolling: true });
    const colecoesCollection = collection(db, "colecoes");

    useEffect(() => {
        const q = query(colecoesCollection);

        const unsubscribe = onSnapshot(q, (snapshot) => {
            const colecoes = []
            snapshot.forEach((doc) => {
                colecoes.push({
                    id: doc.id,
                    ...doc.data()
                })
            })
            setListaColecoes(colecoes);
        })
    }, [])

    /////Nova Parte///////////
    const deleteColecoes = (id) => {
        Alert.alert(
            "Você tem certeza que deseja excluir essa coleção?",
            "",
            [
                {
                    text: "Sim",
                    onPress:()=>deleteDoc(doc(db,"colecoes",id))
                },
                {
                    text: "Cancelar",
                    onPress: () => { }
                }
            ]
        )
        
    }


    const itemColecoes = ({ item }) => {
        // console.log(item.id);
        return (
            <View style={styles.containerBox} >
                <View>
                <TouchableOpacity style={styles.touchContainer} 
                        onPress={() =>{
                                        console.log("ta pegando!");
                                        props.navigation.navigate('PaginaCartoes',{IdColecao:item.id});
                                    }
                        }
                >
                    <View style={styles.imagemConfigExternal}>
                        <Image source={require("../assets/image/caneta.png")} style={styles.imagemColecao} />
                    </View>
                    <View atyle={styles.textTituloConf}>
                        <Text style={styles.areaText}>{item.nome}</Text>
                    </View>
                </TouchableOpacity>
                </View>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity onPress={() => props.navigation.navigate("EditColecoes",{idItemColecao: item.id, iNome:item.nome, iDescricao:item.descricao})}>
                        <View style={styles.areaButton}>
                            <Image source={require("../assets/image/pen.png")} style={styles.buttonCards} />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() =>{
                                        console.log("click pegando excluir button");
                                        deleteColecoes(item.id);
                                    }
                                
                                }
                    >
                        <View style={styles.areaButton2}>
                            <Image source={require("../assets/image/delete.png")} style={styles.buttonCards} />
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }


    ////////////////////////////////////////////////////////////////////
    return (
        <View style={styles.container}>
            <FlatList
                data={listaColecoes}
                renderItem={itemColecoes}
                keyExtractor={colecoes => colecoes.id}
            />

            <View>
                <TouchableOpacity style={styles.addButton} onPress={() => props.navigation.navigate("AddColecoes")}>
                    <Icon name={"add-outline"} size={40} color="#ffffff" />
                </TouchableOpacity>
            </View>

        </View >
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#3a335b',
        paddingTop: '5%',
    },
    addButton: {
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.2)',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        width: 70,
        height: 70,
        backgroundColor: '#6A61A1',
        borderRadius: 40,
        bottom: 30,
        right: 15,
    },
    areaText: {
        paddingLeft:50,
        alignItems: "flex-start",
        fontSize: 28,
        color: '#20b2aa',
        fontWeight: 'bold',

    },
    imagemColecao: {
        width: 50,
        height: 50,
    },
    imagemConfigExternal: {
        width: 60,
        height: 60,
        paddingLeft: 30,
    },
    textTituloConf:{
        paddingLeft: 60,
    },
    containerBox: {
        flexDirection: "row",
        backgroundColor: "white",
        borderRadius: 15,
        height: 100,
        maxWidth: '90%',
        paddingTop: 5,
        paddingBottom: 10,
        marginBottom: 15,
        marginLeft: 20,
        alignItems: "center",
        justifyContent: "space-between"
    },
    touchContainer: {
        paddingTop: '5%',
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
    },
    buttonContainer: {
        flexDirection: "column",
        justifyContent: "space-between",
        paddingLeft: 40,
        flexWrap: "wrap"

    },
    buttonCards: {
        height: 30,
        width: 30,
    },
    areaButton: {
        height: '63%',
    },
    areaButton2: {
    },
})