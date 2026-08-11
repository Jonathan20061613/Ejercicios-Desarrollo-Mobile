import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { PaperProvider, MD3LightTheme } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import InicioScreen from './src/screens/InicioScreen';
import ProductosScreen from './src/screens/ProductosScreen';
import ContactoScreen from './src/screens/ContactoScreen';

const Tab = createBottomTabNavigator();

const theme = {
  ...MD3LightTheme,
  colors: {
    ...MD3LightTheme.colors,
    primary: '#6818A5',
    secondary: '#D283FF',
    background: '#F6F2FB',
  },
};

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            headerStyle: { backgroundColor: '#6818A5' },
            headerTintColor: '#FFFFFF',
            headerTitleStyle: { fontWeight: 'bold' },
            tabBarActiveTintColor: '#6818A5',
            tabBarInactiveTintColor: '#888888',
            tabBarStyle: {
              backgroundColor: '#FFFFFF',
              height: 60,
              paddingBottom: 8,
              paddingTop: 6,
            },
            tabBarIcon: ({ color, size }) => {
              let iconName;

              if (route.name === 'Inicio') {
                iconName = 'home-variant';
              } else if (route.name === 'Productos') {
                iconName = 'cube-outline';
              } else if (route.name === 'Contacto') {
                iconName = 'card-account-phone';
              }

              return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
            },
          })}
        >
          <Tab.Screen
            name="Inicio"
            component={InicioScreen}
            options={{ title: 'Inicio' }}
          />
          <Tab.Screen
            name="Productos"
            component={ProductosScreen}
            options={{ title: 'Productos & Servicios' }}
          />
          <Tab.Screen
            name="Contacto"
            component={ContactoScreen}
            options={{ title: 'Contacto Comercial' }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}