import React, { useState, useEffect } from 'react';
import { SafeAreaView, View, Text, Button, StyleSheet, TextInput, Image, TouchableOpacity, Alert } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';
// import AddCartoes from '../screens/card/AddCartoes';


//Importacoes para projeto 2
import { initializeFirestore, collection, addDoc, query, onSnapshot, doc, deleteDoc, where, getDocs  } from 'firebase/firestore';
import app from '../services/firebaseConnections';


export default function PaginaCartoes(props) {
    // console.log(props.route.params.IdColecao);

    const [listaCartoes, setlistaCartoes] = useState();
    const [filterLista,setFilterLista] = useState();
    const [idCartaoColecao]= useState(props.route.params.IdColecao);

    const db = initializeFirestore(app, { experimentalForceLongPolling: true });
    const cartoesCollection = collection(db, "cartoes");

    useEffect(() => {
        const q = query(cartoesCollection);
        // ,where("idCartaoColecao","==","IdColecao")
        // const querySnapshot = getDocs(q,(query));
        // querySnapshot.forEach((doc)=>{
        //     console.log(doc.id,"=>",doc.data());
        // });
        

        const unsubscribe = onSnapshot(q, (snapshot) => {
            const cartoes = []
            snapshot.forEach((doc) => {
                cartoes.push({
                    id: doc.id,
                    ...doc.data()
                })
            })
            setlistaCartoes(cartoes);
            setFilterLista(cartoes);
        })
    }, [])

    ////////////////
    const deleteCartoes = (id) => {
        Alert.alert(
            "Você tem certeza que deseja excluir esse cartão?",
            "",
            [
                {
                    text: "Sim",
                    onPress: () => deleteDoc(doc(db, "cartoes", id))
                },
                {
                    text: "Cancelar",
                    onPress: () => { }
                }
            ]
        )

    }

    const itemCartao = ({ item }) => {

        return (
            <View style={styles.containerBox}>
                <View style = {styles.entreNomes}>
                <View>
                    <Text style={styles.tituloCartao}>Frente</Text>
                    <Text style={styles.textCartao}>{item.frente}</Text>
                </View>

                <View>
                    <Text style={styles.tituloCartao}>Verso</Text>
                    <Text style={styles.textCartao}>{item.verso}</Text>
                </View>
                </View>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity
                        onPress={() => props.navigation.navigate("EditCartoes", { idItemCartao: item.id, iFrente:item.frente, iVerso:item.verso})}>
                        <View style={styles.areaButton1}>
                            <Image source={require("../assets/image/pen.png")} style={styles.buttonCards1} />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => {
                            console.log("click pegando excluir button");
                            deleteCartoes(item.id);
                        }
                        }>
                        <View style={styles.areaButton2}>
                            <Image source={require("../assets/image/delete.png")} style={styles.buttonCards2} />
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

    //Pesquisa
    const [search,setSearch] = useState("");

    // const searchFunction = (text)=>{
    //     if(text){
    //         const newListaCartoes = listaCartoes.filter((item)=>{
    //             const itemLista = item.frente? item.frente.toUpperCase()
    //                             :''.toUpperCase();
    //             const textLista = text.toUpperCase();
    //             return itemLista.indexOf(textLista) > -1;
    //         });
    //         setlistaCartoes(newListaCartoes);
    //         setSearch(text);
    //     }else{
            
    //         setlistaCartoes();
    //         setSearch(text);
    //     }

    // }
    const searchFunction = (text)=>{
        if(text){
            const newListaCartoes = listaCartoes.filter((item)=>{
                const itemLista = item.frente? item.frente.toUpperCase()
                                :''.toUpperCase();
                const textLista = text.toUpperCase();
                return itemLista.indexOf(textLista) > -1;
            });
            setFilterLista(newListaCartoes);
            setSearch(text);
        }else{
            setFilterLista(listaCartoes);
            setSearch(text);
        }

    }

    return (
        <View style={styles.container}>
            <View style={{ width: '100%', paddingBottom: '4%', paddingLeft: 20, paddingRight: 20, }}>
            <View style={styles.textFiltro}>
                <TextInput
                style={styles.textInput}
                    label='Filtro'
                    placeholder="Filtro"
                    placeholderTextColor="#000000"
                    value ={search}
                    onChangeText={(text)=>searchFunction(text)}           
                />
            </View>
            </View>
            <View style={{ paddingLeft: 120, paddingRight: 120, paddingBottom: '4%' }}>
                < TouchableOpacity style={{
                    height: 55,
                    alignItems: "center",
                    backgroundColor: "#2e8b57",
                    borderRadius: 5,
                    justifyContent: 'center',
                }}
                onPress={() =>  {
                    // props.navigation.pop(1);
                    console.log("Botao de jogar ta pegando!")
                }
            }
                
                >
                    <Text
                        style={{
                            color: "#ffffff",
                            fontSize: 30,
                        }}>
                        Jogar!
                    </Text>
                </ TouchableOpacity>
            </View>
            <FlatList
                // data={listaCartoes}
                data={filterLista}
                renderItem={itemCartao}
                keyExtractor={cartoes => cartoes.id}
            />

            <View>
                <TouchableOpacity style={styles.addButton}
                    onPress={() => {
                        props.navigation.navigate("AddCartoes",{idCartaoColecao})
                        

                    }}
                >
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
    upCartao: {
        flexDirection: "row",
        paddingBottom: '3%',
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
    input: {
        overflow: 'hidden',
        width: '85%',
        backgroundColor: '#ffffff',
        marginLeft: 20,
        marginTop: 10,
        marginBottom: 30,
    },

    textCartao: {
        color: '#20b2aa',
        fontFamily: 'Tahoma',
        fontSize: 28,
        fontWeight: 'bold',
        marginRight: 23,
        
    },

    tituloCartao: {
        color: 'grey',
        fontFamily: 'Tahoma',
        fontSize: 12,
        fontWeight: 'bold',
    },
    text: {
        color: '#27ACA7',
        fontFamily: 'Tahoma',
        fontSize: 28,
        fontWeight: 'bold',
        marginRight: 23,
    },
    buttonContainer: {
        alignItems: 'space-between',
        flexDirection: 'row',
    },
    buttonCards1:{
        height: 30,
        width: 30,
    },
    buttonCards2:{
        height: 30,
        width: 30,
    },

    containerBox: {
        justifyContent:'space-between',
        borderRadius: 8,
        width: '90%',
        height: 80,
        backgroundColor: '#fff',
        alignSelf: 'center',
        marginVertical: 10,
        flexDirection: 'row',
        alignItems: "center",
        padding: 15,
    },
    entreNomes: {
        flexDirection: 'row',
        justifyContent: 'space-between'

    },

    textInput: {
        backgroundColor: '#ffffff',
        borderWidth: 1,
        borderColor: '#6200EE',
        color: '#000000',
        borderRadius: 7,
        height:50,


    },
    textFiltro: {
        paddingBottom: '1%',
        color: '#8a2be2',
        fontSize:14,
        
    },

})
