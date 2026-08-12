import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { PaperProvider, MD3LightTheme, Appbar, Text } from 'react-native-paper';
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
    secondary: '#B14AED',
    tertiary: '#EBD3FF',
    background: '#FAF7FC',
    surface: '#FFFFFF',
    text: '#130029',
  },
};

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <NavigationContainer>
        <Appbar.Header style={styles.header}>
          <View style={styles.headerContainer}>
            <Image
              source={require('./assets/image.png')}
              style={styles.headerLogo}
            />
            <View style={styles.headerTextContainer}>
              <Text style={styles.headerTitle}>StockVelia</Text>
              <Text style={styles.headerSubtitle}>Plataforma de Trazabilidad Comercial</Text>
            </View>
          </View>
        </Appbar.Header>

        <Tab.Navigator
          screenOptions={({ route }) => ({
            headerShown: false,
            tabBarActiveTintColor: '#6818A5',
            tabBarInactiveTintColor: '#8A7A9E',
            tabBarStyle: {
              backgroundColor: '#FFFFFF',
              height: 68,
              paddingBottom: 10,
              paddingTop: 8,
              borderTopWidth: 1,
              borderTopColor: 'rgba(104, 24, 165, 0.08)',
              elevation: 10,
              shadowColor: '#130029',
              shadowOffset: { width: 0, height: -2 },
              shadowOpacity: 0.06,
              shadowRadius: 6,
            },
            tabBarLabelStyle: {
              fontSize: 11,
              fontWeight: '800',
              textAlign: 'center',
              letterSpacing: 0.2,
            },
            tabBarIcon: ({ color, focused }) => {
              let iconName;

              if (route.name === 'Inicio') {
                iconName = focused ? 'view-dashboard' : 'view-dashboard-outline';
              } else if (route.name === 'Productos') {
                iconName = focused ? 'cube' : 'cube-outline';
              } else if (route.name === 'Contacto') {
                iconName = focused ? 'headset' : 'headset';
              }

              return <MaterialCommunityIcons name={iconName} size={24} color={color} />;
            },
          })}
        >
          <Tab.Screen name="Inicio" component={InicioScreen} />
          <Tab.Screen name="Productos" component={ProductosScreen} />
          <Tab.Screen name="Contacto" component={ContactoScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#250146',
    elevation: 4,
    height: 84,
    paddingHorizontal: 16,
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(235, 211, 255, 0.15)',
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
    shadowColor: '#130029',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 6,
  },
  headerContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 14,
  },
  headerLogo: {
    width: 54,
    height: 54,
    resizeMode: 'contain',
  },
  headerTextContainer: {
    justifyContent: 'center',
  },
  headerTitle: {
    color: '#FFFFFF',
    fontWeight: '900',
    fontSize: 23,
    lineHeight: 27,
    letterSpacing: -0.5,
  },
  headerSubtitle: {
    color: '#EBD3FF',
    fontSize: 11,
    fontWeight: '600',
    opacity: 0.9,
    marginTop: 1,
    letterSpacing: 0.2,
  },
});