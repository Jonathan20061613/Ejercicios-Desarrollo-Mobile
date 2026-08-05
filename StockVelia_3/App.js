import React from 'react';
import { StyleSheet, View, ScrollView, SafeAreaView, Alert, Image } from 'react-native';
import { 
  PaperProvider, 
  MD3LightTheme, 
  Appbar, 
  Card, 
  Text, 
  Button, 
  FAB
} from 'react-native-paper';

const theme = {
  ...MD3LightTheme,
  colors: {
    ...MD3LightTheme.colors,
    primary: '#6818A5',
    secondary: '#D283FF',
    background: '#F6F2FB',
    surface: '#FFFFFF',
    text: '#1A0B2E',
  },
};

const SERVICIOS_LANDING = [
  {
    id: '1',
    nombre: 'Control Total de Productos & Stock',
    descripcion: 'Centraliza existencias, códigos de barras y alertas dinámicas de inventario mínimo en tiempo real.',
    categoria: 'Módulo Principal',
    destacado: 'Gestión Inteligente',
    imagen: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=400&auto=format&fit=crop',
  },
  {
    id: '2',
    nombre: 'Gestión Multibodega & Almacenes',
    descripcion: 'Supervisa la capacidad física de ocupación y transferencias entre bodegas o locales comerciales.',
    categoria: 'Logística',
    destacado: 'Multi-Almacén',
    imagen: 'https://images.unsplash.com/photo-1553413077-190dd305871c?q=80&w=400&auto=format&fit=crop',
  },
  {
    id: '3',
    nombre: 'Clasificación Inteligente ABC (Pareto)',
    descripcion: 'Algoritmo que prioriza tus productos estrella para optimizar tus compras y liquidez.',
    categoria: 'Inteligencia Comercial',
    destacado: 'Análisis Pro',
    imagen: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=400&auto=format&fit=crop',
  },
  {
    id: '4',
    nombre: 'Auditoría & Conciliación de Mercancía',
    descripcion: 'Servicio técnico especializado para parametrización inicial, codificación y conteos físicos.',
    categoria: 'Servicios Profesionales',
    destacado: 'Acompañamiento',
    imagen: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=400&auto=format&fit=crop',
  },
];

