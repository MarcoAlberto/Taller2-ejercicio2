import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MostrarContactos from './src/screens/MostrarContactos';
import AgregarContacto from './src/screens/AgregarContacto';
import Login from './src/screens/Login';
import SingUp from './src/screens/SingUp';

const Stack = createStackNavigator();

class App extends React.Component {
  render() {
    return(
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false}}>
          <Stack.Screen name='Login' component={Login} />
          <Stack.Screen name='Singup' component={SingUp} />
          <Stack.Screen name='Contacto' component={MostrarContactos} />
          <Stack.Screen name='ContactoNuevo' component={AgregarContacto} />
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}

export default App;
