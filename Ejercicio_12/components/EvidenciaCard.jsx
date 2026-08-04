import React from 'react';
import { Card, Text } from 'react-native-paper';
import { View, StyleSheet } from 'react-native';

export default function EvidenciaCard({ nombre, tipo, fecha, estado }) {

    const getBadgeStyle = (est) => {
        switch (est) {
            case 'Aprobada':
                return { bg: '#E0F2FE', text: '#0284C7' };
            case 'En revisión':
                return { bg: '#FFF7ED', text: '#EA580C' };
            default:
                return { bg: '#FEF2F2', text: '#DC2626' };
        }
    };

    const badge = getBadgeStyle(estado);

    return (
        <Card style={styles.card}>
            <Card.Content>
                <View style={styles.headerCard}>
                    <Text variant="titleMedium" style={styles.titulo}>
                        {nombre}
                    </Text>
                    <View style={[styles.badge, { backgroundColor: badge.bg }]}>
                        <Text style={[styles.badgeText, { color: badge.text }]}>
                            {estado}
                        </Text>
                    </View>
                </View>

                <View style={styles.row}>
                    <Text style={styles.label}>Tipo:</Text>
                    <Text style={styles.value}>{tipo}</Text>
                </View>

                <View style={styles.row}>
                    <Text style={styles.label}>Fecha límite:</Text>
                    <Text style={styles.value}>{fecha}</Text>
                </View>
            </Card.Content>
        </Card>
    );
}

const styles = StyleSheet.create({
    card: {
        marginBottom: 12,
        backgroundColor: '#FFFFFF',
        borderRadius: 14,
        elevation: 2,
        shadowColor: '#0B132B',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.08,
        shadowRadius: 4,
    },
    headerCard: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        marginBottom: 10,
    },
    titulo: {
        color: '#0F2C59',
        fontWeight: '700',
        flex: 1,
        paddingRight: 8,
    },
    badge: {
        paddingHorizontal: 10,
        paddingVertical: 4,
        borderRadius: 20,
    },
    badgeText: {
        fontSize: 12,
        fontWeight: 'bold',
    },
    row: {
        flexDirection: 'row',
        marginTop: 4,
    },
    label: {
        color: '#475569',
        fontWeight: '600',
        width: 90,
        fontSize: 13,
    },
    value: {
        color: '#0B132B',
        fontSize: 13,
        fontWeight: '500',
    },
});