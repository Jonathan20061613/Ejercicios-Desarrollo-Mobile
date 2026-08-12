import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function InfoMundo({ navigation }) {
    return (
        <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
            <View style={styles.categoryHeader}>
                <Text style={styles.categoryText}>NOTICIAS DEL MUNDO</Text>
            </View>

            <Text style={styles.articleTitle}>
                Acuerdo histórico en la Cumbre del Clima sobre energías renovables
            </Text>

            <Text style={styles.authorText}>Por Corresponsalía Internacional • Hace 4 horas</Text>

            <Image
                source={{ uri: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop' }}
                style={styles.articleImage}
            />

            <View style={styles.bodyContainer}>
                <Text style={styles.paragraph}>
                    Delegaciones de más de 100 países han firmado una resolución conjunta para triplicar la capacidad global de energía renovable antes de finalizar la década.
                </Text>
                <Text style={styles.paragraph}>
                    El pacto incluye la creación de un fondo multimillonario para acelerar proyectos eólicos y solares en países en desarrollo, marcando un paso firme hacia los objetivos de reducción de emisiones.
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