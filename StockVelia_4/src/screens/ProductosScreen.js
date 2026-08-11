import React from 'react';
import { StyleSheet, View, ScrollView, Alert, Linking } from 'react-native';
import { Text, Card, Button } from 'react-native-paper';

const SERVICIOS = [
    {
        id: '1',
        nombre: 'Control Total de Productos & Stock',
        precio: '$ 120,000 COP / mes',
        descripcion: 'Centraliza existencias, lectura de códigos de barras y alertas dinámicas de inventario mínimo.',
        imagen: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=400&auto=format&fit=crop',
    },
    {
        id: '2',
        nombre: 'Gestión Multibodega & Almacenes',
        precio: '$ 180,000 COP / mes',
        descripcion: 'Supervisa capacidad física de ocupación y transferencias entre bodegas o locales comerciales.',
        imagen: 'https://images.unsplash.com/photo-1553413077-190dd305871c?q=80&w=400&auto=format&fit=crop',
    },
    {
        id: '3',
        nombre: 'Clasificación Inteligente ABC (Pareto)',
        precio: '$ 250,000 COP / pago único',
        descripcion: 'Algoritmo para priorización de productos estrella y optimización de liquidez.',
        imagen: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=400&auto=format&fit=crop',
    },
    {
        id: '4',
        nombre: 'Auditoría & Conciliación de Mercancía',
        precio: '$ 450,000 COP / servicio',
        descripcion: 'Acompañamiento técnico presencial/virtual para inventario físico inicial y codificación.',
        imagen: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=400&auto=format&fit=crop',
    },
];

export default function ProductosScreen() {

    const handleSolicitarDemo = (nombreServicio) => {
        Alert.alert(
            'Solicitud de Demostración',
            `¿Deseas enviar una solicitud para el servicio: "${nombreServicio}"?`,
            [
                { text: 'Cancelar', style: 'cancel' },
                {
                    text: 'Contactar por Email',
                    onPress: () => {
                        const subject = encodeURIComponent(`Solicitud Demo: ${nombreServicio}`);
                        const body = encodeURIComponent(`Hola equipo de StockVelia,\n\nEstoy interesado en recibir una demostración del servicio: ${nombreServicio}.\n\nQuedo atento a su respuesta.`);
                        Linking.openURL(`mailto:andressguilera2006@gmail.com?subject=${subject}&body=${body}`);
                    }
                }
            ]
        );
    };

    return (
        <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>

            <Text style={styles.title}>Servicios y Soluciones</Text>
            <Text style={styles.subtitle}>Catálogo oficial para la gestión de tu inventario</Text>

            {SERVICIOS.map((item) => (
                <Card key={item.id} style={styles.card} mode="elevated">
                    <Card.Cover source={{ uri: item.imagen }} style={styles.cardImage} />

                    <Card.Content style={styles.cardContent}>
                        <Text style={styles.itemTitle}>{item.nombre}</Text>
                        <Text style={styles.itemDescription}>{item.descripcion}</Text>

                        <View style={styles.priceContainer}>
                            <Text style={styles.priceLabel}>Valor del servicio:</Text>
                            <Text style={styles.priceValue}>{item.precio}</Text>
                        </View>
                    </Card.Content>

                    <Card.Actions style={styles.actions}>
                        <Button
                            mode="contained"
                            buttonColor="#6818A5"
                            textColor="#FFFFFF"
                            style={styles.btn}
                            onPress={() => handleSolicitarDemo(item.nombre)}
                        >
                            Solicitar Demostración
                        </Button>
                    </Card.Actions>
                </Card>
            ))}

        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 16,
        backgroundColor: '#F6F2FB',
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#1A0B2E',
    },
    subtitle: {
        fontSize: 13,
        color: '#6818A5',
        marginBottom: 16,
        fontWeight: '500',
    },
    card: {
        marginBottom: 18,
        backgroundColor: '#FFFFFF',
        borderRadius: 18,
        overflow: 'hidden',
        borderColor: '#EFE6F8',
        borderWidth: 1,
    },
    cardImage: {
        height: 150,
    },
    cardContent: {
        paddingTop: 14,
    },
    itemTitle: {
        fontSize: 17,
        fontWeight: 'bold',
        color: '#1A0B2E',
        marginBottom: 4,
    },
    itemDescription: {
        fontSize: 13,
        color: '#555555',
        lineHeight: 18,
        marginBottom: 12,
    },
    priceContainer: {
        backgroundColor: '#F3E8FD',
        padding: 10,
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    priceLabel: {
        fontSize: 11,
        color: '#6818A5',
        fontWeight: '600',
    },
    priceValue: {
        fontSize: 13,
        fontWeight: 'bold',
        color: '#1A0B2E',
    },
    actions: {
        paddingHorizontal: 16,
        paddingBottom: 14,
    },
    btn: {
        borderRadius: 10,
        width: '100%',
    },
});