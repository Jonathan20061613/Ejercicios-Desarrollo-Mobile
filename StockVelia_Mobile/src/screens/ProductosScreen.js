import React from 'react';
import { StyleSheet, View, ScrollView, Linking, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Card, Text, Button, Chip } from 'react-native-paper';
import { MaterialCommunityIcons, Feather } from '@expo/vector-icons';

const CATALAGOS_MODULOS = [
    {
        id: '1',
        sku: 'MOD-STK-01',
        nombre: 'Gestor de Existencias & QR',
        descripcion: 'Genera etiquetas con códigos QR para auditorías rápidas y control de entradas/salidas en tiempo real.',
        estado: 'Disponible',
        precio: '$49.000 / mes',
        imagen: 'https://images.pexels.com/photos/8297448/pexels-photo-8297448.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
        id: '2',
        sku: 'MOD-REP-02',
        nombre: 'Motor de Reposición Automática',
        descripcion: 'Calcula puntos de reorden y envía alertas a proveedores según el consumo diario de tu negocio.',
        estado: 'Pro',
        precio: '$89.000 / mes',
        imagen: 'https://images.pexels.com/photos/5900222/pexels-photo-5900222.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
        id: '3',
        sku: 'MOD-ANA-03',
        nombre: 'Módulo Analítico & Matriz ABC',
        descripcion: 'Identifica automáticamente tus productos estrella (80% de ventas) y aquellos con capital estancado.',
        estado: 'Empresarial',
        precio: '$129.000 / mes',
        imagen: 'https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
];

export default function ProductosScreen() {
    const cotizarModulo = (nombreModulo) => {
        const telefono = '573001234567';
        const texto = encodeURIComponent(`Hola StockVelia, me interesa cotizar el módulo: *${nombreModulo}*.`);
        Linking.openURL(`https://wa.me/${telefono}?text=${texto}`).catch(() => {
            Alert.alert('Error', 'No se pudo iniciar la cotización en WhatsApp.');
        });
    };

    const verDemo = (nombreModulo) => {
        Linking.openURL('https://expo.dev').catch(() => {
            Alert.alert('Demo', `Visualizando la demo interactiva de ${nombreModulo}`);
        });
    };

    return (
        <SafeAreaView style={styles.safeArea} edges={['left', 'right', 'bottom']}>
            <ScrollView
                contentContainerStyle={styles.container}
                showsVerticalScrollIndicator={false}
                bounces={true}
            >
                <View style={styles.pageHeader}>
                    <View style={styles.headerTitleRow}>
                        <View style={styles.headerIconContainer}>
                            <MaterialCommunityIcons name="shape-plus" size={18} color="#6818A5" />
                        </View>
                        <Text style={styles.pageTitle}>Catálogo & Soluciones</Text>
                    </View>
                    <Text style={styles.pageSubtitle}>Módulos escalables integrables a tu operación</Text>
                </View>

                {CATALAGOS_MODULOS.map((item) => (
                    <Card key={item.id} style={styles.card} mode="elevated">
                        <Card.Cover source={{ uri: item.imagen }} style={styles.cardImage} />
                        <Card.Content style={styles.cardContent}>
                            <View style={styles.chipRow}>
                                <Chip style={styles.chipSku} textStyle={styles.chipSkuText} compact>
                                    {item.sku}
                                </Chip>
                                <Chip style={styles.chipEstado} textStyle={styles.chipEstadoText} compact>
                                    {item.estado}
                                </Chip>
                            </View>

                            <Text style={styles.title}>{item.nombre}</Text>
                            <Text style={styles.description}>{item.descripcion}</Text>

                            <View style={styles.priceContainer}>
                                <Feather name="tag" size={16} color="#6818A5" />
                                <Text style={styles.priceLabel}>Plan desde: </Text>
                                <Text style={styles.priceValue}>{item.precio}</Text>
                            </View>
                        </Card.Content>

                        <Card.Actions style={styles.actions}>
                            <Button
                                mode="outlined"
                                textColor="#6818A5"
                                icon={({ size, color }) => <Feather name="eye" size={16} color={color} />}
                                style={styles.btnSecundario}
                                contentStyle={styles.btnContentCenter}
                                labelStyle={{ fontSize: 12, fontWeight: '700' }}
                                onPress={() => verDemo(item.nombre)}
                            >
                                Demo
                            </Button>

                            <Button
                                mode="contained"
                                buttonColor="#6818A5"
                                textColor="#FFFFFF"
                                icon={({ size, color }) => <Feather name="send" size={15} color={color} />}
                                style={styles.btnPrincipal}
                                contentStyle={styles.btnContentCenter}
                                labelStyle={{ fontSize: 12, fontWeight: '700' }}
                                onPress={() => cotizarModulo(item.nombre)}
                            >
                                Cotizar
                            </Button>
                        </Card.Actions>
                    </Card>
                ))}
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#FAF7FC',
    },
    container: {
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
    card: {
        marginBottom: 20,
        backgroundColor: '#FFFFFF',
        borderRadius: 18,
        elevation: 2,
    },
    cardImage: {
        height: 140,
    },
    cardContent: {
        paddingTop: 16,
        justifyContent: 'center',
    },
    chipRow: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
        marginBottom: 10,
    },
    chipSku: {
        backgroundColor: '#F0E6FA',
    },
    chipSkuText: {
        color: '#6818A5',
        fontSize: 10,
        fontWeight: '800',
    },
    chipEstado: {
        backgroundColor: '#EBD3FF',
    },
    chipEstadoText: {
        color: '#250146',
        fontSize: 10,
        fontWeight: '800',
    },
    title: {
        fontSize: 17,
        fontWeight: '700',
        color: '#130029',
        marginBottom: 4,
    },
    description: {
        fontSize: 13,
        color: '#666666',
        lineHeight: 18,
    },
    priceContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 12,
        paddingTop: 10,
        borderTopWidth: 1,
        borderTopColor: '#F0E6FA',
        gap: 6,
    },
    priceLabel: {
        fontSize: 12,
        color: '#888888',
    },
    priceValue: {
        fontSize: 15,
        fontWeight: '800',
        color: '#6818A5',
    },
    actions: {
        paddingHorizontal: 16,
        paddingBottom: 16,
        justifyContent: 'center',
        gap: 10,
    },
    btnSecundario: {
        flex: 1,
        borderColor: '#6818A5',
        borderRadius: 10,
    },
    btnPrincipal: {
        flex: 1,
        borderRadius: 10,
    },
    btnContentCenter: {
        height: 42,
        alignItems: 'center',
        justifyContent: 'center',
    },
});