import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function InicioScreen({ navigation }) {
    return (
        <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
            {/* Header Estilo BBC */}
            <View style={styles.header}>
                <View style={styles.logoBadge}>
                    <Text style={styles.logoText}>BBC</Text>
                </View>
                <Text style={styles.headerTitle}>Mundo & Noticias</Text>
            </View>

            {/* Banner Principal */}
            <View style={styles.heroCard}>
                <Image
                    source={{ uri: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=800&auto=format&fit=crop' }}
                    style={styles.heroImage}
                />
                <View style={styles.heroOverlay} />
                <View style={styles.heroContent}>
                    <View style={styles.liveBadge}>
                        <View style={styles.pulseDot} />
                        <Text style={styles.liveBadgeText}>ÚLTIMA HORA</Text>
                    </View>
                    <Text style={styles.heroTitle}>Información Global en Tiempo Real</Text>
                    <Text style={styles.heroSub}>
                        Las coberturas más importantes sobre tecnología, geopolítica y deportes en un solo lugar.
                    </Text>
                </View>
            </View>

            {/* Tarjeta Informativa de Edición */}
            <View style={styles.infoCard}>
                <View style={styles.metaRow}>
                    <Ionicons name="newspaper-outline" size={18} color="#BB1919" style={styles.iconMargin} />
                    <Text style={styles.metaText}>EDICIÓN GLOBAL • HOY</Text>
                </View>

                <Text style={styles.description}>
                    Accede al resumen diario verificado por nuestros corresponsales en todo el mundo.
                </Text>

                {/* Botón Principal */}
                <TouchableOpacity
                    style={styles.mainButton}
                    activeOpacity={0.85}
                    onPress={() => navigation.navigate('Noticias')}
                >
                    <Text style={styles.mainButtonText}>Ver Titulares</Text>
                    <Ionicons name="arrow-forward" size={18} color="#FFFFFF" />
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 16,
        backgroundColor: '#0F0F10',
        flexGrow: 1,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
        marginTop: 6,
    },
    logoBadge: {
        backgroundColor: '#BB1919',
        paddingHorizontal: 10,
        paddingVertical: 4,
        borderRadius: 4,
        marginRight: 10,
    },
    logoText: {
        color: '#FFFFFF',
        fontWeight: '900',
        fontSize: 16,
        letterSpacing: 1,
    },
    headerTitle: {
        color: '#FFFFFF',
        fontSize: 20,
        fontWeight: '800',
    },
    heroCard: {
        height: 260,
        borderRadius: 8,
        overflow: 'hidden',
        position: 'relative',
        marginBottom: 16,
        borderWidth: 1,
        borderColor: '#26262A',
    },
    heroImage: {
        width: '100%',
        height: '100%',
    },
    heroOverlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(0, 0, 0, 0.65)',
    },
    heroContent: {
        position: 'absolute',
        bottom: 20,
        left: 16,
        right: 16,
    },
    liveBadge: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#BB1919',
        alignSelf: 'flex-start',
        paddingHorizontal: 8,
        paddingVertical: 3,
        borderRadius: 3,
        marginBottom: 10,
    },
    pulseDot: {
        width: 6,
        height: 6,
        borderRadius: 3,
        backgroundColor: '#FFFFFF',
        marginRight: 6,
    },
    liveBadgeText: {
        color: '#FFFFFF',
        fontSize: 10,
        fontWeight: '800',
        letterSpacing: 0.8,
    },
    heroTitle: {
        fontSize: 24,
        fontWeight: '900',
        color: '#FFFFFF',
        lineHeight: 28,
    },
    heroSub: {
        fontSize: 12,
        color: '#D4D4D8',
        marginTop: 6,
        lineHeight: 18,
    },
    infoCard: {
        backgroundColor: '#18181B',
        borderRadius: 8,
        padding: 18,
        borderWidth: 1,
        borderColor: '#27272A',
    },
    metaRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    iconMargin: {
        marginRight: 8,
    },
    metaText: {
        color: '#BB1919',
        fontSize: 11,
        fontWeight: '800',
        letterSpacing: 1,
    },
    description: {
        color: '#A1A1AA',
        fontSize: 14,
        lineHeight: 20,
        marginBottom: 20,
    },
    mainButton: {
        backgroundColor: '#BB1919',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 14,
        borderRadius: 6,
    },
    mainButtonText: {
        color: '#FFFFFF',
        fontSize: 15,
        fontWeight: '800',
        marginRight: 8,
    },
});