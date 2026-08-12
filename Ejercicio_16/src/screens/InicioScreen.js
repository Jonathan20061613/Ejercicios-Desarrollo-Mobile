import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function InicioScreen({ navigation }) {
    return (
        <View style={styles.mainWrapper}>
            <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>

                {/* Banner Asimétrico Hero */}
                <View style={styles.heroContainer}>
                    <Image
                        source={{ uri: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=800&auto=format&fit=crop' }}
                        style={styles.heroImage}
                    />
                    <View style={styles.darkGradient} />
                    <View style={styles.heroHeader}>
                        <View style={styles.liveTag}>
                            <View style={styles.pulseDot} />
                            <Text style={styles.liveTagText}>ABIERTO AHORA</Text>
                        </View>
                        <Text style={styles.brandTitle}>EL CARBÓN</Text>
                        <Text style={styles.brandCategory}>PARRILLA & CORTES FINOS</Text>
                    </View>
                </View>

                {/* Fila de Estadísticas / Highlights */}
                <View style={styles.statsRow}>
                    <View style={styles.statBox}>
                        <Ionicons name="flame" size={18} color="#FF6D00" />
                        <Text style={styles.statValue}>100%</Text>
                        <Text style={styles.statLabel}>Al Carbón</Text>
                    </View>
                    <View style={styles.statDivider} />
                    <View style={styles.statBox}>
                        <Ionicons name="star" size={18} color="#FFD600" />
                        <Text style={styles.statValue}>4.9 / 5</Text>
                        <Text style={styles.statLabel}>Calificación</Text>
                    </View>
                    <View style={styles.statDivider} />
                    <View style={styles.statBox}>
                        <Ionicons name="time" size={18} color="#00E676" />
                        <Text style={styles.statValue}>25-35 min</Text>
                        <Text style={styles.statLabel}>Preparación</Text>
                    </View>
                </View>

                {/* Tarjeta Recompensa/Destacada con diseño horizontal */}
                <View style={styles.promoCard}>
                    <View style={styles.promoTextContainer}>
                        <Text style={styles.promoTitle}>Especial de la Casa</Text>
                        <Text style={styles.promoSub}>Tomahawk 800g con papas rústicas y chimichurri casero.</Text>
                        <TouchableOpacity
                            style={styles.promoButton}
                            onPress={() => navigation.navigate('Menu')}
                        >
                            <Text style={styles.promoButtonText}>Pedir Especial</Text>
                            <Ionicons name="arrow-forward" size={14} color="#000" />
                        </TouchableOpacity>
                    </View>
                </View>

            </ScrollView>

            {/* Dock Inferior de Navegación Rápida (Botones Flotantes) */}
            <View style={styles.floatingDock}>
                <TouchableOpacity
                    style={[styles.dockButton, styles.dockPrimary]}
                    onPress={() => navigation.navigate('Menu')}
                >
                    <Ionicons name="restaurant" size={18} color="#FFFFFF" />
                    <Text style={styles.dockPrimaryText}>Ver Menú Completo</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={[styles.dockButton, styles.dockSecondary]}
                    onPress={() => navigation.navigate('Contacto')}
                >
                    <Ionicons name="call" size={18} color="#FF6D00" />
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    mainWrapper: {
        flex: 1,
        backgroundColor: '#09090B',
    },
    container: {
        padding: 16,
        paddingBottom: 90,
    },
    heroContainer: {
        height: 260,
        borderRadius: 24,
        overflow: 'hidden',
        position: 'relative',
        marginBottom: 16,
    },
    heroImage: {
        width: '100%',
        height: '100%',
    },
    darkGradient: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(9, 9, 11, 0.55)',
    },
    heroHeader: {
        position: 'absolute',
        bottom: 20,
        left: 20,
        right: 20,
    },
    liveTag: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.6)',
        alignSelf: 'flex-start',
        paddingHorizontal: 10,
        paddingVertical: 4,
        borderRadius: 12,
        marginBottom: 8,
        borderWidth: 1,
        borderColor: '#27272A',
    },
    pulseDot: {
        width: 6,
        height: 6,
        borderRadius: 3,
        backgroundColor: '#00E676',
        marginRight: 6,
    },
    liveTagText: {
        color: '#00E676',
        fontSize: 10,
        fontWeight: '800',
        letterSpacing: 0.8,
    },
    brandTitle: {
        fontSize: 32,
        fontWeight: '900',
        color: '#FFFFFF',
        letterSpacing: 1,
    },
    brandCategory: {
        fontSize: 12,
        fontWeight: '700',
        color: '#FF6D00',
        letterSpacing: 2,
    },
    statsRow: {
        flexDirection: 'row',
        backgroundColor: '#18181B',
        borderRadius: 18,
        paddingVertical: 14,
        paddingHorizontal: 10,
        justifyContent: 'space-around',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#27272A',
        marginBottom: 16,
    },
    statBox: {
        alignItems: 'center',
    },
    statValue: {
        color: '#FFFFFF',
        fontWeight: '800',
        fontSize: 14,
        marginTop: 4,
    },
    statLabel: {
        color: '#A1A1AA',
        fontSize: 10,
        marginTop: 2,
    },
    statDivider: {
        width: 1,
        height: 28,
        backgroundColor: '#27272A',
    },
    promoCard: {
        backgroundColor: '#18181B',
        borderRadius: 20,
        padding: 20,
        borderLeftWidth: 4,
        borderLeftColor: '#FF6D00',
        borderWidth: 1,
        borderColor: '#27272A',
    },
    promoTitle: {
        fontSize: 18,
        fontWeight: '800',
        color: '#FFFFFF',
    },
    promoSub: {
        fontSize: 13,
        color: '#A1A1AA',
        marginTop: 4,
        marginBottom: 14,
        lineHeight: 18,
    },
    promoButton: {
        backgroundColor: '#FF6D00',
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'flex-start',
        paddingHorizontal: 16,
        paddingVertical: 8,
        borderRadius: 20,
        gap: 6,
    },
    promoButtonText: {
        color: '#000000',
        fontWeight: '800',
        fontSize: 12,
    },
    floatingDock: {
        position: 'absolute',
        bottom: 20,
        left: 16,
        right: 16,
        flexDirection: 'row',
        gap: 10,
    },
    dockButton: {
        borderRadius: 16,
        height: 52,
        justifyContent: 'center',
        alignItems: 'center',
    },
    dockPrimary: {
        flex: 1,
        backgroundColor: '#FF6D00',
        flexDirection: 'row',
        gap: 8,
    },
    dockPrimaryText: {
        color: '#FFFFFF',
        fontWeight: '800',
        fontSize: 15,
    },
    dockSecondary: {
        width: 52,
        backgroundColor: '#18181B',
        borderWidth: 1,
        borderColor: '#FF6D00',
    },
});