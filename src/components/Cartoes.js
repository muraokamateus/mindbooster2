import * as React from 'react';
import { StyleSheet, Image, Text, View, TouchableOpacity } from 'react-native';


export default function Cartoes(props) {
    return (
        <View style={styles.container}>
            <View>
            </View>
            <View>
                {/* <Image source={require("../assets/image/olho.png")} style={styles.imagem} /> */}
            </View>
            <View style={styles.areatexto} >
                {props.children}
            </View>
            <TouchableOpacity style={{flexDirection:"row",paddingTop:12 }}>
                <View style={styles.areabutton}>
                    <Image source={require("../assets/image/pen.png")} style={styles.btncards} />
                </View>
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
        borderRadius: 20,
        height: 80,
        maxWidth: '95%',
        paddingTop: 5,
        paddingBottom: 10,
        marginBottom: 17,
        marginLeft: 10,
        justifyContent: "space-evenly",
        alignItems: "flex-start",
    },

    click: {
        flex: 0.8,
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
    },

    imagem: {
        width: 50,
        height: 50,

    },
    areatexto: {
        flex: 1,
        alignItems: "flex-start",
        paddingLeft: 30,

    },

    areabutton: {
        size:35,
        flexDirection: "column",
        justifyContent: 'space-evenly',
    },
    areabutton2: {
        paddingLeft:10,
        paddingRight:10,
        size: 35,
        flexDirection: "column",
        justifyContent: 'space-evenly',
    },

    btncards: {
        height: 30,
        width: 30,
    }
})