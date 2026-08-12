import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function InfoTecnologia({ navigation }) {
    return (
        <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
            <View style={styles.categoryHeader}>
                <Text style={styles.categoryText}>TECNOLOGÍA & CIENCIA</Text>
            </View>

            <Text style={styles.articleTitle}>
                El Telescopio James Webb detecta señales de agua en un exoplaneta lejano
            </Text>

            <Text style={styles.authorText}>Por Redacción BBC Ciencia • Hace 2 horas</Text>

            <Image
                source={{ uri: 'https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?q=80&w=800&auto=format&fit=crop' }}
                style={styles.articleImage}
            />

            <View style={styles.bodyContainer}>
                <Text style={styles.paragraph}>
                    Un grupo internacional de astrónomos utilizó los sensores infrarrojos de última generación del telescopio James Webb para analizar la atmósfera de WASP-96b, un gigante de gas ubicado a más de 1.150 años luz de la Tierra.
                </Text>
                <Text style={styles.paragraph}>
                    Los hallazgos revelan espectros detallados con la firma inconfundible de vapor de agua, además de evidencia de nubes y bruma en un planeta donde anteriormente se pensaba que no existían.
                </Text>
            </View>

            <TouchableOpacity
                style={styles.backButton}
                onPress={() => navigation.navigate('Inicio')}
            >
                <Ionicons name="home-outline" size={18} color="#FFFFFF" style={styles.iconMargin} />
                <Text style={styles.backButtonText}>Volver al Inicio</Text>
            </TouchableOpacity>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 16,
        backgroundColor: '#0F0F10',
        flexGrow: 1,
    },
    categoryHeader: {
        alignSelf: 'flex-start',
        backgroundColor: 'rgba(187, 25, 25, 0.15)',
        paddingHorizontal: 10,
        paddingVertical: 4,
        borderRadius: 4,
        marginBottom: 10,
        borderWidth: 1,
        borderColor: 'rgba(187, 25, 25, 0.3)',
    },
    categoryText: {
        color: '#BB1919',
        fontSize: 11,
        fontWeight: '800',
    },
    articleTitle: {
        fontSize: 22,
        fontWeight: '900',
        color: '#FFFFFF',
        lineHeight: 28,
        marginBottom: 8,
    },
    authorText: {
        fontSize: 12,
        color: '#71717A',
        marginBottom: 16,
    },
    articleImage: {
        width: '100%',
        height: 210,
        borderRadius: 8,
        marginBottom: 16,
    },
    bodyContainer: {
        backgroundColor: '#18181B',
        padding: 16,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#27272A',
        marginBottom: 20,
    },
    paragraph: {
        color: '#D4D4D8',
        fontSize: 14,
        lineHeight: 22,
        marginBottom: 12,
    },
    backButton: {
        backgroundColor: '#BB1919',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        borderRadius: 6,
    },
    iconMargin: {
        marginRight: 8,
    },
    backButtonText: {
        color: '#FFFFFF',
        fontWeight: '800',
        fontSize: 14,
    },
});