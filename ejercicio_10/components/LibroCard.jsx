import React from 'react';
import { Alert, Image, StyleSheet, View } from 'react-native';
import { Card, Title, Paragraph, Button, ProgressBar, useTheme } from 'react-native-paper';

const LibroCard = ({ portada, titulo, autor, genero, progreso }) => {
    const theme = useTheme();
    const porcentaje = Math.round(progreso * 100);

    return (
        <Card style={[styles.card, { backgroundColor: theme.colors.surface }]}>
            <Card.Content style={styles.content}>
                {/* 1. Imagen de la portada */}
                <Image
                    source={{ uri: portada }}
                    style={styles.portada}
                    resizeMode="cover"
                />

                {/* 2. Título del libro */}
                <Title style={[styles.titulo, { color: theme.colors.primary }]}>
                    {titulo}
                </Title>

                {/* 3. Autor */}
                <Paragraph style={styles.texto}>
                    <Paragraph style={styles.bold}>Autor: </Paragraph>{autor}
                </Paragraph>

                {/* 4. Género */}
                <Paragraph style={styles.texto}>
                    <Paragraph style={styles.bold}>Género: </Paragraph>{genero}
                </Paragraph>

                {/* 5. Porcentaje y Barra de progreso */}
                <View style={styles.progresoContainer}>
                    <View style={styles.progresoTextoRow}>
                        <Paragraph style={[styles.bold, { color: theme.colors.text }]}>
                            Progreso de lectura
                        </Paragraph>
                        <Paragraph style={[styles.bold, { color: theme.colors.primary }]}>
                            {porcentaje}%
                        </Paragraph>
                    </View>
                    <ProgressBar
                        progress={progreso}
                        color={theme.colors.primary}
                        style={styles.progressBar}
                    />
                </View>

                {/* 6. Botón Ver información */}
                <Button
                    mode="contained"
                    buttonColor={theme.colors.primary}
                    style={styles.button}
                    contentStyle={{ height: 45 }}
                    onPress={() =>
                        Alert.alert(
                            "Información",
                            "Libro seleccionado: " + titulo
                        )
                    }
                >
                    Ver información
                </Button>
            </Card.Content>
        </Card>
    );
};

const styles = StyleSheet.create({
    card: {
        marginHorizontal: 20,
        marginVertical: 12,
        borderRadius: 16,
        elevation: 4,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
    },
    content: {
        alignItems: 'center',
        padding: 16,
    },
    portada: {
        width: 140,
        height: 210,
        borderRadius: 12,
        marginBottom: 16,
    },
    titulo: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 20,
        marginBottom: 6,
    },
    texto: {
        fontSize: 14,
        marginVertical: 2,
        textAlign: 'center',
    },
    bold: {
        fontWeight: 'bold',
    },
    progresoContainer: {
        width: '100%',
        marginTop: 14,
        marginBottom: 16,
    },
    progresoTextoRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 6,
        width: '100%',
    },
    progressBar: {
        width: '100%',
        height: 10,
        borderRadius: 5,
    },
    button: {
        width: '100%',
        borderRadius: 10,
    },
});

export default LibroCard;