import React from 'react';
import { Card, Text, useTheme } from 'react-native-paper';

export default function ActividadCard({
    titulo,
    descripcion,
    fecha,
    estado
}) {
    const theme = useTheme();

    return (
        <Card style={{ marginBottom: 15, backgroundColor: theme.colors.surface, borderRadius: 10 }}>
            <Card.Content>
                <Text variant="titleMedium" style={{ color: theme.colors.primary, fontWeight: 'bold' }}>
                    {titulo}
                </Text>
                <Text style={{ color: theme.colors.text, marginVertical: 4 }}>
                    {descripcion}
                </Text>
                <Text style={{ color: '#4A607A', fontSize: 13 }}>
                    <Text style={{ fontWeight: 'bold' }}>Fecha: </Text>{fecha}
                </Text>
                <Text style={{ color: '#4A607A', fontSize: 13 }}>
                    <Text style={{ fontWeight: 'bold' }}>Estado: </Text>{estado}
                </Text>
            </Card.Content>
        </Card>
    );
}