import React, { useState} from "react";
import { Text, StyleSheet, View, TextInput, TouchableHighlight, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Login = () => {
    const navigation = useNavigation();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    return (
        <>
            <View style={styles.form}>
                <Text style={styles.label}>Login</Text>
                <View>
                    <TextInput style={styles.input} value={username} onChangeText={ texto => setUsername(texto)}
                        placeholder="Ingrese su Email o Nombre de Usuario" placeholderTextColor='black' />
                    <TextInput style={styles.input} value={password} onChangeText={ texto => setPassword(texto)}
                        placeholder="Ingrese su Contraseña" placeholderTextColor='black' secureTextEntry={true}/>
                    <View>
                        <TouchableHighlight  style={styles.btnSubmit} onPress={ () => navigation.navigate('Contacto')}>
                            <Text style={styles.textoSubmit}>Login</Text>
                        </TouchableHighlight>
                    </View>
                </View>
                <View style={styles.registrar}>
                    <Text style={styles.cuenta}>¿No tienes cuenta?</Text>
                    <TouchableHighlight onPress={ () => navigation.navigate('Singup')} style={styles.btnRegistrar}>
                        <Text style={styles.textoRegistrar}>Registrarse</Text>
                    </TouchableHighlight>
                </View>
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    form: {
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
    },
    btnRegistrar: {
        backgroundColor: 'white',
        borderRadius: 100,
        marginHorizontal: 10,
    },
    registrar: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    textoRegistrar: {
        color: 'blue',
        fontSize: 20,
    },
    cuenta: {
        fontSize: 20,
    }
})

export default Login;