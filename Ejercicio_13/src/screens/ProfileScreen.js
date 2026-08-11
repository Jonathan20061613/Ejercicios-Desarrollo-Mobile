import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function ProfileScreen({ route }) {
    const { usuarioId, nombreUsuario, rol } = route.params || {};

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Perfil del Usuario</Text>
            <Text style={styles.text}>ID: {usuarioId}</Text>
            <Text style={styles.text}>Nombre: {nombreUsuario}</Text>
            <Text style={styles.text}>Rol: {rol}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 15,
    },
    text: {
        fontSize: 16,
        marginVertical: 4,
    },
});