export default function App() {
  const handleMenuPress = () => {
    Alert.alert('StockVelia', 'Plataforma de Gestión de Inventario para Microempresas.');
  };

  const handleVerDetalles = (nombre) => {
    Alert.alert('Detalles del Servicio', `Información detallada sobre: ${nombre}`);
  };

  const handleAgregarNuevo = () => {
    Alert.alert('Nuevo Registro', 'Formulario para agregar un nuevo producto o servicio al sistema.');
  };

  return (
    <PaperProvider theme={theme}>
      <SafeAreaView style={styles.safeArea}>
        
        <Appbar.Header style={styles.header}>
          <Appbar.Content 
            title={
              <View style={styles.logoHeaderContainer}>
                <Image 
                  source={require('./assets/image.png')} 
                  style={styles.headerLogo} 
                />
                <View>
                  <Text style={styles.headerTitle}>StockVelia</Text>
                  <Text style={styles.headerSubtitle}>Software & Soluciones Logísticas</Text>
                </View>
              </View>
            }
          />
          <Appbar.Action icon="menu" color="#FFFFFF" onPress={handleMenuPress} />
        </Appbar.Header>

        <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>
          
          <View style={styles.heroCard}>
            <View style={styles.heroBadge}>
              <View style={styles.dotOnline} />
              <Text style={styles.heroBadgeText}>SISTEMA EN LÍNEA</Text>
            </View>

            <Text style={styles.heroTitle}>
              El control inteligente que tu microempresa <Text style={styles.heroHighlight}>necesita</Text>
            </Text>

            <Text style={styles.heroDescription}>
              Transformamos la gestión de tus recursos. Centraliza stock, automatiza análisis de demanda y evita pérdidas por capital estancado.
            </Text>

            <View style={styles.heroStatsContainer}>
              <View style={styles.statBox}>
                <Text style={styles.statNumber}>100%</Text>
                <Text style={styles.statLabel}>Cloud Ready</Text>
              </View>
              <View style={styles.statDivider} />
              <View style={styles.statBox}>
                <Text style={styles.statNumber}>ABC</Text>
                <Text style={styles.statLabel}>Algoritmo Pareto</Text>
              </View>
              <View style={styles.statDivider} />
              <View style={styles.statBox}>
                <Text style={styles.statNumber}>24/7</Text>
                <Text style={styles.statLabel}>Trazabilidad</Text>
              </View>
            </View>
          </View>

          <View style={styles.sectionHeader}>
            <Text style={styles.seccionTitle}>Soluciones & Servicios</Text>
            <Text style={styles.seccionSubtext}>Explora los módulos diseñados para optimizar tu negocio</Text>
          </View>

          {SERVICIOS_LANDING.map((item) => (
            <Card key={item.id} style={styles.card} mode="elevated">
              <View style={styles.imageContainer}>
                <Card.Cover source={{ uri: item.imagen }} style={styles.cardImage} />
                <View style={styles.overlayTag}>
                  <Text style={styles.overlayTagText}>{item.destacado}</Text>
                </View>
              </View>
              
              <Card.Content style={styles.cardContent}>
                <View style={styles.badgeCategoria}>
                  <Text style={styles.badgeCategoriaText}>{item.categoria}</Text>
                </View>

                <Text style={styles.cardTitulo}>{item.nombre}</Text>
                <Text style={styles.cardDescripcion}>{item.descripcion}</Text>
              </Card.Content>

              <Card.Actions style={styles.cardActions}>
                <Button 
                  mode="contained" 
                  buttonColor={theme.colors.primary}
                  textColor="#FFFFFF"
                  style={styles.btnDetalles}
                  contentStyle={styles.btnDetallesContent}
                  onPress={() => handleVerDetalles(item.nombre)}
                >
                  Ver Detalles
                </Button>
              </Card.Actions>
            </Card>
          ))}

          <View style={styles.footer}>
            <Text style={styles.footerBrand}>StockVelia</Text>
            <Text style={styles.footerText}>© {new Date().getFullYear()} Todos los derechos reservados.</Text>
            <Text style={styles.footerSubtext}>Proyecto Formativo SENA - ADSO</Text>
          </View>

        </ScrollView>

        <FAB
          icon="plus"
          style={styles.fab}
          color="#FFFFFF"
          label="Nuevo Servicio"
          onPress={handleAgregarNuevo}
        />

      </SafeAreaView>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F6F2FB',
  },
  header: {
    backgroundColor: '#6818A5',
    elevation: 4,
    height: 70,
  },
  logoHeaderContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  headerLogo: {
    width: 38,
    height: 38,
    resizeMode: 'contain',
  },
  headerTitle: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 21,
    lineHeight: 23,
    letterSpacing: -0.3,
  },
  headerSubtitle: {
    color: '#D283FF',
    fontSize: 11,
    fontWeight: '600',
  },
  scrollContainer: {
    padding: 16,
    paddingBottom: 90,
  },
  heroCard: {
    backgroundColor: '#1A0B2E',
    borderRadius: 24,
    padding: 22,
    marginBottom: 24,
    shadowColor: '#6818A5',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 6,
  },
  heroBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    backgroundColor: 'rgba(210, 131, 255, 0.15)',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 12,
    gap: 6,
    marginBottom: 12,
  },
  dotOnline: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#D283FF',
  },
  heroBadgeText: {
    color: '#D283FF',
    fontSize: 10,
    fontWeight: '800',
    letterSpacing: 0.8,
  },
  heroTitle: {
    fontSize: 23,
    fontWeight: '800',
    color: '#FFFFFF',
    lineHeight: 30,
    marginBottom: 10,
  },
  heroHighlight: {
    color: '#D283FF',
  },
  heroDescription: {
    fontSize: 13,
    color: '#E3D2FD',
    lineHeight: 20,
    opacity: 0.9,
    marginBottom: 18,
  },
  heroStatsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.06)',
    borderRadius: 16,
    padding: 12,
  },
  statBox: {
    flex: 1,
    alignItems: 'center',
  },
  statNumber: {
    color: '#D283FF',
    fontSize: 16,
    fontWeight: '800',
  },
  statLabel: {
    color: '#FFFFFF',
    fontSize: 10,
    marginTop: 2,
    opacity: 0.8,
  },
  statDivider: {
    width: 1,
    height: 24,
    backgroundColor: 'rgba(210, 131, 255, 0.2)',
  },
  sectionHeader: {
    marginBottom: 16,
  },
  seccionTitle: {
    fontSize: 20,
    fontWeight: '800',
    color: '#1A0B2E',
    letterSpacing: -0.3,
  },
  seccionSubtext: {
    fontSize: 12,
    color: '#6818A5',
    marginTop: 2,
    fontWeight: '500',
  },
  card: {
    marginBottom: 22,
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#EFE6F8',
  },
  imageContainer: {
    position: 'relative',
  },
  cardImage: {
    height: 180,
  },
  overlayTag: {
    position: 'absolute',
    top: 12,
    right: 12,
    backgroundColor: '#6818A5',
    paddingHorizontal: 12,
    paddingVertical: 5,
    borderRadius: 10,
  },
  overlayTagText: {
    color: '#FFFFFF',
    fontSize: 10,
    fontWeight: '800',
  },
  cardContent: {
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 8,
  },
  badgeCategoria: {
    alignSelf: 'flex-start',
    backgroundColor: '#F3E8FD',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 8,
    marginBottom: 10,
  },
  badgeCategoriaText: {
    color: '#6818A5',
    fontSize: 12,
    fontWeight: '700',
    lineHeight: 15,
  },
  cardTitulo: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1A0B2E',
    marginBottom: 6,
    lineHeight: 24,
  },
  cardDescripcion: {
    fontSize: 13,
    color: '#555555',
    lineHeight: 20,
  },
  cardActions: {
    paddingHorizontal: 16,
    paddingBottom: 16,
    paddingTop: 8,
  },
  btnDetalles: {
    borderRadius: 12,
    width: '100%',
  },
  btnDetallesContent: {
    paddingVertical: 4,
  },
  footer: {
    alignItems: 'center',
    marginTop: 10,
    paddingVertical: 16,
  },
  footerBrand: {
    fontSize: 16,
    fontWeight: '800',
    color: '#6818A5',
  },
  footerText: {
    fontSize: 11,
    color: '#888888',
    marginTop: 2,
  },
  footerSubtext: {
    fontSize: 10,
    color: '#6818A5',
    marginTop: 4,
    fontWeight: '700',
  },
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
    backgroundColor: '#6818A5',
    borderRadius: 16,
  },
});