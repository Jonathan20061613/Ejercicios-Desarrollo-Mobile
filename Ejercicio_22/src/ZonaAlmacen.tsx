import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Card, Text, Button } from 'react-native-paper';

interface ZonaAlmacenProps {
    nombreZona: string;
    descripcion: string;
    onPress: () => void;
}

export default function ZonaAlmacen({ nombreZona, descripcion, onPress }: ZonaAlmacenProps): React.JSX.Element {
    return (
        <Card style={styles.card} mode="outlined">
            <Card.Content>
                <Text variant="titleMedium" style={styles.title}>
                    {nombreZona}
                </Text>
                <Text variant="bodyMedium" style={styles.description}>
                    {descripcion}
                </Text>
            </Card.Content>

            <Card.Actions style={styles.actions}>
                <Button
                    mode="contained"
                    icon="camera"
                    onPress={onPress}
                    buttonColor="#6366F1"
                    textColor="#FFFFFF"
                    labelStyle={styles.buttonLabel}
                    style={styles.button}
                >
                    REGISTRAR EVIDENCIA
                </Button>
            </Card.Actions>
        </Card>
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#FFFFFF',
        borderColor: '#E2E8F0',
        borderRadius: 16,
        marginBottom: 16,
        elevation: 1, // Sombra suave en Android
        shadowColor: '#64748B', // Sombra en iOS
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.05,
        shadowRadius: 8,
    },
    title: {
        color: '#0F172A',
        fontWeight: '700',
        marginBottom: 6,
    },
    description: {
        color: '#64748B',
        lineHeight: 20,
    },
    actions: {
        paddingHorizontal: 16,
        paddingBottom: 16,
        paddingTop: 12,
    },
    button: {
        width: '100%',
        borderRadius: 12,
    },
    buttonLabel: {
        fontWeight: '700',
        fontSize: 12,
        letterSpacing: 0.5,
    },
});