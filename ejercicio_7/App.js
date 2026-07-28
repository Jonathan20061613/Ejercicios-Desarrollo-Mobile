import React from 'react';
import { ScrollView, View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function App() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <View style={styles.card}>
        <Image
          source={{ uri: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=600' }}
          style={styles.productImage}
          resizeMode="cover"
        />

        <View style={styles.infoContainer}>
          <Text style={styles.category}>AUDIO / AUDÍFONOS</Text>
          <Text style={styles.productName}>Audífonos Inalámbricos Premium</Text>
          <Text style={styles.price}>$299.900 COP</Text>

          <Text style={styles.description}>
            Disfruta de una calidad de sonido excepcional con cancelación activa de ruido, 
            diseño ergonómico y hasta 30 horas de reproducción continua para tus jornadas de trabajo o estudio.
          </Text>

          <View style={styles.featuresRow}>
            <View style={styles.featureBox}>
              <Text style={styles.featureLabel}>Marca</Text>
              <Text style={styles.featureValue}>Sony</Text>
            </View>

            <View style={styles.featureBox}>
              <Text style={styles.featureLabel}>Color</Text>
              <Text style={styles.featureValue}>Negro</Text>
            </View>

            <View style={styles.featureBox}>
              <Text style={styles.featureLabel}>Estado</Text>
              <Text style={[styles.featureValue, styles.stockText]}>En Stock</Text>
            </View>
          </View>

          <TouchableOpacity style={styles.button}>
            <MaterialIcons name="shopping-cart" size={20} color="#FFF" />
            <Text style={styles.buttonText}>Añadir al Carrito</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F4F6',
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
  productImage: {
    width: '100%',
    height: 250,
  },
  infoContainer: {
    padding: 20,
  },
  category: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#0284C7',
    letterSpacing: 1,
    marginBottom: 4,
  },
  productName: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#1E293B',
    marginBottom: 8,
  },
  price: {
    fontSize: 24,
    fontWeight: '800',
    color: '#16A34A',
    marginBottom: 12,
  },
  description: {
    fontSize: 14,
    color: '#64748B',
    lineHeight: 20,
    marginBottom: 20,
  },
  featuresRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#F8FAFC',
    borderRadius: 12,
    padding: 12,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  featureBox: {
    alignItems: 'center',
    flex: 1,
  },
  featureLabel: {
    fontSize: 12,
    color: '#94A3B8',
    marginBottom: 4,
  },
  featureValue: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#334155',
  },
  stockText: {
    color: '#16A34A',
  },
  button: {
    flexDirection: 'row',
    backgroundColor: '#0284C7',
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