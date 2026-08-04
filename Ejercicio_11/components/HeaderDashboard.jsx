import React, { useState } from 'react';
import { Appbar, Button, Menu, useTheme } from 'react-native-paper';

export default function HeaderDashboard({
    aprendiz,
    competencia,
    setCompetencia
}) {
    const [visible, setVisible] = useState(false);
    const theme = useTheme();

    return (
        <>
            <Appbar.Header style={{ backgroundColor: theme.colors.primary }}>
                <Appbar.Content
                    title={aprendiz}
                    subtitle={competencia}
                    titleStyle={{ color: '#FFFFFF', fontWeight: 'bold' }}
                    subtitleStyle={{ color: '#D0E1F9' }}
                />
            </Appbar.Header>

            <Menu
                visible={visible}
                onDismiss={() => setVisible(false)}
                anchor={
                    <Button
                        mode="contained"
                        buttonColor={theme.colors.secondary}
                        textColor="#FFFFFF"
                        onPress={() => setVisible(true)}
                        style={{ margin: 15, borderRadius: 8 }}
                    >
                        Seleccionar Competencia
                    </Button>
                }
            >
                <Menu.Item
                    title="Competencia 1"
                    onPress={() => {
                        setCompetencia("Competencia 1");
                        setVisible(false);
                    }}
                />
                <Menu.Item
                    title="Competencia 2"
                    onPress={() => {
                        setCompetencia("Competencia 2");
                        setVisible(false);
                    }}
                />
                <Menu.Item
                    title="Competencia 3"
                    onPress={() => {
                        setCompetencia("Competencia 3");
                        setVisible(false);
                    }}
                />
            </Menu>
        </>
    );
}