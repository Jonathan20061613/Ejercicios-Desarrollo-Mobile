import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

export default function InicioScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.card}>
                {/* Badge superior */}
                <View style={styles.badgeContainer}>
                    <View style={styles.liveIndicator} />
                    <Text style={styles.badgeText}>SYSTEM ONLINE</Text>
                </View>

                {/* Ícono central minimalista */}
                <View style={styles.iconWrapper}>
                    <MaterialCommunityIcons name="camera-iris" size={48} color="#FF4500" />
                </View>

                <Text style={styles.title}>Mis Evidencias</Text>
                <Text style={styles.subtitle}>EVIDENTIA // MODULE v2.4</Text>

                <Text style={styles.text}>
                    Captura y registro de evidencias digitales con alta precisión.
                </Text>

                {/* Botón principal */}
                <TouchableOpacity
                    style={styles.mainButton}
                    activeOpacity={0.8}
                    onPress={() => navigation.navigate('Camara')}
                >
                    <Ionicons name="camera-outline" size={20} color="#000000" style={styles.buttonIcon} />
                    <Text style={styles.mainButtonText}>TOMAR EVIDENCIA</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0A0505',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 24,
    },
    card: {
        width: '100%',
        backgroundColor: '#120A0A',
        borderRadius: 24,
        padding: 32,
        alignItems: 'center',
        borderWidth: 1,
        borderColor: 'rgba(255, 69, 0, 0.25)',
    },
    badgeContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'rgba(255, 69, 0, 0.08)',
        paddingHorizontal: 12,
        paddingVertical: 4,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: 'rgba(255, 69, 0, 0.2)',
        marginBottom: 24,
    },
    liveIndicator: {
        width: 6,
        height: 6,
        borderRadius: 3,
        backgroundColor: '#FF4500',
        marginRight: 8,
    },
    badgeText: {
        color: '#FF7A00',
        fontSize: 9,
        fontWeight: '700',
        letterSpacing: 2,
    },
    iconWrapper: {
        width: 80,
        height: 80,
        borderRadius: 40,
        backgroundColor: 'rgba(255, 69, 0, 0.05)',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: 'rgba(255, 69, 0, 0.2)',
        marginBottom: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: '800',
        color: '#FFFFFF',
        letterSpacing: 0.5,
    },
    subtitle: {
        fontSize: 10,
        color: '#FF7A00',
        fontWeight: '700',
        letterSpacing: 2,
        marginTop: 4,
        marginBottom: 12,
    },
    text: {
        fontSize: 13,
        color: '#8C7A7A',
        textAlign: 'center',
        lineHeight: 20,
        marginBottom: 32,
    },
    mainButton: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FF4500',
        paddingVertical: 16,
        borderRadius: 14,
        shadowColor: '#FF4500',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 10,
        elevation: 5,
    },
    buttonIcon: {
        marginRight: 8,
    },
    mainButtonText: {
        color: '#000000',
        fontWeight: '900',
        fontSize: 12,
        letterSpacing: 1.5,
    },
});