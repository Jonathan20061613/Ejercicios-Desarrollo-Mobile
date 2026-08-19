import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Card, Text, Button, Chip } from 'react-native-paper';

export default function Actividad({ nombre, descripcion, estado, onPress }) {
    // Color del indicador según el estado
    const isCompletado = estado.toLowerCase() === 'completado';

    return (
        <Card style={styles.card} mode="outlined">
            <Card.Content>
                <View style={styles.headerCard}>
                    <Text variant="titleMedium" style={styles.nombre}>
                        {nombre}
                    </Text>
                    <Chip
                        style={[styles.chip, isCompletado ? styles.chipSuccess : styles.chipPending]}
                        textStyle={styles.chipText}
                    >
                        {estado.toUpperCase()}
                    </Chip>
                </View>

                <Text variant="bodyMedium" style={styles.descripcion}>
                    {descripcion}
                </Text>
            </Card.Content>

            <Card.Actions style={styles.actions}>
                <Button
                    mode="contained"
                    icon="camera"
                    onPress={onPress}
                    buttonColor="#38BDF8"
                    textColor="#030712"
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
        backgroundColor: '#111827',
        borderColor: '#1E293B',
        borderRadius: 16,
        marginBottom: 16,
    },
    headerCard: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 8,
    },
    nombre: {
        color: '#F8FAFC',
        fontWeight: '700',
        flex: 1,
        marginRight: 8,
    },
    chip: {
        height: 28,
        alignItems: 'center',
        justifyContent: 'center',
    },
    chipSuccess: {
        backgroundColor: 'rgba(56, 189, 248, 0.15)',
        borderColor: 'rgba(56, 189, 248, 0.4)',
        borderWidth: 1,
    },
    chipPending: {
        backgroundColor: 'rgba(148, 163, 184, 0.15)',
        borderColor: 'rgba(148, 163, 184, 0.3)',
        borderWidth: 1,
    },
    chipText: {
        color: '#38BDF8',
        fontSize: 9,
        fontWeight: '800',
        letterSpacing: 1,
    },
    descripcion: {
        color: '#94A3B8',
        marginTop: 4,
        lineHeight: 20,
    },
    actions: {
        paddingHorizontal: 16,
        paddingBottom: 16,
    },
    button: {
        width: '100%',
        borderRadius: 10,
    },
    buttonLabel: {
        fontWeight: '900',
        fontSize: 11,
        letterSpacing: 1.2,
    },
});