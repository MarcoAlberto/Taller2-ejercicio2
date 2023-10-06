import React, { useState} from "react";
import { Text, StyleSheet, View, TextInput, TouchableHighlight, Alert } from "react-native";
import shortid from "react-id-generator";
import { useNavigation } from "@react-navigation/native";

const AgregarContacto = ({contactos, setContacto, guardarContactoStorage}) => {
    const [nombre, guardarNombre] = useState('');
    const [apellido, guardarApellido] = useState('');
    const [numero, guardarNumero] = useState('');

    const navigation = useNavigation();

    const crearNuevoContacto = () => {

        try{
            if(nombre.trim() === '' || apellido.trim() === '' || numero.trim() === ''){
                mostrarAlerta();
                return;
            }
    
            const contacto = { nombre, apellido, numero};
            contacto.id = shortid();
    
            const contactoNuevo = [...contactos, contacto];
            setContacto(contactoNuevo);
    
            guardarContactoStorage(JSON.stringify(contactoNuevo));
    
            guardarNombre('');
            guardarApellido('');
            guardarNumero('');
        }
        catch(error){
            console.log('error al guardar')
            return 'error'
        }
    }

    const mostrarAlerta = () => {
        Alert.alert('Error', 'Todos los campos son obligatorios', [{ text: 'OK' }])
    }

    return(
        <>
            <View style={styles.formulario}>
                <Text style={styles.label}>Agregar Contacto</Text>
                <View>
                    <TextInput style={styles.input} onChangeText={ texto => guardarNombre(texto)} 
                        placeholder="Ingrese un Nombre" placeholderTextColor='black' />
                    <TextInput style={styles.input}  
                        placeholder="Ingrese un Apellido" placeholderTextColor='black' />
                    <TextInput style={styles.input}  
                        placeholder="Ingrese el Numero de Telefono" keyboardType="numeric" 
                        placeholderTextColor='black' />
                    <View>
                        <TouchableHighlight onPress={ () => navigation.navigate('Contacto')} style={styles.btnSubmit}>
                            <Text style={styles.textoSubmit}>Agregar Contacto</Text>
                        </TouchableHighlight>
                    </View>
                </View>
                <TouchableHighlight style={styles.btnSubmit} onPress={ () => navigation.navigate('Contacto')}>
                    <Text style={styles.textoSubmit}>Cancelar</Text>
                </TouchableHighlight>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    formulario: {
        backgroundColor: '#FFF',
        paddingHorizontal: 20,
        flex: 1,
        justifyContent: 'space-around',
    },
    label: {
        fontWeight: 'bold',
        fontSize: 30,
        marginTop: 20,
        textAlign: 'center',
    },
    input: {
        marginTop: 10,
        height: 50,
        borderColor: 'black',
        borderWidth: 1,
        borderStyle: 'solid',
        textAlign: 'center',
        borderRadius: 100,
        fontSize: 20,
        backgroundColor: 'lightgrey',
    },
    btnSubmit: {
        padding: 10,
        backgroundColor: 'blue',
        marginVertical: 10,
        borderRadius: 100,
    },
    textoSubmit: {
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'white',
        fontSize: 25,
    }
})

export default AgregarContacto;