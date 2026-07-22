import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable, Alert } from 'react-native';

export default function App() {
  const [rol, setRol] = useState("Estudiante de Software en el SENA");

  const alternarRol = () => {
    setRol(prevRol => 
      prevRol === "Estudiante de Software en el SENA" 
        ? "Desarrollador Web Full-Stack 🚀" 
        : "Estudiante de Software en el SENA"
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.tarjeta}>
        <Text style={styles.avatar}>🧑‍💻</Text>
        <Text style={styles.nombre}>Jonathan Jiménez</Text>
        <Text style={styles.rolActual}>{rol}</Text>
        <View style={styles.separador} />
        <Text style={styles.descripcion}>
          Apasionado por la tecnología, especializado en programación y desarrollo web. Transformo ideas en soluciones funcionales, creativas y eficientes con enfoque en la mejora continua.
        </Text>
      </View>
      
      <View style={styles.botonera}>
        <Pressable
          style={({ pressed }) => [
            styles.boton,
            { backgroundColor: '#4F46E5', opacity: pressed ? 0.7 : 1 }
          ]}
          onPress={alternarRol}
        >
          <Text style={styles.textoBoton}>Cambiar Rol Profesional</Text>
        </Pressable>

        <Pressable
          style={({ pressed }) => [
            styles.boton,
            { backgroundColor: '#10B981', opacity: pressed ? 0.7 : 1 }
          ]}
          onPress={() => Alert.alert("Contacto", "Email: andressguilera2006@gmail.com\nTel: +57 314 7656474")}
        >
          <Text style={styles.textoBoton}>Contactar</Text>
        </Pressable>
      </View>
      
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0F172A',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  tarjeta: {
    backgroundColor: '#1E293B',
    borderRadius: 15,
    padding: 25,
    width: '100%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  avatar: {
    fontSize: 60,
    marginBottom: 10,
  },
  nombre: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#F8FAFC',
    marginBottom: 5,
  },
  rolActual: {
    fontSize: 16,
    color: '#38BDF8',
    fontWeight: '600',
    marginBottom: 15,
  },
  separador: {
    height: 1,
    backgroundColor: '#334155',
    width: '100%',
    marginVertical: 15,
  },
  descripcion: {
    fontSize: 14,
    color: '#94A3B8',
    textAlign: 'center',
    lineHeight: 22,
  },
  botonera: {
    marginTop: 25,
    width: '100%',
    gap: 15,
  },
  boton: {
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textoBoton: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  }
});
