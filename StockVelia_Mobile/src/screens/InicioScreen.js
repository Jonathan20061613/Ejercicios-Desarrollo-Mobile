import React from 'react';
import { StyleSheet, View, ScrollView, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Card, Text, Button, FAB } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const SERVICIOS_LANDING = [
    {
        id: '1',
        nombre: 'Gestor de Activos & Stock',
        descripcion: 'Centraliza existencias, lectura de códigos QR y alertas dinámicas de reposición crítica.',
        categoria: 'Módulo Principal',
        icono: 'cube-scan',
        imagen: 'https://images.pexels.com/photos/4483610/pexels-photo-4483610.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
        id: '2',
        nombre: 'Red Multi-Almacén',
        descripcion: 'Supervisa la tasa de ocupación física y realiza transferencias de mercancía sin fricción.',
        categoria: 'Logística',
        icono: 'truck-fast-outline',
        imagen: 'https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
        id: '3',
        nombre: 'Inteligencia de Rotación (ABC)',
        descripcion: 'Prioriza automáticamente tus artículos de mayor rentabilidad para optimizar el flujo de caja.',
        categoria: 'Analítica',
        icono: 'finance',
        imagen: 'https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
];

export default function InicioScreen() {
    return (
        <SafeAreaView style={styles.safeArea} edges={['left', 'right', 'bottom']}>
            <ScrollView
                contentContainerStyle={styles.scrollContainer}
                showsVerticalScrollIndicator={false}
                bounces={true}
            >
                <View style={styles.pageHeader}>
                    <View style={styles.headerTitleRow}>
                        <View style={styles.headerIconContainer}>
                            <MaterialCommunityIcons name="swap-horizontal-bold" size={18} color="#6818A5" />
                        </View>
                        <Text style={styles.pageTitle}>Ecosistema de Operación</Text>
                    </View>
                    <Text style={styles.pageSubtitle}>Panel general de control, métricas y trazabilidad comercial</Text>
                </View>

                <View style={styles.heroCard}>
                    <View style={styles.heroBadge}>
                        <MaterialCommunityIcons name="pulse" size={16} color="#00E676" />
                        <Text style={styles.heroBadgeText}>SISTEMA ACTIVO</Text>
                    </View>

                    <Text style={styles.heroTitle}>
                        Acelera la operación de tu empresa con <Text style={styles.heroHighlight}>StockVelia</Text>
                    </Text>

                    <Text style={styles.heroDescription}>
                        Trazabilidad total, análisis de rotación y prevención de pérdidas en un solo lugar.
                    </Text>

                    <View style={styles.heroStatsContainer}>
                        <View style={styles.statBox}>
                            <MaterialCommunityIcons name="lightning-bolt-outline" size={20} color="#00E676" />
                            <Text style={styles.statNumber}>100%</Text>
                            <Text style={styles.statLabel}>Cloud Ready</Text>
                        </View>
                        <View style={styles.statDivider} />
                        <View style={styles.statBox}>
                            <MaterialCommunityIcons name="chart-box-outline" size={20} color="#00E676" />
                            <Text style={styles.statNumber}>Pareto</Text>
                            <Text style={styles.statLabel}>Matriz ABC</Text>
                        </View>
                        <View style={styles.statDivider} />
                        <View style={styles.statBox}>
                            <MaterialCommunityIcons name="radar" size={20} color="#00E676" />
                            <Text style={styles.statNumber}>24/7</Text>
                            <Text style={styles.statLabel}>Trazabilidad</Text>
                        </View>
                    </View>
                </View>

                <View style={styles.seccionHeaderContainer}>
                    <View style={styles.seccionTitleRow}>
                        <View style={styles.seccionIconContainer}>
                            <MaterialCommunityIcons name="view-grid-plus" size={16} color="#6818A5" />
                        </View>
                        <Text style={styles.seccionTitle}>Soluciones Destacadas</Text>
                    </View>
                    <View style={styles.seccionLineDivider} />
                </View>

                {SERVICIOS_LANDING.map((item) => (
                    <Card key={item.id} style={styles.card} mode="elevated">
                        <Card.Cover source={{ uri: item.imagen }} style={styles.cardImage} />
                        <Card.Content style={styles.cardContent}>
                            <View style={styles.categoryRow}>
                                <MaterialCommunityIcons name={item.icono} size={18} color="#6818A5" />
                                <Text style={styles.badgeText}>{item.categoria}</Text>
                            </View>

                            <Text style={styles.cardTitulo}>{item.nombre}</Text>
                            <Text style={styles.cardDescripcion}>{item.descripcion}</Text>
                        </Card.Content>

                        <Card.Actions style={styles.cardActions}>
                            <Button
                                mode="contained"
                                buttonColor="#6818A5"
                                textColor="#FFFFFF"
                                icon="arrow-right"
                                style={styles.btnDetalles}
                                labelStyle={styles.btnLabelCenter}
                                contentStyle={styles.btnContentCenter}
                                onPress={() => Alert.alert('StockVelia', `Consultando ${item.nombre}`)}
                            >
                                Ver Detalle
                            </Button>
                        </Card.Actions>
                    </Card>
                ))}
            </ScrollView>

            <FAB
                icon="plus"
                style={styles.fab}
                color="#FFFFFF"
                label="Nuevo Ítem"
                onPress={() => Alert.alert('Nuevo', 'Abrir registro de activo')}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#FAF7FC',
    },
    scrollContainer: {
        paddingHorizontal: 16,
        paddingTop: 12,
        paddingBottom: 110,
        flexGrow: 1,
    },
    pageHeader: {
        marginBottom: 20,
        paddingVertical: 4,
    },
    headerTitleRow: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
    },
    headerIconContainer: {
        width: 32,
        height: 32,
        borderRadius: 10,
        backgroundColor: 'rgba(104, 24, 165, 0.1)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    pageTitle: {
        fontSize: 23,
        fontWeight: '900',
        color: '#130029',
        letterSpacing: -0.5,
        lineHeight: 28,
    },
    pageSubtitle: {
        fontSize: 13,
        color: '#6E627E',
        marginTop: 4,
        fontWeight: '500',
        paddingLeft: 42,
    },
    heroCard: {
        backgroundColor: '#250146',
        borderRadius: 20,
        padding: 20,
        marginBottom: 26,
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: 'rgba(177, 74, 237, 0.2)',
    },
    heroBadge: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 230, 118, 0.12)',
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 20,
        alignSelf: 'flex-start',
        gap: 6,
        marginBottom: 14,
        borderWidth: 1,
        borderColor: 'rgba(0, 230, 118, 0.25)',
    },
    heroBadgeText: {
        color: '#00E676',
        fontSize: 11,
        fontWeight: '900',
        letterSpacing: 0.6,
    },
    heroTitle: {
        fontSize: 20,
        fontWeight: '800',
        color: '#FFFFFF',
        lineHeight: 26,
        marginBottom: 10,
        letterSpacing: -0.3,
    },
    heroHighlight: {
        color: '#B14AED',
    },
    heroDescription: {
        fontSize: 13,
        color: '#EBD3FF',
        lineHeight: 19,
        marginBottom: 20,
        fontWeight: '400',
    },
    heroStatsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: 'rgba(255, 255, 255, 0.05)',
        borderRadius: 14,
        paddingVertical: 14,
        paddingHorizontal: 10,
        alignItems: 'center',
        borderWidth: 1,
        borderColor: 'rgba(255, 255, 255, 0.08)',
    },
    statBox: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        gap: 3,
    },
    statNumber: {
        color: '#FFFFFF',
        fontSize: 14,
        fontWeight: '800',
    },
    statLabel: {
        color: '#EBD3FF',
        fontSize: 10,
        fontWeight: '600',
    },
    statDivider: {
        width: 1,
        height: '70%',
        backgroundColor: 'rgba(255, 255, 255, 0.15)',
    },
    seccionHeaderContainer: {
        marginBottom: 16,
        gap: 12,
    },
    seccionTitleRow: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
    },
    seccionIconContainer: {
        width: 28,
        height: 28,
        borderRadius: 8,
        backgroundColor: 'rgba(104, 24, 165, 0.08)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    seccionTitle: {
        fontSize: 18,
        fontWeight: '800',
        color: '#130029',
        letterSpacing: -0.3,
    },
    seccionLineDivider: {
        height: 1,
        backgroundColor: 'rgba(104, 24, 165, 0.08)',
        width: '100%',
    },
    card: {
        marginBottom: 16,
        backgroundColor: '#FFFFFF',
        borderRadius: 16,
        overflow: 'hidden',
        elevation: 2,
    },
    cardImage: {
        height: 140,
    },
    cardContent: {
        padding: 16,
        justifyContent: 'center',
    },
    categoryRow: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 6,
        marginBottom: 6,
    },
    badgeText: {
        color: '#6818A5',
        fontSize: 11,
        fontWeight: '800',
        textTransform: 'uppercase',
        letterSpacing: 0.5,
    },
    cardTitulo: {
        fontSize: 17,
        fontWeight: '800',
        color: '#130029',
        marginBottom: 4,
        letterSpacing: -0.2,
    },
    cardDescripcion: {
        fontSize: 13,
        color: '#666666',
        lineHeight: 18,
    },
    cardActions: {
        paddingHorizontal: 16,
        paddingBottom: 16,
        justifyContent: 'center',
    },
    btnDetalles: {
        borderRadius: 10,
        width: '100%',
    },
    btnContentCenter: {
        height: 44,
        alignItems: 'center',
        justifyContent: 'center',
    },
    btnLabelCenter: {
        fontWeight: '700',
        fontSize: 13,
    },
    fab: {
        position: 'absolute',
        margin: 16,
        right: 0,
        bottom: 10,
        backgroundColor: '#6818A5',
        borderRadius: 16,
    },
});