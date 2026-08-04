import React from 'react';
import { PaperProvider, MD3LightTheme } from 'react-native-paper';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import LibroCard from './components/LibroCard';

const theme = {
  ...MD3LightTheme,
  colors: {
    ...MD3LightTheme.colors,
    primary: '#1B4D3E',
    background: '#F2F5F3',
    surface: '#FFFFFF',
    text: '#0D261F',
  },
};

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <SafeAreaView style={[styles.container, { backgroundColor: theme.colors.background }]}>
        <ScrollView contentContainerStyle={styles.scrollContent}>
          <View style={styles.header}>
            <Text style={[styles.headerTitle, { color: theme.colors.primary }]}>
              Mis Lecturas
            </Text>
          </View>
          
          <LibroCard
            portada="https://images.cdn3.buscalibre.com/fit-in/360x360/61/8d/618d227e8967274cd9589a549adff52d.jpg"
            titulo="Cien años de soledad"
            autor="Gabriel García Márquez"
            genero="Realismo mágico"
            progreso={0.75}
          />

          <LibroCard
            portada="https://images.cdn1.buscalibre.com/fit-in/360x360/b0/39/b039af065268818b7bd3b0e016f8db65.jpg"
            titulo="1984"
            autor="George Orwell"
            genero="Distopía"
            progreso={0.40}
          />

          <LibroCard
            portada="https://imagessl5.casadellibro.com/a/l/s5/95/9786074577495.webp"
            titulo="El Principito"
            autor="Antoine de Saint-Exupéry"
            genero="Fábula"
            progreso={1.00}
          />
        </ScrollView>
      </SafeAreaView>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 20,
  },
  header: {
    paddingTop: 15,
    paddingBottom: 5,
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 26,
    fontWeight: 'bold',
    letterSpacing: 0.5,
  },
});