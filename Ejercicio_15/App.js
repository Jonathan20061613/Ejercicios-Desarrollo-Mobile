import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import InicioScreen from './src/screens/InicioScreen';
import ProductosScreen from './src/screens/ProductosScreen';
import ContactoScreen from './src/screens/ContactoScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerStyle: { backgroundColor: '#3E2723' },
          headerTintColor: '#FFFFFF',
          headerTitleStyle: { fontWeight: 'bold' },
          tabBarActiveTintColor: '#3E2723',
          tabBarInactiveTintColor: '#8D6E63',
          tabBarStyle: {
            paddingBottom: 6,
            height: 60,
            backgroundColor: '#FFFFFF',
            borderTopColor: '#EFEBE9',
          },
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Inicio') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'Productos') {
              iconName = focused ? 'cafe' : 'cafe-outline';
            } else if (route.name === 'Contacto') {
              iconName = focused ? 'call' : 'call-outline';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
      >
        <Tab.Screen 
          name="Inicio" 
          component={InicioScreen} 
        />
        <Tab.Screen 
          name="Productos" 
          component={ProductosScreen} 
        />
        <Tab.Screen 
          name="Contacto" 
          component={ContactoScreen} 
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}