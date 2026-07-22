import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

import fotoPerfil from './assets/imagen-perfil.png';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.container_2}>
        <Text style={styles.texto1}>¡Hola! Soy Jonathan</Text>
        <Image source={fotoPerfil} style={styles.foto} />
        <Text style={styles.texto}>Soy estudiante del SENA y me Gusta mucho la Música, el Dibujo, la Programación</Text>
        <Text style={styles.texto}>Mis hobbies Favoritos son Programar, Dibujar, Leer, y Hacer Deporte</Text>
      </View>
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000000',
  },
  container_2: {
    width: '90%',
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#858585',
    borderRadius: 15,
  },
  texto: {
    color: '#FFFFFF',
    textAlign: 'center',
    marginBottom: 15,
    fontSize: 16,
  },
  texto1: {
    color: '#FFFFFF',
    textAlign: 'center',
    marginBottom: 15,
    fontSize: 20,
    fontWeight:'bold'
  },
  foto: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 15,
  },
});
