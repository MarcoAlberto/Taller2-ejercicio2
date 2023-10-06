import React from "react";
import { Text, StyleSheet, View, TouchableHighlight } from "react-native";

const Contactos = ({item, eliminarContacto}) => {
    const dialogoEliminar = id => {
        console.log('eliminado...', id);
        eliminarContacto(id);
    }

    return(
        <View style={styles.contacto}>
            <View>
                <Text style={styles.name}>{item.nombre}</Text>
                <Text style={styles.name}>{item.apellido}</Text>
                <Text style={styles.number}>{item.numero}</Text>
                <TouchableHighlight onPress={ () => dialogoEliminar(item.id) } style={styles.btnEliminar}>
                    <Text style={styles.textoEliminar}>Eliminar</Text>
                </TouchableHighlight>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    contacto: {
        backgroundColor: '#FFF',
        borderBottomColor: '#e1e1e1',
        borderStyle: 'solid',
        borderBottomWidth: 1,
        paddingVertical: 20,
        paddingHorizontal: 10,
    },
    name: {
        fontWeight: 'bold',
        fontSize: 18,
        marginTop: 20,
    },
    number: {
        fontSize: 18,
    },
    btnEliminar: {
        padding: 10,
        backgroundColor: 'red',
        marginVertical: 10,
    },
    textoEliminar: {
        color: '#FFF',
        fontWeight: 'bold',
        textAlign: 'center',
    }
})

export default Contactos;