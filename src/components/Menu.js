// Drawer Navigator = OK

import * as React from 'react';
import { StyleSheet, Image, Text, View, TouchableOpacity } from 'react-native';
import {
    createDrawerNavigator,
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem,
    drawerContent,
} from '@react-navigation/drawer';

import Icon from 'react-native-vector-icons/Ionicons'

import MinhasColecoes from '../screens/MinhasColecoes';


const Drawer = createDrawerNavigator();




export default function Menu(navigation) {
    return (
        <Drawer.Navigator
            initialRouteName="MinhasColecoes"
            screenOptions={{
                drawerActiveTintColor: '#ffffff',
                drawerInactiveTintColor: '#ffffff',
                drawerStyle: {
                    backgroundColor: '#43405E',
                    width: 240,
                }
            }}
            drawerContent={props => {
                return (
                    <DrawerContentScrollView{...props}>
                        <ProfileDrawer />
                        <DrawerItemList{...props} />
                        <DrawerItem
                            label="Logout"
                            onPress={() => props.navigation.popToTop('Login')}
                            labelStyle={{ color: '#ffffff' }}
                            icon={() => <Icon name="chevron-back" size={25} color="#ffffff" />}

                        />
                    </DrawerContentScrollView>
                )
            }}

        >
            <Drawer.Screen
                name="Minhas Coleções"
                component={MinhasColecoes}
                options={{
                    drawerIcon: () => <Icon name="options" size={25} color="#ffffff" />,
                    title: "Minhas Coleções",
                    headerTintColor: '#ffffff',
                    headerStyle: {
                        backgroundColor: '#43405E',
                    }
                }}
            />
        </Drawer.Navigator>
    )
}

function ProfileDrawer() {
    return (
        <TouchableOpacity>
            <View style={styles.containerImage}>
                <View>
                    <Image source={require('../assets/image/user.jpg')} style={styles.imageUser} />
                </View>
                <View style={styles.containerName}>
                    <Text style={styles.nameText}>Jonh Senna</Text>
                </View>
                <View style={styles.containerUnder}/>
            </View>
        </TouchableOpacity>
    )
}



const styles = StyleSheet.create({
    containerImage: {
        paddingTop: '10%',
        alignItems: 'center',
        height: 240,
    },
    imageUser: {
        width: 128,
        height: 128,
    },
    containerName:{
        paddingTop: '5%',
    },
    nameText:{
        color:"#ffffff",
        fontSize:18,
    },
    containerUnder:{
        marginTop: '10%',
        height:1,
        width:'85%',
        backgroundColor:'#ffffff',
    },

})