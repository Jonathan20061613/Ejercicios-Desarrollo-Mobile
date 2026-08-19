import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { PaperProvider } from 'react-native-paper';
import { RootStackParamList } from './src/types';
import HomeScreen from './src/HomeScreen';
import CapturaEvidencia from './src/CapturaEvidencia';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App(): React.JSX.Element {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="CapturaEvidencia" component={CapturaEvidencia} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}