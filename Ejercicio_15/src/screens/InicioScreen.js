import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

export default function InicioScreen() {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Image
                source={require('../../assets/image.png')}
                style={styles.logo}
            />

            <Text style={styles.title}>Café AROMA & CO.</Text>

            <Text style={styles.description}>
                Tostadores artesanales y cafetería de especialidad. Ofrecemos granos seleccionados de origen único, métodos de filtrado y repostería recién horneada para crear experiencias sensoriales inolvidables.
            </Text>

            <View style={styles.badge}>
                <Text style={styles.badgeText}>☕ Granos de Origen 100% Orgánicos</Text>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#FAFAFA',
    },
    logo: {
        width: 130,
        height: 130,
        marginBottom: 20,
        resizeMode: 'contain',
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#3E2723',
        marginBottom: 12,
        textAlign: 'center',
    },
    description: {
        fontSize: 15,
        color: '#5D4037',
        textAlign: 'center',
        lineHeight: 22,
        marginBottom: 24,
        paddingHorizontal: 10,
    },
    badge: {
        backgroundColor: '#EFEBE9',
        paddingHorizontal: 18,
        paddingVertical: 10,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#D7CCC8',
    },
    badgeText: {
        color: '#4E342E',
        fontWeight: '600',
        fontSize: 13,
    },
});