import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function HomeScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>🏠 Pantalla de Inicio</Text>
            <Text style={styles.subtitle}>Bienvenido a la aplicación de demostración.</Text>
            <Button
                title="Ir al Perfil"
                onPress={() => {
                    navigation.navigate('Profile', {
                        usuarioId: 101,
                        nombreUsuario: 'Carlos Mendoza',
                        rol: 'Aprendiz SENA',
                    });
                }}
            />
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
        marginBottom: 10,
    },
    subtitle: {
        fontSize: 16,
        color: '#666',
        marginBottom: 20,
        textAlign: 'center',
    },
});