import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { 
  StyleSheet, 
  Text, 
  View, 
  Pressable, 
  Alert, 
  ScrollView, 
  SafeAreaView 
} from 'react-native';

export default function App() {
  const [esFullStack, setEsFullStack] = useState(false);

  const rolActual = esFullStack 
    ? "Desarrollador Web Full-Stack" 
    : "Estudiante de Software en el SENA";

  const habilidades = esFullStack
    ? ["React / React Native", "Node.js", "TypeScript", "SQL & NoSQL", "Git / GitHub", "REST APIs"]
    : ["Python", "C++", "Estructura de Datos", "HTML5 & CSS3", "JavaScript ES6", "Git"];

  const alternarRol = () => {
    setEsFullStack(prev => !prev);
  };

  const mostrarContacto = () => {
    Alert.alert(
      "Información de Contacto",
      "Email: andressguilera2006@gmail.com\nTeléfono: +57 314 7656474\nUbicación: Colombia",
      [
        { text: "Cerrar", style: "cancel" }
      ]
    );
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar style="light" />
      <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>
        
        <View style={styles.cardHeader}>
          <View style={styles.avatarContainer}>
            <Text style={styles.avatarText}>JJ</Text>
          </View>
          
          <Text style={styles.nombre}>Jonathan Jiménez</Text>
          
          <Pressable onPress={alternarRol} style={styles.badgeRol}>
            <Text style={styles.textoBadgeRol}>{rolActual}</Text>
            <Text style={styles.iconoToggle}/>
          </Pressable>

          <Text style={styles.descripcion}>
            Apasionado por la tecnología y la arquitectura de software. Enfocado en transformar ideas en soluciones funcionales, escalables y eficientes con estándares de alta calidad.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Habilidades Clave</Text>
          <View style={styles.skillsContainer}>
            {habilidades.map((skill, index) => (
              <View key={index} style={styles.skillBadge}>
                <Text style={styles.skillText}>{skill}</Text>
              </View>
            ))}
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Educación & Formación</Text>

          <View style={styles.itemEducacion}>
            <View style={styles.dot} />
            <View style={styles.infoEducacion}>
              <Text style={styles.tituloEstudio}>Análisis y Desarrollo de Software</Text>
              <Text style={styles.institucion}>SENA</Text>
            </View>
          </View>
        </View>

        <View style={styles.botonera}>
          <Pressable
            style={({ pressed }) => [
              styles.boton,
              styles.botonPrimario,
              pressed && styles.botonPresionado
            ]}
            onPress={alternarRol}
          >
            <Text style={styles.textoBotonPrimario}>Alternar Perfil Profesional</Text>
          </Pressable>

          <Pressable
            style={({ pressed }) => [
              styles.boton,
              styles.botonSecundario,
              pressed && styles.botonPresionado
            ]}
            onPress={mostrarContacto}
          >
            <Text style={styles.textoBotonSecundario}>Contactar</Text>
          </Pressable>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#0F172A',
  },
  scrollContainer: {
    paddingHorizontal: 20,
    paddingVertical: 30,
    alignItems: 'center',
  },
  cardHeader: {
    backgroundColor: '#1E293B',
    width: '100%',
    borderRadius: 20,
    padding: 24,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#334155',
    marginBottom: 20,
  },
  avatarContainer: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#312E81',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#6366F1',
    marginBottom: 14,
  },
  avatarText: {
    fontSize: 28,
    fontWeight: '700',
    color: '#EEF2FF',
  },
  nombre: {
    fontSize: 24,
    fontWeight: '700',
    color: '#F8FAFC',
    marginBottom: 8,
  },
  badgeRol: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(99, 102, 241, 0.15)',
    paddingVertical: 6,
    paddingHorizontal: 14,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'rgba(99, 102, 241, 0.4)',
    marginBottom: 16,
    gap: 6,
  },
  textoBadgeRol: {
    color: '#818CF8',
    fontSize: 13,
    fontWeight: '600',
  },
  iconoToggle: {
    fontSize: 12,
  },
  descripcion: {
    fontSize: 14,
    color: '#94A3B8',
    textAlign: 'center',
    lineHeight: 22,
  },
  section: {
    backgroundColor: '#1E293B',
    width: '100%',
    borderRadius: 16,
    padding: 20,
    borderWidth: 1,
    borderColor: '#334155',
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#F8FAFC',
    marginBottom: 14,
    textTransform: 'uppercase',
    letterSpacing: 0.8,
  },
  skillsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  skillBadge: {
    backgroundColor: '#334155',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 8,
  },
  skillText: {
    color: '#E2E8F0',
    fontSize: 13,
    fontWeight: '500',
  },
  itemEducacion: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 12,
    gap: 12,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#6366F1',
    marginTop: 6,
  },
  infoEducacion: {
    flex: 1,
  },
  tituloEstudio: {
    color: '#F1F5F9',
    fontSize: 14,
    fontWeight: '600',
  },
  institucion: {
    color: '#64748B',
    fontSize: 12,
    marginTop: 2,
  },
  botonera: {
    width: '100%',
    gap: 12,
    marginTop: 10,
  },
  boton: {
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  botonPrimario: {
    backgroundColor: '#4F46E5',
  },
  botonSecundario: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: '#475569',
  },
  botonPresionado: {
    opacity: 0.75,
    transform: [{ scale: 0.99 }],
  },
  textoBotonPrimario: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '600',
  },
  textoBotonSecundario: {
    color: '#CBD5E1',
    fontSize: 15,
    fontWeight: '600',
  },
});