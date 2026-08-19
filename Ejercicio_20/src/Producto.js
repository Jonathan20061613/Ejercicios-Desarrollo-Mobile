import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function Producto(props) {
    return (
        <View style={styles.card}>
            <View style={styles.infoContainer}>
                <Text style={styles.nombre}>{props.nombre}</Text>
                <Text style={styles.precio}>${props.precio.toLocaleString()}</Text>
            </View>

            <TouchableOpacity
                style={styles.button}
                activeOpacity={0.8}
                onPress={props.onPress}
            >
                <Ionicons name="camera-outline" size={18} color="#000000" style={styles.icon} />
                <Text style={styles.buttonText}>REGISTRAR FOTO</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#111827',
        borderRadius: 16,
        padding: 20,
        marginBottom: 16,
        borderWidth: 1,
        borderColor: '#1E293B',
        shadowColor: '#00F0FF',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.05,
        shadowRadius: 8,
        elevation: 3,
    },
    infoContainer: {
        marginBottom: 16,
    },
    nombre: {
        color: '#F8FAFC',
        fontSize: 18,
        fontWeight: '700',
        letterSpacing: 0.5,
    },
    precio: {
        color: '#38BDF8',
        fontSize: 15,
        fontWeight: '600',
        marginTop: 4,
    },
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#38BDF8',
        paddingVertical: 12,
        borderRadius: 10,
    },
    icon: {
        marginRight: 8,
    },
    buttonText: {
        color: '#030712',
        fontWeight: '800',
        fontSize: 11,
        letterSpacing: 1.2,
    },
});