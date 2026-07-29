import React from 'react';
import { ScrollView, View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const products = [
  {
    id: '1',
    category: 'AUDIO / AUDÍFONOS',
    name: 'Audífonos Inalámbricos Premium',
    price: '$299.900 COP',
    description: 'Disfruta de una calidad de sonido excepcional con cancelación activa de ruido, diseño ergonómico y hasta 30 horas de batería.',
    image: 'https://sony.scene7.com/is/image/sonyglobalsolutions/WH1000XM6_Primary_image_Black?$categorypdpnav$&fmt=png-alpha',
    brand: 'Sony',
    color: 'Negro',
    stock: 'En Stock',
  },
  {
    id: '2',
    category: 'WEARABLES / RELOJES',
    name: 'Smartwatch Deportivo Pro',
    price: '$450.000 COP',
    description: 'Monitorea tu ritmo cardíaco, seguimiento GPS preciso en tiempo real y resistencia al agua hasta 50 metros de profundidad.',
    image: 'https://garminb2cco.vtexassets.com/arquivos/ids/161290/FENIX-7S-PRO_SAPH-SOLAR-CARBON-GREY-S.AM.png?v=638226298874870000',
    brand: 'Garmin',
    color: 'Gris',
    stock: 'En Stock',
  },
  {
    id: '3',
    category: 'COMPUTACIÓN / TECLADOS',
    name: 'Teclado Mecánico RGB',
    price: '$180.000 COP',
    description: 'Switches táctiles silenciosos, retroiluminación RGB personalizable por tecla y estructura de aluminio de alta durabilidad.',
    image: 'https://tauretcomputadores.com/images/products/Product_202408261145371740854796.perfil%20negro.webp',
    brand: 'Logitech',
    color: 'Blanco',
    stock: 'Pocas Unidades',
  },
];

function ProductCard({ item }) {
  return (
    <View style={styles.card}>
      <Image
        source={{ uri: item.image }}
        style={styles.productImage}
        resizeMode="contain"
      />

      <View style={styles.infoContainer}>
        <Text style={styles.category}>{item.category}</Text>
        <Text style={styles.productName}>{item.name}</Text>
        <Text style={styles.price}>{item.price}</Text>

        <Text style={styles.description}>{item.description}</Text>

        <View style={styles.featuresRow}>
          <View style={styles.featureBox}>
            <Text style={styles.featureLabel}>Marca</Text>
            <Text style={styles.featureValue}>{item.brand}</Text>
          </View>

          <View style={styles.featureBox}>
            <Text style={styles.featureLabel}>Color</Text>
            <Text style={styles.featureValue}>{item.color}</Text>
          </View>

          <View style={styles.featureBox}>
            <Text style={styles.featureLabel}>Disponibilidad</Text>
            <Text style={[styles.featureValue, styles.stockText]}>{item.stock}</Text>
          </View>
        </View>

        <TouchableOpacity style={styles.button} activeOpacity={0.8}>
          <MaterialIcons name="shopping-cart" size={20} color="#FFF" />
          <Text style={styles.buttonText}>Añadir al Carrito</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default function App() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.headerTitle}>Tienda Virtual</Text>
      
      {products.map((product) => (
        <ProductCard key={product.id} item={product} />
      ))}
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
    gap: 24,
  },
  headerTitle: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#0F172A',
    alignSelf: 'flex-start',
    marginBottom: 4,
  },
  card: {
    width: '100%',
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    overflow: 'hidden',
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
  },
  productImage: {
    width: '100%',
    height: 220,
    backgroundColor: '#FAFAFA',
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
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1E293B',
    marginBottom: 6,
  },
  price: {
    fontSize: 22,
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
    fontSize: 13,
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
    fontSize: 15,
    fontWeight: 'bold',
  },
});