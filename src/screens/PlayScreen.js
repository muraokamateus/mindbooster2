// import React, { useState } from 'react';
// import { SafeAreaView, View, Text, Button, StyleSheet, TextInput, Image, TouchableOpacity } from 'react-native';


// //Importacoes para projeto 2
// import { initializeFirestore, collection, addDoc } from 'firebase/firestore';
// import app from '../services/firebaseConnections';

// export default function PlayScreen(props) {
//     const [frente, setFrente] = useState('')
//     const [verso, setVerso] = useState('')
//     const [idAddCartao] = useState(props.route.params.idCartaoColecao)
//     console.log(idAddCartao)
    

//     const db = initializeFirestore(app, { experimentalForceLongPolling: true })
//     const cartoesCollection = collection(db, "cartoes")

//     const addCartoes = () => {
//         const docCartoes = {
//             frente: frente,
//             verso: verso,
//             idAddCartao: idAddCartao,

//         }

//         addDoc(cartoesCollection, docCartoes).then((docRef) => {
//             console.log("Novo documento inserido com sucesso: " + docRef.id);
//         }).catch((erro) => {
//             console.log("Erro: " + erro);
//         })
//     }

//     return (
//         <View style={styles.container}>
//             <View>
//                 <Text style={styles.textBody}>Preencha os dados da frente e do verso do flashcard</Text>
//             </View>

//             <View style={styles.containerCard}>
//                 <Text style={styles.textTitulo} >Frente</Text>
//                 <TextInput
//                     style={styles.inputFrente}
//                     label='Frente'
//                     onChangeText={setFrente}
//                     value={frente}
//                 />
//                 <Text style={styles.textTitulo} >Verso</Text>
//                 <TextInput
//                     style={styles.inputVerso}
//                     label='Verso'
//                     onChangeText={setVerso}
//                     value={verso}
//                 />
                
//             </View>
//             <View style={styles.containerButton}>
//                 <View style={styles.cadastrarButton}>
//                     < TouchableOpacity onPress={() => {
//                         props.navigation.pop(1);
//                         addCartoes();
//                     }
//                     }>
//                         <Text
//                             style={{
//                                 color: "#ffffff",
//                                 fontSize: 16,
//                             }}>
//                             CADASTRAR
//                         </Text>
//                     </ TouchableOpacity>
//                 </View>

//                 <View style={{}}>
//                     < TouchableOpacity style={styles.cancelButton}
//                         onPress={() => props.navigation.pop(1)}>
//                         <Text
//                             style={{
//                                 color: "#ffffff",
//                                 fontSize: 16,
//                             }}>
//                             CANCELAR
//                         </Text>
//                     </ TouchableOpacity>
//                 </View>

//             </View>
//         </View >
//     )
// }

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         flexDirection: 'column',
//         backgroundColor: '#3c345d',
//         paddingTop: '5%',
//         paddingRight: '9%',
//         paddingLeft: '9%',
//     },
//     textBody: {
//         color: 'white',
//         fontSize: 18,
//         textAlign: 'center',
//         paddingBottom: '5%',
//         fontWeight: 'bold',
//         paddingTop: '5%',

//     },
//     containerCard: {
//         backgroundColor: '#fff',
//         borderRadius: 8,
//         padding: 10,
//         marginTop: 30,
//     },
//     inputFrente: {
//         height: 100,
//         fontSize: 34,
//         textAlign: 'center',
//         backgroundColor: '#fff',
//         textDecorationLine: 'underline',
//         fontWeight: 'bold',
//     },
//     inputVerso: {
//         height: 100,
//         fontSize: 34,
//         textAlign: 'center',
//         backgroundColor: '#fff',
//         textDecorationLine: 'underline',
//         fontWeight: 'bold',
//     },
//     title: {
//         color: '#fff',
//         marginTop: 30,
//         textAlign: 'center',
//         fontSize: 24,
//     },
//     textTitulo: {
//         color: 'grey',
//         fontSize: 14,
//     },
//     containerButton: {
//         height: 200,
//         marginTop: 20,
//         justifyContent: 'space-between',
//     },
//     cancelButton: {
//         height: 45,
//         minHeight: 50,
//         alignItems: "center",
//         alignItems: 'center',
//         borderWidth: 1,
//         borderRadius: 4,
//         borderColor: '#ffffff',
//         justifyContent: 'center',
//     },
//     cadastrarButton: {
//         minHeight: 50,
//         height: 45,
//         alignItems: "center",
//         alignItems: 'center',
//         backgroundColor: "#6A61A1",
//         borderRadius: 4,
//         justifyContent: 'center',
//     },

// })