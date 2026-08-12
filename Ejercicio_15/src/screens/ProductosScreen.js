import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, Alert } from 'react-native';

const PRODUCTOS = [
    {
        id: '1',
        nombre: 'Café de Origen Huila (500g)',
        precio: '$ 32,000 COP',
        imagen: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?q=80&w=600&auto=format&fit=crop',
    },
    {
        id: '2',
        nombre: 'Capuchino Italiano (300ml)',
        precio: '$ 9,500 COP',
        imagen: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?q=80&w=600&auto=format&fit=crop',
    },
    {
        id: '3',
        nombre: 'Tarta de Chocolate & Frutos Rojos',
        precio: '$ 14,000 COP',
        imagen: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=600&auto=format&fit=crop',
    },
    {
        id: '4',
        nombre: 'Cold Brew Artesanal (300ml)',
        precio: '$ 11,000 COP',
        imagen: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?q=80&w=600&auto=format&fit=crop',
    },
];

export default function ProductosScreen() {
    const handleAgregar = (nombre) => {
        Alert.alert('Producto agregado', `Has añadido "${nombre}" a tu pedido.`);
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.title}>Nuestros Productos</Text>

            {PRODUCTOS.map((item) => (
                <View key={item.id} style={styles.card}>
                    <Image
                        source={{ uri: item.imagen }}
                        style={styles.productImage}
                        resizeMode="cover"
                    />

                    <View style={styles.infoContainer}>
                        <View style={styles.textRow}>
                            <Text style={styles.productName}>{item.nombre}</Text>
                            <Text style={styles.productPrice}>{item.precio}</Text>
                        </View>

                        <TouchableOpacity
                            style={styles.button}
                            activeOpacity={0.8}
                            onPress={() => handleAgregar(item.nombre)}
                        >
                            <Text style={styles.buttonText}>🛒 Agregar al Carrito</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            ))}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 16,
        backgroundColor: '#FAFAFA',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#3E2723',
        marginBottom: 16,
        textAlign: 'center',
    },
    card: {
        backgroundColor: '#FFFFFF',
        borderRadius: 14,
        marginBottom: 18,
        overflow: 'hidden',
        borderWidth: 1,
        borderColor: '#EFEBE9',
        elevation: 3,
    },
    productImage: {
        width: '100%',
        height: 180,
    },
    infoContainer: {
        padding: 14,
    },
    textRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 12,
    },
    productName: {
        fontSize: 15,
        fontWeight: '600',
        color: '#3E2723',
        flex: 1,
        paddingRight: 8,
    },
    productPrice: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#8D6E63',
    },
    button: {
        backgroundColor: '#3E2723',
        paddingVertical: 10,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 14,
        fontWeight: '600',
    },
});