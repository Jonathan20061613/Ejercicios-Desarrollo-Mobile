import React from 'react';
import { Alert } from 'react-native';
import { Card, Title, Paragraph, Avatar, Button, ProgressBar, useTheme } from 'react-native-paper';

const AprendizCard = ({ nombre, programa, ficha, telefono, avance, foto }) => {
    const theme = useTheme();

    return (
        <Card style={{ margin: 15, borderRadius: 12, backgroundColor: theme.colors.surface }}>
            <Card.Content>
                <Avatar.Image
                    size={80}
                    source={{ uri: foto }}
                    style={{ alignSelf: 'center', marginBottom: 10, backgroundColor: theme.colors.primary }}
                />
                <Title style={{ textAlign: 'center', color: theme.colors.primary, fontWeight: 'bold' }}>
                    {nombre}
                </Title>
                <Paragraph style={{ color: theme.colors.text }}>
                    <Paragraph style={{ fontWeight: 'bold' }}>Programa: </Paragraph>{programa}
                </Paragraph>
                <Paragraph style={{ color: theme.colors.text }}>
                    <Paragraph style={{ fontWeight: 'bold' }}>Ficha: </Paragraph>{ficha}
                </Paragraph>
                <Paragraph style={{ color: theme.colors.text }}>
                    <Paragraph style={{ fontWeight: 'bold' }}>Teléfono: </Paragraph>{telefono}
                </Paragraph>
                <Paragraph style={{ marginTop: 10, fontWeight: 'bold', color: theme.colors.text }}>
                    Avance etapa lectiva ({Math.round(avance * 100)}%)
                </Paragraph>

                <ProgressBar
                    progress={avance}
                    color={theme.colors.primary}
                    style={{ marginVertical: 10, height: 8, borderRadius: 4 }}
                />

                <Button
                    mode="contained"
                    buttonColor={theme.colors.primary}
                    style={{ marginTop: 10, borderRadius: 8 }}
                    onPress={() =>
                        Alert.alert(
                            "Contacto",
                            `Contactando a ${nombre} al teléfono ${telefono}`
                        )
                    }
                >
                    Contactar
                </Button>
            </Card.Content>
        </Card>
    );
};

export default AprendizCard;