import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Text } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Actividad from './Actividad';

export default function InicioScreen({ navigation }) {
    // Mínimo 4 actividades enviadas por props
    const actividades = [
        {
            id: 1,
            nombre: 'Laboratorio de Física',
            descripcion: 'Demostración práctica de las leyes de Newton mediante experimentos.',
            estado: 'Completado',
        },
        {
            id: 2,
            nombre: 'Taller de Programación',
            descripcion: 'Desarrollo de interfaces móviles en React Native y Expo.',
            estado: 'En Proceso',
        },
        {
            id: 3,
            nombre: 'Lectura de Inglés',
            descripcion: 'Comprensión lectora y vocabulario técnico en guía de aprendizaje.',
            estado: 'Completado',
        },
        {
            id: 4,
            nombre: 'Consulta de Base de Datos',
            descripcion: 'Diseño e implementación de diagramas de entidad-relación en SQL.',
            estado: 'Pendiente',
        },
    ];

    return (
        <View style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <View style={styles.badgeContainer}>
                    <View style={styles.liveIndicator} />
                    <Text style={styles.badgeText}>JORNADA ESCOLAR</Text>
                </View>

                <View style={styles.titleRow}>
                    <MaterialCommunityIcons name="clipboard-check-outline" size={28} color="#38BDF8" style={{ marginRight: 10 }} />
                    <Text style={styles.title}>Mis Actividades</Text>
                </View>
                <Text style={styles.subtitle}>ACADEMIC // LOG v2.0</Text>
            </View>

            {/* Lista de Actividades */}
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.list}>
                {actividades.map((act) => (
                    <Actividad
                        key={act.id}
                        nombre={act.nombre}
                        descripcion={act.descripcion}
                        estado={act.estado}
                        onPress={() => navigation.navigate('Camara')}
                    />
                ))}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0B0F17',
        paddingTop: 55,
        paddingHorizontal: 20,
    },
    header: {
        marginBottom: 20,
    },
    badgeContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'flex-start',
        backgroundColor: 'rgba(56, 189, 248, 0.08)',
        paddingHorizontal: 12,
        paddingVertical: 5,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: 'rgba(56, 189, 248, 0.25)',
        marginBottom: 12,
    },
    liveIndicator: {
        width: 6,
        height: 6,
        borderRadius: 3,
        backgroundColor: '#38BDF8',
        marginRight: 8,
    },
    badgeText: {
        color: '#38BDF8',
        fontSize: 9,
        fontWeight: '700',
        letterSpacing: 2,
    },
    titleRow: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    title: {
        fontSize: 26,
        fontWeight: '800',
        color: '#F8FAFC',
        letterSpacing: 0.5,
    },
    subtitle: {
        fontSize: 10,
        color: '#64748B',
        fontWeight: '700',
        letterSpacing: 2,
        marginTop: 4,
    },
    list: {
        paddingBottom: 24,
    },
});