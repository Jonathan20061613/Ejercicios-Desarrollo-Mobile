import React, { useState } from 'react';
import { SafeAreaView, View, StyleSheet } from 'react-native';
import { PaperProvider, MD3LightTheme, ProgressBar, Text, FAB } from 'react-native-paper';
import HeaderDashboard from './components/HeaderDashboard';
import ActividadCard from './components/ActividadCard';


const theme = {
  ...MD3LightTheme,
  colors: {
    ...MD3LightTheme.colors,
    primary: '#0B2545',     
    secondary: '#134074',   
    tertiary: '#0077B6',    
    background: '#EEF4F8',  
    surface: '#FFFFFF',     
    text: '#0B2545',        
  },
};

export default function App() {
  const [competencia, setCompetencia] = useState("Competencia 1");
  const [progreso, setProgreso] = useState(0);

  const entregarActividad = () => {
    if (progreso < 1) {
      setProgreso(Math.min(progreso + 0.33, 1));
    }
  };

  return (
    <PaperProvider theme={theme}>
      <SafeAreaView style={{ flex: 1, backgroundColor: theme.colors.background }}>
        <HeaderDashboard
          aprendiz="Jonathan Jimenez"
          competencia={competencia}
          setCompetencia={setCompetencia}
        />
        
        <View style={{ padding: 15, flex: 1 }}>
          <ActividadCard
            titulo="Actividad 1"
            descripcion="Crear interfaz"
            fecha="10/08/2026"
            estado="Pendiente"
          />
          <ActividadCard
            titulo="Actividad 2"
            descripcion="Crear componentes"
            fecha="15/08/2026"
            estado="Pendiente"
          />
          <ActividadCard
            titulo="Actividad 3"
            descripcion="Integración de lógica"
            fecha="20/08/2026"
            estado="Pendiente"
          />

          <View style={{ marginTop: 10 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 6 }}>
              <Text style={{ fontWeight: 'bold', color: theme.colors.primary }}>
                Progreso de Competencia
              </Text>
              <Text style={{ fontWeight: 'bold', color: theme.colors.tertiary }}>
                {Math.round(progreso * 100)}%
              </Text>
            </View>
            <ProgressBar 
              progress={progreso} 
              color={theme.colors.tertiary} 
              style={{ height: 10, borderRadius: 5, backgroundColor: '#D0E1F9' }} 
            />
          </View>
        </View>

        <FAB
          icon="plus"
          label="Entregar Actividad"
          color="#FFFFFF"
          style={[styles.fab, { backgroundColor: theme.colors.primary }]}
          onPress={entregarActividad}
        />
      </SafeAreaView>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
    borderRadius: 16,
  },
});