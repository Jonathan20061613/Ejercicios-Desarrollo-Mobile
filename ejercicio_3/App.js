import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function App() {
  const [contador, setContador] = useState(0);
  
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Contador Interactivo</Text>
      <Text style={styles.numero}>{contador}</Text>
      
      <View style={styles.botonera}>
        <TouchableOpacity 
          style={[styles.boton, { backgroundColor: '#10B981' }]} 
          onPress={() => setContador(contador + 1)}
        >
          <Text style={styles.textoBoton}>Incrementar</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={[styles.boton, { backgroundColor: '#0065FF' }]} 
          onPress={() => setContador(0)}
        >
          <Text style={styles.textoBoton}>Reiniciar</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={[styles.boton, { backgroundColor: '#EF4444' }]} 
          onPress={() => setContador(contador - 1)}
        >
          <Text style={styles.textoBoton}>Decrementar</Text>
        </TouchableOpacity>
      </View>
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#374751',
    marginBottom: 20
  },
  numero: {
    fontSize: 64,
    fontWeight: 'bold',
    color: '#1F2937',
    marginBottom: 30
  },
  botonera: {
    gap: 15,
    width: '60%',
  },
  boton: {
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  textoBoton: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  }
});
  