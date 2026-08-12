import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import InicioScreen from './src/screens/InicioScreen';
import NoticiasScreen from './src/screens/NoticiasScreen';
import InfoTecnologia from './src/screens/InfoTecnologia';
import InfoMundo from './src/screens/InfoMundo';
import InfoDeportes from './src/screens/InfoDeportes';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: '#0F0F10' },
          headerTintColor: '#FFFFFF',
          headerTitleStyle: { fontWeight: 'bold' },
        }}
      >
        <Stack.Screen 
          name="Inicio" 
          component={InicioScreen} 
          options={{ title: 'Inicio - BBC Noticias' }}
        />
        <Stack.Screen 
          name="Noticias" 
          component={NoticiasScreen} 
          options={{ title: 'Titulares' }}
        />
        <Stack.Screen 
          name="InfoTecnologia" 
          component={InfoTecnologia} 
          options={{ title: 'Tecnología' }}
        />
        <Stack.Screen 
          name="InfoMundo" 
          component={InfoMundo} 
          options={{ title: 'Mundo' }}
        />
        <Stack.Screen 
          name="InfoDeportes" 
          component={InfoDeportes} 
          options={{ title: 'Deportes' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}