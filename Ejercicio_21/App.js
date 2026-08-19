import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { PaperProvider } from 'react-native-paper';
import InicioScreen from './src/InicioScreen';
import CamaraScreen from './src/CamaraScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Inicio" component={InicioScreen} />
          <Stack.Screen name="Camara" component={CamaraScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}