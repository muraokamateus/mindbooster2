import * as React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";


export default function Colecoes(props) {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.click}>
                <View style={styles.imagem}>
                    <Image source={require("../assets/image/caneta.png")} style={styles.imagem} />
                </View>
                <View style={styles.areaText} >
                    {/* {props.children}te */}
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => props.navigation.navigate("EditColecoes")}> 
                <View style={styles.areabutton}>
                    <Image source={require("../assets/image/pen.png")} style={styles.btncards} />
                </View>
            </TouchableOpacity>
            <TouchableOpacity>    
                <View style={styles.areabutton2}>
                    <Image source={require("../assets/image/delete.png")} style={styles.btncards} />
                </View>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        backgroundColor: "white",
        borderRadius: 15,
        // maxHeight: "100%",
        height:100,
        maxWidth: '90%',
        paddingTop: 5,
        paddingBottom: 10,
        marginBottom: 17,
        marginLeft: 15,
        justifyContent: "space-evenly",
        alignItems: "flex-start",
        justifyContent:"center"
    },

    click: {
        paddingTop:'3%',
        flex: 0.8, 
        flexDirection:"row", 
        justifyContent: "space-around", 
        alignItems: "center",
    },
    
    imagem: {
        width: 60,
        height: 60,

    },
    areaText: {
        flex: 1,
        alignItems: "flex-start",
        paddingLeft: 30,

    },

    areabutton: {
        height: '50%',
        flexDirection: "column",
        justifyContent: 'space-evenly',
    },
    areabutton2: {
        height: '50%',
        flexDirection: "column",
        justifyContent: 'space-evenly',
    },


    btncards: {
        height: 30,
        width: 30,
    }
})