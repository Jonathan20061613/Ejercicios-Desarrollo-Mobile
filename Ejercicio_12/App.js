import React, { useState } from 'react';
import { SafeAreaView, ScrollView, View, StyleSheet } from 'react-native';
import { PaperProvider, MD3LightTheme, ProgressBar, Text, Button } from 'react-native-paper';
import HeaderPanel from './components/HeaderPanel';
import EvidenciaCard from './components/EvidenciaCard';

const theme = {
  ...MD3LightTheme,
  colors: {
    ...MD3LightTheme.colors,
    primary: '#0F2C59',
    secondary: '#00A8E8',
    background: '#F0F4F8',
    surface: '#FFFFFF',
    text: '#0B132B',
  },
};

const DATOS_EVIDENCIAS = {
  "RAP 1": [
    { id: 1, nombre: "1. Cuestionario de Bases de Datos", tipo: "Conocimiento", fecha: "05/08/2026", estado: "Aprobada" },
    { id: 2, nombre: "2. Modelo Entidad Relación", tipo: "Desempeño", fecha: "10/08/2026", estado: "Pendiente" },
    { id: 3, nombre: "3. Script de Creación de Tablas SQL", tipo: "Producto", fecha: "15/08/2026", estado: "Pendiente" },
    { id: 4, nombre: "4. Consultas Avanzadas y Joins", tipo: "Producto", fecha: "20/08/2026", estado: "Pendiente" },
    { id: 5, nombre: "5. Sustentación de la BD", tipo: "Desempeño", fecha: "25/08/2026", estado: "Pendiente" },
  ],
  "RAP 2": [
    { id: 1, nombre: "1. Taller de Maquetación Flexbox", tipo: "Conocimiento", fecha: "02/09/2026", estado: "Aprobada" },
    { id: 2, nombre: "2. Componentes Reutilizables", tipo: "Desempeño", fecha: "08/09/2026", estado: "Aprobada" },
    { id: 3, nombre: "3. Navegación con React Navigation", tipo: "Producto", fecha: "14/09/2026", estado: "En revisión" },
    { id: 4, nombre: "4. Consumo de API REST", tipo: "Producto", fecha: "20/09/2026", estado: "Pendiente" },
    { id: 5, nombre: "5. Prueba de Usabilidad App", tipo: "Desempeño", fecha: "26/09/2026", estado: "Pendiente" },
  ],
  "RAP 3": [
    { id: 1, nombre: "1. Arquitectura de Servidor Node.js", tipo: "Conocimiento", fecha: "01/10/2026", estado: "Aprobada" },
    { id: 2, nombre: "2. Endpoints CRUD y Middleware", tipo: "Desempeño", fecha: "07/10/2026", estado: "Aprobada" },
    { id: 3, nombre: "3. Autenticación con JWT", tipo: "Producto", fecha: "13/10/2026", estado: "Aprobada" },
    { id: 4, nombre: "4. Despliegue en la Nube", tipo: "Producto", fecha: "19/10/2026", estado: "Aprobada" },
    { id: 5, nombre: "5. Documentación Swagger", tipo: "Producto", fecha: "25/10/2026", estado: "Pendiente" },
  ],
};

export default function App() {
  const [resultado, setResultado] = useState("RAP 1");
  const [evidenciasPorRap, setEvidenciasPorRap] = useState(DATOS_EVIDENCIAS);

  const evidenciasActuales = evidenciasPorRap[resultado] || [];

  const aprobadasCount = evidenciasActuales.filter(ev => ev.estado === 'Aprobada').length;
  const progreso = evidenciasActuales.length > 0 ? aprobadasCount / evidenciasActuales.length : 0;

  const actualizarEstado = () => {
    const primeraPendienteIdx = evidenciasActuales.findIndex(ev => ev.estado !== 'Aprobada');
    
    if (primeraPendienteIdx !== -1) {
      const listaActualizada = [...evidenciasActuales];
      listaActualizada[primeraPendienteIdx].estado = 'Aprobada';

      setEvidenciasPorRap({
        ...evidenciasPorRap,
        [resultado]: listaActualizada
      });
    }
  };

  return (
    <PaperProvider theme={theme}>
      <SafeAreaView style={{ flex: 1, backgroundColor: theme.colors.background }}>
        <HeaderPanel
          programa="ADSO"
          aprendiz="Jonathan Andrés"
          resultado={resultado}
          setResultado={setResultado}
        />

        <ScrollView contentContainerStyle={{ padding: 16, paddingBottom: 30 }}>
          <View style={styles.progresoBox}>
            <View style={styles.progresoRow}>
              <Text style={styles.progresoLabel}>
                Aprobadas: {aprobadasCount} de {evidenciasActuales.length}
              </Text>
              <Text style={styles.progresoPorcentaje}>
                {Math.round(progreso * 100)}%
              </Text>
            </View>
            <ProgressBar 
              progress={progreso} 
              color="#00A8E8" 
              style={styles.progressBar} 
            />
          </View>

          <Button
            mode="contained"
            icon="check-circle"
            buttonColor={theme.colors.primary}
            style={styles.btnActualizar}
            contentStyle={{ height: 48 }}
            disabled={progreso === 1}
            onPress={actualizarEstado}
          >
            {progreso === 1 ? "¡Resultado Completado!" : "Aprobar Siguiente Evidencia"}
          </Button>

          {evidenciasActuales.map((evidencia) => (
            <EvidenciaCard
              key={evidencia.id}
              nombre={evidencia.nombre}
              tipo={evidencia.tipo}
              fecha={evidencia.fecha}
              estado={evidencia.estado}
            />
          ))}
        </ScrollView>
      </SafeAreaView>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  progresoBox: {
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderRadius: 14,
    marginBottom: 14,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    borderLeftWidth: 5,
    borderLeftColor: '#00A8E8',
  },
  progresoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  progresoLabel: {
    fontWeight: 'bold',
    color: '#0F2C59',
    fontSize: 14,
  },
  progresoPorcentaje: {
    fontWeight: 'bold',
    color: '#00A8E8',
    fontSize: 14,
  },
  progressBar: {
    height: 10,
    borderRadius: 5,
    backgroundColor: '#E0F2FE',
  },
  btnActualizar: {
    marginBottom: 16,
    borderRadius: 12,
  },
});