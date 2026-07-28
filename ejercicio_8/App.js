import React from 'react';
import { ScrollView, View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function App() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <View style={styles.card}>
        <Image
          source={{ uri: 'https://images.unsplash.com/photo-1589802829985-817e51171b92?q=80&w=600' }}
          style={styles.image}
          resizeMode="cover"
        />

        <View style={styles.infoContainer}>
          <View style={styles.locationBadge}>
            <MaterialIcons name="place" size={16} color="#0D9488" />
            <Text style={styles.locationText}>Cuzco, Perú</Text>
          </View>

          <Text style={styles.title}>Machu Picchu</Text>

          <Text style={styles.description}>
            Antigua ciudad inca ubicada en las alturas de las montañas de los Andes. Es considerada 
            una de las Nuevas Siete Maravillas del Mundo Moderno y destaca por su impresionante 
            arquitectura en piedra e historia fascinante.
          </Text>

          <View style={styles.infoRow}>
            <View style={styles.infoBox}>
              <MaterialIcons name="wb-sunny" size={22} color="#0D9488" />
              <Text style={styles.infoLabel}>Clima</Text>
              <Text style={styles.infoValue}>18 °C</Text>
            </View>

            <View style={styles.infoBox}>
              <MaterialIcons name="access-time" size={22} color="#0D9488" />
              <Text style={styles.infoLabel}>Horario</Text>
              <Text style={styles.infoValue}>6:00 - 17:30</Text>
            </View>

            <View style={styles.infoBox}>
              <MaterialIcons name="attach-money" size={22} color="#0D9488" />
              <Text style={styles.infoLabel}>Ingreso</Text>
              <Text style={styles.infoValue}>$160.000 COP</Text>
            </View>
          </View>

          <TouchableOpacity style={styles.button}>
            <MaterialIcons name="explore" size={20} color="#FFF" />
            <Text style={styles.buttonText}>Explorar Destino</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0FDFA',
  },
  content: {
    paddingVertical: 30,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  card: {
    width: '100%',
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    overflow: 'hidden',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 6,
  },
  image: {
    width: '100%',
    height: 250,
  },
  infoContainer: {
    padding: 20,
  },
  locationBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    marginBottom: 6,
  },
  locationText: {
    fontSize: 14,
    fontWeight: '700',
    color: '#0D9488',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: 10,
  },
  description: {
    fontSize: 14,
    color: '#4B5563',
    lineHeight: 22,
    marginBottom: 20,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#F0FDFA',
    borderRadius: 12,
    padding: 14,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#CCFBF1',
  },
  infoBox: {
    alignItems: 'center',
    flex: 1,
  },
  infoLabel: {
    fontSize: 12,
    color: '#6B7280',
    marginTop: 4,
    marginBottom: 2,
  },
  infoValue: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#111827',
  },
  button: {
    flexDirection: 'row',
    backgroundColor: '#0D9488',
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});