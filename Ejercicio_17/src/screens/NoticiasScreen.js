import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const NOTICIAS = [
    {
        id: '1',
        categoria: 'TECNOLOGÍA',
        titulo: 'El Telescopio James Webb detecta señales de agua en un exoplaneta lejano',
        resumen: 'Los astrónomos confirman la presencia de vapor de agua y nubes en la atmósfera de WASP-96b.',
        tiempo: 'Hace 2 horas',
        imagen: 'https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?q=80&w=500&auto=format&fit=crop',
        route: 'InfoTecnologia',
    },
    {
        id: '2',
        categoria: 'MUNDO',
        titulo: 'Acuerdo histórico en la Cumbre del Clima sobre energías renovables',
        resumen: 'Más de 100 países comprometen financiamiento masivo para la transición energética global.',
        tiempo: 'Hace 4 horas',
        imagen: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=500&auto=format&fit=crop',
        route: 'InfoMundo',
    },
    {
        id: '3',
        categoria: 'DEPORTES',
        titulo: 'Final dramática en la Champions League rompe récord de audiencia',
        resumen: 'Un gol en los minutos finales decide el título europeo en una noche llena de emociones.',
        tiempo: 'Hace 6 horas',
        imagen: 'https://apuestasfinaldechampions.com/wp-content/uploads/audiencia-final-champions-league.webp',
        route: 'InfoDeportes',
    },
];

export default function NoticiasScreen({ navigation }) {
    return (
        <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
            <View style={styles.header}>
                <Text style={styles.sectionTitle}>Titulares Principales</Text>
                <Text style={styles.sectionSub}>Actualizaciones en directo</Text>
            </View>

            {NOTICIAS.map((item) => (
                <View key={item.id} style={styles.newsCard}>
                    <Image source={{ uri: item.imagen }} style={styles.cardImage} />

                    <View style={styles.cardBody}>
                        <View style={styles.tagRow}>
                            <Text style={styles.categoryTag}>{item.categoria}</Text>
                            <Text style={styles.timeTag}>{item.tiempo}</Text>
                        </View>

                        <Text style={styles.cardTitle}>{item.titulo}</Text>
                        <Text style={styles.cardResumen}>{item.resumen}</Text>

                        <TouchableOpacity
                            style={styles.readButton}
                            activeOpacity={0.8}
                            onPress={() => navigation.navigate(item.route)}
                        >
                            <Text style={styles.readButtonText}>Leer Noticia Completa</Text>
                            <Ionicons name="chevron-forward" size={16} color="#BB1919" />
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
        backgroundColor: '#0F0F10',
    },
    header: {
        marginBottom: 16,
        borderLeftWidth: 4,
        borderLeftColor: '#BB1919',
        paddingLeft: 10,
    },
    sectionTitle: {
        fontSize: 22,
        fontWeight: '900',
        color: '#FFFFFF',
    },
    sectionSub: {
        fontSize: 12,
        color: '#A1A1AA',
    },
    newsCard: {
        backgroundColor: '#18181B',
        borderRadius: 8,
        marginBottom: 20,
        overflow: 'hidden',
        borderWidth: 1,
        borderColor: '#27272A',
    },
    cardImage: {
        width: '100%',
        height: 190,
    },
    cardBody: {
        padding: 16,
    },
    tagRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 8,
    },
    categoryTag: {
        color: '#BB1919',
        fontSize: 11,
        fontWeight: '800',
        letterSpacing: 1,
    },
    timeTag: {
        color: '#71717A',
        fontSize: 11,
    },
    cardTitle: {
        fontSize: 17,
        fontWeight: '800',
        color: '#FFFFFF',
        lineHeight: 22,
        marginBottom: 8,
    },
    cardResumen: {
        fontSize: 13,
        color: '#A1A1AA',
        lineHeight: 18,
        marginBottom: 16,
    },
    readButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#27272A',
        paddingVertical: 10,
        paddingHorizontal: 14,
        borderRadius: 6,
    },
    readButtonText: {
        color: '#FFFFFF',
        fontSize: 13,
        fontWeight: '700',
    },
});