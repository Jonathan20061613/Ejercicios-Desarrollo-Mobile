import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, ScrollView } from 'react-native';

export default function ProfileScreen({ route, navigation }) {
    const {
        nombre,
        programa,
        ficha,
        rol,
        correo,
        ciudad,
        nivelFormacion,
        fotoUrl
    } = route.params || {};

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.card}>

                {fotoUrl && (
                    <View style={styles.avatarContainer}>
                        <Image source={{ uri: fotoUrl }} style={styles.avatar} />
                    </View>
                )}

                <Text style={styles.title}>{nombre}</Text>
                <Text style={styles.roleBadge}>{rol}</Text>

                <View style={styles.divider} />

                <View style={styles.infoGroup}>
                    <Text style={styles.label}>PROGRAMA DE FORMACIÓN</Text>
                    <Text style={styles.value}>{programa}</Text>
                </View>

                <View style={styles.row}>
                    <View style={[styles.infoGroup, { flex: 1 }]}>
                        <Text style={styles.label}>FICHA</Text>
                        <Text style={styles.value}>{ficha}</Text>
                    </View>
                    <View style={[styles.infoGroup, { flex: 1 }]}>
                        <Text style={styles.label}>NIVEL</Text>
                        <Text style={styles.value}>{nivelFormacion}</Text>
                    </View>
                </View>

                <View style={styles.infoGroup}>
                    <Text style={styles.label}>CORREO ELECTRÓNICO</Text>
                    <Text style={styles.value}>{correo}</Text>
                </View>

                <View style={styles.infoGroup}>
                    <Text style={styles.label}>CIUDAD</Text>
                    <Text style={styles.value}>{ciudad}</Text>
                </View>

                <TouchableOpacity
                    style={styles.backButton}
                    activeOpacity={0.8}
                    onPress={() => navigation.goBack()}
                >
                    <Text style={styles.backButtonText}>REGRESAR</Text>
                </TouchableOpacity>

            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: '#0B0F19',
        padding: 20,
        justifyContent: 'center',
    },
    card: {
        backgroundColor: '#151C2C',
        borderRadius: 24,
        padding: 24,
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#1E293B',
        shadowColor: '#0066FF',
        shadowOffset: { width: 0, height: 6 },
        shadowOpacity: 0.2,
        shadowRadius: 15,
        elevation: 10,
    },
    avatarContainer: {
        borderRadius: 65,
        padding: 3,
        backgroundColor: '#00D2FF', 
        marginBottom: 12,
    },
    avatar: {
        width: 110,
        height: 110,
        borderRadius: 55,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#FFFFFF',
        textAlign: 'center',
    },
    roleBadge: {
        fontSize: 12,
        color: '#38BDF8',
        fontWeight: '600',
        marginTop: 4,
        letterSpacing: 0.5,
    },
    divider: {
        height: 1,
        backgroundColor: '#1E293B',
        width: '100%',
        marginVertical: 16,
    },
    infoGroup: {
        width: '100%',
        marginBottom: 12,
    },
    row: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
    },
    label: {
        fontSize: 10,
        fontWeight: 'bold',
        color: '#64748B',
        letterSpacing: 1,
        marginBottom: 2,
    },
    value: {
        fontSize: 14,
        color: '#E2E8F0',
        fontWeight: '500',
    },
    backButton: {
        marginTop: 15,
        width: '100%',
        backgroundColor: 'transparent',
        paddingVertical: 12,
        borderRadius: 12,
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#38BDF8',
    },
    backButtonText: {
        color: '#38BDF8',
        fontSize: 13,
        fontWeight: 'bold',
        letterSpacing: 1,
    },
});