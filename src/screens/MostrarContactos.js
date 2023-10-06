import React, { useState, useEffect } from "react";
import { Text, StyleSheet, View, FlatList, TouchableWithoutFeedback, Keyboard, 
    TouchableOpacity } from "react-native";
import Contactos from "../componentes/Contactos";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";

const MostrarContactos = () => {
    const [contactos, setContacto] = useState([
        {nombre: 'Karens', apellido: 'Medrano', numero: '2222-2222'},
        {nombre: 'Rafael', apellido: 'Torres', numero: '2222-2221'},
        {nombre: 'Evelyn', apellido: 'Hernandez', numero: '2222-2223'}
    ]);

    const navigation = useNavigation();

    useEffect(() => {
        const obtenerContactoStorage = async () => {
            try {
                const contactoStorage = await AsyncStorage.getItem('contactos');
                if(contactoStorage){
                    setContacto(JSON.parse(contactoStorage))
                }
            }
            catch (error) {
                console.log(error);
            }
        }
        obtenerContactoStorage();
    }, []);

    const eliminarContacto = id => {
        const contactoFiltrado = contactos.filter( contacto => contacto.id !== id );
        setContacto(contactoFiltrado);
        guardarContactoStorage(JSON.stringify(contactoFiltrado));
    }

    const cerrarTeclado = () => {
        Keyboard.dismiss();
    }

    const guardarContactoStorage = async (contactoJSON) => {
        try {
            await AsyncStorage.setItem('contactos', contactoJSON);
        }
        catch (error) {
            console.log(error);
        }
    }

    return(
        <TouchableWithoutFeedback onPress={() => cerrarTeclado() }>
            <View style={styles.contenedor}>
                <View style={styles.viewtitle}>
                    <Text style={styles.titulo}>Contactos</Text>
                </View>
                <View style={styles.contenido}>
                    <>
                        <FlatList data={contactos} renderItem={({item}) => <Contactos item={item}
                            eliminarContacto={eliminarContacto} /> } keyExtractor={contacto => contacto.id}/>
                    </>
                </View>
                <TouchableOpacity style={styles.roundButton} 
                    onPress={() => navigation.navigate('ContactoNuevo')}>
                    <Text style={styles.plus} >+</Text>
                </TouchableOpacity>
            </View>
        </TouchableWithoutFeedback>
    );
};

const styles = StyleSheet.create({
    contenedor: {
        backgroundColor: 'white',
        flex: 1,
    },
    titulo: {
        color: 'white',
        fontSize: 40,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    titulo1: {
        color: 'black',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    contenido: {
        flex: 1,
        marginHorizontal: '2.5%',
    },
    listado: {
        flex: 1,
    },
    viewtitle: {
        height:120,
        backgroundColor: 'blue',
        width: '100%',
        borderBottomLeftRadius: 50,
        borderBottomRightRadius: 50,
        position: 'relative',
        justifyContent: 'center',
    },
    roundButton: {
        width: 80,
        height: 80,
        backgroundColor: 'blue',
        justifyContent: "center",
        padding: 10,
        borderRadius: 100,
        alignSelf: 'flex-end',
    },
    plus: {
        fontSize: 40,
        textAlign: 'center',
        color: 'white',
    },
});

export default MostrarContactos;