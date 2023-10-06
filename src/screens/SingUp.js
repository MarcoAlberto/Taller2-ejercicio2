import React, { useState} from "react";
import { Text, StyleSheet, View, TextInput, TouchableHighlight, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Checkbox from "expo-checkbox";

const SingUp = () => {
    const [isChecked, setChecked] = useState(false);
    const navigation = useNavigation();

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [password2, setPassword2] = useState('');
    return(
        <>
            <View style={styles.formulario}>
                <Text style={styles.label}>Registrarse</Text>
                <View>
                    <TextInput style={styles.input} value={username} onChangeText={ texto => setUsername(texto)}
                        placeholder="Ingrese un Nombre de Usuario" placeholderTextColor='black' />
                    <TextInput style={styles.input} value={email} onChangeText={ texto => setEmail(texto)}
                        placeholder="Ingrese su Email" placeholderTextColor='black' />
                    <TextInput style={styles.input} value={password} onChangeText={ texto => setPassword(texto)} 
                    secureTextEntry={true} placeholder="Ingrese un Password" placeholderTextColor='black' />
                    <TextInput style={styles.input} value={password2} onChangeText={ texto => setPassword2(texto)}
                    placeholder="Ingrese otra vez su Password" placeholderTextColor='black' secureTextEntry={true}/>
                    <View>
                        <View style={styles.checkbox}>
                            <Checkbox value={isChecked} onValueChange={setChecked} />
                            <Text style={styles.terminos}>Acepto los Terminos y Condiciones</Text>
                        </View>
                        <TouchableHighlight onPress={ () => navigation.navigate('Login')} style={styles.btnSubmit}>
                            <Text style={styles.textoSubmit}>Registrarse</Text>
                        </TouchableHighlight>
                    </View>
                </View>
                <TouchableHighlight style={styles.btnSubmit} onPress={ () => navigation.navigate('Login')}>
                    <Text style={styles.textoSubmit}>Cancelar</Text>
                </TouchableHighlight>
            </View>
        </>
    );
};

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
    },
    checkbox: {
        marginVertical: 20,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    terminos: {
        marginHorizontal: 10,
    }
})

export default SingUp;