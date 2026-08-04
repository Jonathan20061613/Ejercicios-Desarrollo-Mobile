import React, { useState } from 'react';
import { Appbar, Button, Menu, Text, useTheme } from 'react-native-paper';
import { View, StyleSheet } from 'react-native';

export default function HeaderPanel({ programa, aprendiz, resultado, setResultado }) {
    const [visible, setVisible] = useState(false);
    const theme = useTheme();

    return (
        <View style={styles.headerContainer}>
            <Appbar.Header style={{ backgroundColor: 'transparent', elevation: 0 }}>
                <Appbar.Content
                    title={
                        <View style={{ justifyContent: 'center' }}>
                            <Text style={styles.title}>{programa}</Text>
                            <Text style={styles.subtitle}>{`Aprendiz: ${aprendiz}`}</Text>
                        </View>
                    }
                />
            </Appbar.Header>

            <View style={{ paddingHorizontal: 16, paddingTop: 10 }}>
                <Menu
                    visible={visible}
                    onDismiss={() => setVisible(false)}
                    anchor={
                        <Button
                            mode="contained-tonal"
                            icon="chevron-down"
                            contentStyle={{ flexDirection: 'row-reverse', height: 45 }}
                            buttonColor="#00A8E8"
                            textColor="#FFFFFF"
                            onPress={() => setVisible(true)}
                            style={styles.menuButton}
                        >
                            {`Resultado: ${resultado}`}
                        </Button>
                    }
                >
                    <Menu.Item
                        title="RAP 1: Base de Datos"
                        onPress={() => {
                            setResultado("RAP 1");
                            setVisible(false);
                        }}
                    />
                    <Menu.Item
                        title="RAP 2: Frontend"
                        onPress={() => {
                            setResultado("RAP 2");
                            setVisible(false);
                        }}
                    />
                    <Menu.Item
                        title="RAP 3: Backend & API"
                        onPress={() => {
                            setResultado("RAP 3");
                            setVisible(false);
                        }}
                    />
                </Menu>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    headerContainer: {
        backgroundColor: '#0F2C59',
        paddingBottom: 15,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        borderBottomWidth: 3,
        borderBottomColor: '#00A8E8',
    },
    title: {
        color: '#FFFFFF',
        fontWeight: 'bold',
        fontSize: 20,
    },
    subtitle: {
        color: '#00A8E8',
        fontSize: 14,
        marginTop: 2,
        fontWeight: '600',
    },
    menuButton: {
        borderRadius: 12,
    },
});