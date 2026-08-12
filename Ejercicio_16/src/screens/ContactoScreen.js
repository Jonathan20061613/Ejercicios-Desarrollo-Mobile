import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Linking, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function ContactoScreen() {
    const hacerLlamada = () => {
        Linking.openURL('tel:+573201234567').catch(() =>
            Alert.alert('Contacto', 'Llamando a +57 320 123 4567')
        );
    };

    const abrirMapa = () => {
        Alert.alert('Ubicación', 'Calle 85 # 14-20, Bogotá D.C.');
    };

    return (
        <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>

            <View style={styles.header}>
                <Text style={styles.headerTitle}>Atención & Reservas</Text>
                <Text style={styles.headerSub}>Estamos listos para atenderte</Text>
            </View>

            {/* Tarjetas Interactivas con Botón Interno */}
            <View style={styles.cardGrid}>

                {/* Bloque 1: Teléfono */}
                <View style={styles.actionCard}>
                    <View style={styles.cardHeader}>
                        <View style={styles.iconCircle}>
                            <Ionicons name="call" size={18} color="#FF6D00" />
                        </View>
                        <Text style={styles.cardTag}>LÍNEA DIRECTA</Text>
                    </View>
                    <Text style={styles.cardValue}>+57 320 123 4567</Text>
                    <TouchableOpacity style={styles.cardActionButton} onPress={hacerLlamada}>
                        <Text style={styles.cardActionText}>Llamar Ahora</Text>
                        <Ionicons name="chevron-forward" size={14} color="#FF6D00" />
                    </TouchableOpacity>
                </View>

                {/* Bloque 2: Ubicación */}
                <View style={styles.actionCard}>
                    <View style={styles.cardHeader}>
                        <View style={styles.iconCircle}>
                            <Ionicons name="location" size={18} color="#FF6D00" />
                        </View>
                        <Text style={styles.cardTag}>RESTAURANTE</Text>
                    </View>
                    <Text style={styles.cardValue}>Calle 85 # 14-20, Bogotá D.C.</Text>
                    <TouchableOpacity style={styles.cardActionButton} onPress={abrirMapa}>
                        <Text style={styles.cardActionText}>Ver Ubicación</Text>
                        <Ionicons name="chevron-forward" size={14} color="#FF6D00" />
                    </TouchableOpacity>
                </View>

                {/* Bloque 3: Horario */}
                <View style={styles.actionCard}>
                    <View style={styles.cardHeader}>
                        <View style={styles.iconCircle}>
                            <Ionicons name="time" size={18} color="#FF6D00" />
                        </View>
                        <Text style={styles.cardTag}>HORARIO DE SERVICIO</Text>
                    </View>
                    <Text style={styles.cardValue}>Martes a Domingo: 12:00 PM - 10:00 PM</Text>
                    <View style={styles.statusBadge}>
                        <View style={styles.greenDot} />
                        <Text style={styles.statusText}>Cocina Encendida</Text>
                    </View>
                </View>

            </View>

        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 16,
        backgroundColor: '#09090B',
        flexGrow: 1,
    },
    header: {
        marginBottom: 20,
        marginTop: 4,
    },
    headerTitle: {
        fontSize: 26,
        fontWeight: '900',
        color: '#FFFFFF',
    },
    headerSub: {
        fontSize: 12,
        color: '#A1A1AA',
        marginTop: 2,
    },
    cardGrid: {
        gap: 14,
    },
    actionCard: {
        backgroundColor: '#18181B',
        borderRadius: 20,
        padding: 18,
        borderWidth: 1,
        borderColor: '#27272A',
    },
    cardHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
        marginBottom: 10,
    },
    iconCircle: {
        width: 34,
        height: 34,
        borderRadius: 10,
        backgroundColor: 'rgba(255, 109, 0, 0.12)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    cardTag: {
        fontSize: 10,
        fontWeight: '800',
        color: '#FF6D00',
        letterSpacing: 1,
    },
    cardValue: {
        fontSize: 15,
        fontWeight: '700',
        color: '#FFFFFF',
        marginBottom: 14,
    },
    cardActionButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#27272A',
        paddingVertical: 10,
        paddingHorizontal: 14,
        borderRadius: 12,
    },
    cardActionText: {
        color: '#FFFFFF',
        fontSize: 12,
        fontWeight: '700',
    },
    statusBadge: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 6,
        marginTop: 2,
    },
    greenDot: {
        width: 6,
        height: 6,
        borderRadius: 3,
        backgroundColor: '#00E676',
    },
    statusText: {
        fontSize: 11,
        color: '#00E676',
        fontWeight: '600',
    },
});