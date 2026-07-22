import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>¡Entorno configurado con éxito!</Text>
      <Text style={styles.subtexto}>Mi Primera app está corriendo con Expo Go</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#cebd12',
    alignItems: 'center',
    justifyContent: 'center'
  },

  texto: {
    color: '#0d1150',
    fontSize: 22,
    fontWeight: 'bold'
  },

  subtexto: {
    color: '#d80202',
    fontSize: 14,
    marginTop: 10
  }
});
