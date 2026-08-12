import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import InicioScreen from './src/screens/InicioScreen';
import MenuScreen from './src/screens/MenuScreen';
import ContactoScreen from './src/screens/ContactoScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName="Inicio"
        screenOptions={{
          headerStyle: { backgroundColor: '#212121' },
          headerTintColor: '#FF6D00',
          headerTitleStyle: { fontWeight: 'bold' },
        }}
      >
        <Stack.Screen 
          name="Inicio" 
          component={InicioScreen} 
          options={{ title: 'El Carbón - Asados' }} 
        />
        <Stack.Screen 
          name="Menu" 
          component={MenuScreen} 
          options={{ title: 'Nuestro Menú' }} 
        />
        <Stack.Screen 
          name="Contacto" 
          component={ContactoScreen} 
          options={{ title: 'Contacto' }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}