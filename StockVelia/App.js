import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  SafeAreaView,
  Pressable,
  Alert,
  Image 
} from 'react-native';

export default function App() {
  const [activeTab, setActiveTab] = useState('productos');

  const features = {
    productos: {
      title: "Control de Productos y Stock",
      description: "Gestiona códigos de barras, precios de compra/venta, categorías avanzadas y estados activos/inactivos.",
      badge: "Inventario Base"
    },
    almacenes: {
      title: "Múltiples Almacenes y Bodegas",
      description: "Monitorea la capacidad de ocupación física desde niveles óptimos hasta alertas críticas.",
      badge: "Logística"
    },
    abc: {
      title: "Clasificación ABC (Pareto)",
      description: "Organiza automáticamente tus artículos en Clase A, B y C para evitar capital estancado.",
      badge: "Inteligencia Comercial"
    }
  };

  const handleContacto = () => {
    Alert.alert(
      "StockVelia Mobile",
      "Sistema de gestión de inventario para microempresas.\n\nSoporte: soporte@stockvelia.com",
      [{ text: "Entendido", style: "default" }]
    );
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar style="dark" />
      <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
        
        <View style={styles.navbar}>
          <View style={styles.brandContainer}>
            <Image source={require('./assets/image.png')} style={styles.brandLogoImage} />
            <Text style={styles.brandName}>StockVelia</Text>
          </View>

          <View style={styles.statusBadgeHeader}>
            <View style={styles.statusDot} />
            <Text style={styles.statusTextHeader}>En Línea</Text>
          </View>
        </View>

        {/* ========================================================
            REQUISITO 1: MENSAJE DE BIENVENIDA INSTITUCIONAL
           ======================================================== */}
        <View style={styles.heroCard}>
          <Text style={styles.heroBadge}>🔮 Sistema de Gestión para Microempresas</Text>
          <Text style={styles.welcomeTitle}>
            Bienvenido a <Text style={styles.highlightText}>StockVelia</Text>
          </Text>
          <Text style={styles.welcomeDescription}>
            Nos alegra darte la bienvenida al portal institucional de StockVelia. Nuestra plataforma está diseñada para acompañar el crecimiento de tu microempresa mediante el control inteligente y eficiente de tus recursos.
          </Text>
        </View>

        {/* ========================================================
            REQUISITO 2: CONTENEDOR QUE MUESTRA EL ESTADO DE LA APP
           ======================================================== */}
        <View style={styles.sectionCard}>
          <Text style={styles.sectionHeaderTitle}>Estado del Sistema</Text>
          <Text style={styles.sectionSubtext}>Monitoreo operativo en tiempo real:</Text>

          <View style={styles.metricsGrid}>
            <View style={styles.metricBox}>
              <Text style={styles.metricTitle}>Estado del Servidor</Text>
              <Text style={styles.metricValue}>Operativo (100%)</Text>
            </View>

            <View style={styles.metricBox}>
              <Text style={styles.metricTitle}>Base de Datos</Text>
              <Text style={styles.metricValue}>Sincronizada</Text>
            </View>

            <View style={styles.metricBox}>
              <Text style={styles.metricTitle}>Total Productos</Text>
              <Text style={styles.metricValue}>124 Registrados</Text>
            </View>

            <View style={[styles.metricBox, styles.metricAlert]}>
              <Text style={styles.metricTitle}>Alertas de Inventario</Text>
              <Text style={styles.metricValueAlert}>4 Stock Mínimo</Text>
            </View>
          </View>
        </View>

        {/* ========================================================
            REQUISITO 3: DESCRIPCIÓN DE QUÉ HACE LA APLICACIÓN
           ======================================================== */}
        <View style={styles.sectionCard}>
          <Text style={styles.sectionHeaderTitle}>¿Qué hace StockVelia?</Text>
          <Text style={styles.appPurposeText}>
            StockVelia es una solución integral de software orientada a la gestión y optimización de inventarios. Permite a las empresas centralizar la trazabilidad de sus productos, administrar la capacidad de múltiples bodegas y tomar decisiones estratégicas mediante análisis de datos.
          </Text>

          <Text style={styles.subSectionTitle}>Explora sus funciones principales:</Text>

          <View style={styles.tabsContainer}>
            {Object.keys(features).map((key) => (
              <Pressable
                key={key}
                style={[
                  styles.tabButton,
                  activeTab === key && styles.tabButtonActive
                ]}
                onPress={() => setActiveTab(key)}
              >
                <Text
                  style={[
                    styles.tabButtonText,
                    activeTab === key && styles.tabButtonTextActive
                  ]}
                >
                  {key.toUpperCase()}
                </Text>
              </Pressable>
            ))}
          </View>

          <View style={styles.activeFeatureCard}>
            <View style={styles.featureBadgeContainer}>
              <Text style={styles.featureBadgeText}>{features[activeTab].badge}</Text>
            </View>
            <Text style={styles.featureTitle}>{features[activeTab].title}</Text>
            <Text style={styles.featureDescription}>{features[activeTab].description}</Text>
          </View>
        </View>

        <View style={styles.actionsContainer}>
          <Pressable
            style={({ pressed }) => [
              styles.primaryButton,
              pressed && styles.buttonPressed
            ]}
            onPress={handleContacto}
          >
            <Text style={styles.primaryButtonText}>Explorar App / Contacto</Text>
          </Pressable>
        </View>

        <View style={styles.footer}>
          <Text style={styles.footerText}>© {new Date().getFullYear()} StockVelia. Todos los derechos reservados.</Text>
          <Text style={styles.footerSubtext}>Proyecto Formativo SENA - ADSO</Text>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  container: {
    paddingHorizontal: 18,
    paddingVertical: 24,
  },
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    backgroundColor: '#F8F5FC',
    padding: 14,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: '#E9DDF7',
  },
  brandContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  brandLogoImage: {
    width: 36,
    height: 36,
    resizeMode: 'contain',
  },
  brandName: {
    color: '#1A0B2E',
    fontSize: 20,
    fontWeight: '800',
    letterSpacing: -0.5,
  },
  statusBadgeHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F3E8FD',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#E1BAFD',
    gap: 6,
  },
  statusDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#5E059D',
  },
  statusTextHeader: {
    color: '#5E059D',
    fontSize: 11,
    fontWeight: '700',
  },
  heroCard: {
    backgroundColor: '#1A0B2E',
    borderRadius: 20,
    padding: 22,
    marginBottom: 18,
  },
  heroBadge: {
    color: '#BA61FA',
    fontSize: 12,
    fontWeight: '700',
    marginBottom: 10,
  },
  welcomeTitle: {
    fontSize: 24,
    fontWeight: '800',
    color: '#FFFFFF',
    marginBottom: 10,
  },
  highlightText: {
    color: '#BA61FA',
  },
  welcomeDescription: {
    fontSize: 14,
    color: '#E1BAFD',
    lineHeight: 22,
    opacity: 0.9,
  },
  sectionCard: {
    backgroundColor: '#F8F5FC',
    borderRadius: 20,
    padding: 20,
    borderWidth: 1,
    borderColor: '#E9DDF7',
    marginBottom: 18,
  },
  sectionHeaderTitle: {
    fontSize: 15,
    fontWeight: '800',
    color: '#1A0B2E',
    marginBottom: 8,
    textTransform: 'uppercase',
    letterSpacing: 0.8,
  },
  sectionSubtext: {
    fontSize: 13,
    color: '#5E059D',
    opacity: 0.8,
    marginBottom: 14,
  },
  appPurposeText: {
    fontSize: 14,
    color: '#333333',
    lineHeight: 21,
    marginBottom: 16,
  },
  subSectionTitle: {
    fontSize: 13,
    fontWeight: '700',
    color: '#1A0B2E',
    marginBottom: 10,
  },
  metricsGrid: {
    gap: 10,
  },
  metricBox: {
    backgroundColor: '#FFFFFF',
    padding: 14,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: '#E9DDF7',
  },
  metricAlert: {
    borderColor: '#FFD1D1',
    backgroundColor: '#FFF5F5',
  },
  metricTitle: {
    fontSize: 12,
    color: '#666666',
    marginBottom: 4,
  },
  metricValue: {
    fontSize: 15,
    fontWeight: '800',
    color: '#5E059D',
  },
  metricValueAlert: {
    fontSize: 15,
    fontWeight: '800',
    color: '#D92D20',
  },
  tabsContainer: {
    flexDirection: 'row',
    gap: 8,
    marginBottom: 14,
  },
  tabButton: {
    flex: 1,
    paddingVertical: 10,
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E9DDF7',
  },
  tabButtonActive: {
    backgroundColor: '#5E059D',
    borderColor: '#5E059D',
  },
  tabButtonText: {
    fontSize: 11,
    color: '#5E059D',
    fontWeight: '700',
  },
  tabButtonTextActive: {
    color: '#FFFFFF',
    fontWeight: '800',
  },
  activeFeatureCard: {
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: '#E9DDF7',
  },
  featureBadgeContainer: {
    alignSelf: 'flex-start',
    backgroundColor: '#F3E8FD',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 6,
    marginBottom: 10,
  },
  featureBadgeText: {
    color: '#5E059D',
    fontSize: 11,
    fontWeight: '800',
  },
  featureTitle: {
    fontSize: 15,
    fontWeight: '800',
    color: '#1A0B2E',
    marginBottom: 6,
  },
  featureDescription: {
    fontSize: 13,
    color: '#4A4A4A',
    lineHeight: 20,
  },
  actionsContainer: {
    marginBottom: 20,
  },
  primaryButton: {
    backgroundColor: '#5E059D',
    paddingVertical: 16,
    borderRadius: 14,
    alignItems: 'center',
    elevation: 3,
  },
  buttonPressed: {
    backgroundColor: '#4A047B',
  },
  primaryButtonText: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '800',
  },
  footer: {
    alignItems: 'center',
    paddingVertical: 10,
  },
  footerText: {
    fontSize: 12,
    color: '#888888',
  },
  footerSubtext: {
    fontSize: 11,
    color: '#5E059D',
    marginTop: 4,
    fontWeight: '700',
  },
});