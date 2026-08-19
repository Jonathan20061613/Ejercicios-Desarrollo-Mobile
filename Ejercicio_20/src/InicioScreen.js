import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Producto from './Producto';

export default function InicioScreen({ navigation }) {
    return (
        <View style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <View style={styles.badgeContainer}>
                    <View style={styles.liveIndicator} />
                    <Text style={styles.badgeText}>INVENTARIO ACTIVO</Text>
                </View>

                <View style={styles.titleRow}>
                    <MaterialCommunityIcons name="cube-outline" size={28} color="#38BDF8" style={{ marginRight: 10 }} />
                    <Text style={styles.title}>Mis Productos</Text>
                </View>
                <Text style={styles.subtitle}>EVIDENTIA // CATALOG v2.0</Text>
            </View>

            {/* Lista de Productos */}
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.list}>
                <Producto
                    nombre="Camiseta"
                    precio={35000}
                    onPress={() => navigation.navigate('Camara')}
                />
                <Producto
                    nombre="Gorra"
                    precio={25000}
                    onPress={() => navigation.navigate('Camara')}
                />
                <Producto
                    nombre="Mochila"
                    precio={60000}
                    onPress={() => navigation.navigate('Camara')}
                />
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0B0F17',
        paddingTop: 55,
        paddingHorizontal: 20,
    },
    header: {
        marginBottom: 24,
    },
    badgeContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'flex-start',
        backgroundColor: 'rgba(56, 189, 248, 0.08)',
        paddingHorizontal: 12,
        paddingVertical: 5,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: 'rgba(56, 189, 248, 0.25)',
        marginBottom: 12,
    },
    liveIndicator: {
        width: 6,
        height: 6,
        borderRadius: 3,
        backgroundColor: '#38BDF8',
        marginRight: 8,
    },
    badgeText: {
        color: '#38BDF8',
        fontSize: 9,
        fontWeight: '700',
        letterSpacing: 2,
    },
    titleRow: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    title: {
        fontSize: 26,
        fontWeight: '800',
        color: '#F8FAFC',
        letterSpacing: 0.5,
    },
    subtitle: {
        fontSize: 10,
        color: '#64748B',
        fontWeight: '700',
        letterSpacing: 2,
        marginTop: 4,
    },
    list: {
        paddingBottom: 24,
    },
});