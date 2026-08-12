import React, { useState } from 'react';
import { StyleSheet, View, ScrollView, Linking, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TextInput, Button, Text, Card, TouchableRipple } from 'react-native-paper';
import { Feather, MaterialCommunityIcons } from '@expo/vector-icons';

export default function ContactoScreen() {
    const [nombre, setNombre] = useState('');
    const [empresa, setEmpresa] = useState('');
    const [mensaje, setMensaje] = useState('');

    const abrirWhatsApp = () => {
        const telefono = '573001234567';
        const texto = encodeURIComponent('¡Hola StockVelia! Me gustaría recibir más información y un diagnóstico operativo.');
        Linking.openURL(`https://wa.me/${telefono}?text=${texto}`).catch(() => {
            Alert.alert('Error', 'No se pudo abrir WhatsApp.');
        });
    };

    const abrirCorreo = () => {
        Linking.openURL('mailto:soporte@stockvelia.com?subject=Consulta Comercial StockVelia').catch(() => {
            Alert.alert('Error', 'No se pudo abrir la aplicación de correo.');
        });
    };

    const hacerLlamada = () => {
        Linking.openURL('tel:+576015550199').catch(() => {
            Alert.alert('Error', 'No se puede realizar la llamada.');
        });
    };

    const abrirMapa = () => {
        const url = 'https://maps.google.com/?q=Bogota,Colombia';
        Linking.openURL(url).catch(() => {
            Alert.alert('Error', 'No se pudo abrir la ubicación.');
        });
    };

    const handleEnviar = () => {
        if (!nombre || !empresa) {
            Alert.alert('Campos Incompletos', 'Por favor ingresa al menos tu nombre y el de tu empresa.');
            return;
        }
        Alert.alert(
            '¡Solicitud Registrada!',
            `Gracias ${nombre}. Un consultor especializado analizará la operación de ${empresa} y se pondrá en contacto pronto.`,
            [{ text: 'Entendido', onPress: () => { setNombre(''); setEmpresa(''); setMensaje(''); } }]
        );
    };

    return (
        <SafeAreaView style={styles.safeArea} edges={['left', 'right', 'bottom']}>
            <ScrollView
                contentContainerStyle={styles.container}
                showsVerticalScrollIndicator={false}
                bounces={true}
            >
                <View style={styles.pageHeader}>
                    <View style={styles.headerTitleRow}>
                        <View style={styles.headerIconContainer}>
                            <Feather name="headphones" size={18} color="#6818A5" />
                        </View>
                        <Text style={styles.pageTitle}>Contacto & Soporte</Text>
                    </View>
                    <Text style={styles.pageSubtitle}>Conéctate directamente con nuestro equipo técnico</Text>
                </View>

                <Text style={styles.sectionTitle}>Atención Inmediata</Text>

                <View style={styles.gridCanales}>
                    <Card style={styles.cardCanal}>
                        <TouchableRipple onPress={abrirWhatsApp} style={styles.rippleCard} rippleColor="rgba(37, 211, 102, 0.2)">
                            <View style={styles.canalContent}>
                                <View style={[styles.iconBox, { backgroundColor: '#E8F9EE' }]}>
                                    <MaterialCommunityIcons name="whatsapp" size={24} color="#25D366" />
                                </View>
                                <Text style={styles.canalTitle}>WhatsApp</Text>
                                <Text style={styles.canalSub}>Respuesta inmediata</Text>
                            </View>
                        </TouchableRipple>
                    </Card>

                    <Card style={styles.cardCanal}>
                        <TouchableRipple onPress={abrirCorreo} style={styles.rippleCard} rippleColor="rgba(104, 24, 165, 0.2)">
                            <View style={styles.canalContent}>
                                <View style={[styles.iconBox, { backgroundColor: '#F0E6FA' }]}>
                                    <Feather name="mail" size={22} color="#6818A5" />
                                </View>
                                <Text style={styles.canalTitle}>Correo</Text>
                                <Text style={styles.canalSub}>soporte@stockvelia.com</Text>
                            </View>
                        </TouchableRipple>
                    </Card>

                    <Card style={styles.cardCanal}>
                        <TouchableRipple onPress={hacerLlamada} style={styles.rippleCard} rippleColor="rgba(33, 150, 243, 0.2)">
                            <View style={styles.canalContent}>
                                <View style={[styles.iconBox, { backgroundColor: '#E3F2FD' }]}>
                                    <Feather name="phone-call" size={22} color="#2196F3" />
                                </View>
                                <Text style={styles.canalTitle}>Llámanos</Text>
                                <Text style={styles.canalSub}>PBX: (601) 555-0199</Text>
                            </View>
                        </TouchableRipple>
                    </Card>

                    <Card style={styles.cardCanal}>
                        <TouchableRipple onPress={abrirMapa} style={styles.rippleCard} rippleColor="rgba(255, 152, 0, 0.2)">
                            <View style={styles.canalContent}>
                                <View style={[styles.iconBox, { backgroundColor: '#FFF3E0' }]}>
                                    <Feather name="map-pin" size={22} color="#FF9800" />
                                </View>
                                <Text style={styles.canalTitle}>Sede Central</Text>
                                <Text style={styles.canalSub}>Bogotá, Colombia</Text>
                            </View>
                        </TouchableRipple>
                    </Card>
                </View>

                <View style={styles.formCard}>
                    <View style={styles.techBadge}>
                        <Feather name="cpu" size={13} color="#6818A5" />
                        <Text style={styles.techBadgeText}>DIAGNÓSTICO EXPRESS 24/7</Text>
                    </View>

                    <Text style={styles.formTitle}>Solicitar Diagnóstico Operativo</Text>
                    <Text style={styles.formSubtitle}>
                        Un consultor analizará la infraestructura e inventario de tu negocio sin costo.
                    </Text>

                    <TextInput
                        label="Tu nombre completo *"
                        value={nombre}
                        onChangeText={setNombre}
                        mode="outlined"
                        outlineColor="#E2D9EC"
                        activeOutlineColor="#6818A5"
                        style={styles.input}
                        left={<TextInput.Icon icon={({ size, color }) => <Feather name="user" size={18} color="#6818A5" />} />}
                    />

                    <TextInput
                        label="Nombre de tu empresa / negocio *"
                        value={empresa}
                        onChangeText={setEmpresa}
                        mode="outlined"
                        outlineColor="#E2D9EC"
                        activeOutlineColor="#6818A5"
                        style={styles.input}
                        left={<TextInput.Icon icon={({ size, color }) => <Feather name="briefcase" size={18} color="#6818A5" />} />}
                    />

                    <TextInput
                        label="Detalla tus requerimientos o problemas de stock"
                        value={mensaje}
                        onChangeText={setMensaje}
                        mode="outlined"
                        multiline
                        numberOfLines={3}
                        outlineColor="#E2D9EC"
                        activeOutlineColor="#6818A5"
                        style={styles.inputArea}
                        left={<TextInput.Icon icon={({ size, color }) => <Feather name="file-text" size={18} color="#6818A5" />} />}
                    />

                    <Button
                        mode="contained"
                        buttonColor="#6818A5"
                        textColor="#FFFFFF"
                        icon={({ size, color }) => <Feather name="send" size={16} color={color} />}
                        style={styles.button}
                        contentStyle={styles.buttonContentCenter}
                        labelStyle={styles.buttonLabel}
                        onPress={handleEnviar}
                    >
                        Enviar Solicitud
                    </Button>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#FAF7FC',
    },
    container: {
        paddingHorizontal: 16,
        paddingTop: 12,
        paddingBottom: 110,
        flexGrow: 1,
    },
    pageHeader: {
        marginBottom: 20,
        paddingVertical: 4,
    },
    headerTitleRow: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
    },
    headerIconContainer: {
        width: 32,
        height: 32,
        borderRadius: 10,
        backgroundColor: 'rgba(104, 24, 165, 0.1)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    pageTitle: {
        fontSize: 23,
        fontWeight: '900',
        color: '#130029',
        letterSpacing: -0.5,
        lineHeight: 28,
    },
    pageSubtitle: {
        fontSize: 13,
        color: '#6E627E',
        marginTop: 4,
        fontWeight: '500',
        paddingLeft: 42,
    },
    sectionTitle: {
        fontSize: 15,
        fontWeight: '800',
        color: '#130029',
        marginBottom: 12,
    },
    gridCanales: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        gap: 10,
        marginBottom: 24,
    },
    cardCanal: {
        width: '48%',
        backgroundColor: '#FFFFFF',
        borderRadius: 16,
        overflow: 'hidden',
        elevation: 2,
    },
    rippleCard: {
        paddingVertical: 14,
        paddingHorizontal: 12,
        justifyContent: 'center',
    },
    canalContent: {
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    iconBox: {
        width: 40,
        height: 40,
        borderRadius: 10,
        marginBottom: 8,
        alignItems: 'center',
        justifyContent: 'center',
    },
    canalTitle: {
        fontSize: 14,
        fontWeight: '700',
        color: '#130029',
    },
    canalSub: {
        fontSize: 11,
        color: '#666666',
        marginTop: 2,
    },
    formCard: {
        backgroundColor: '#FFFFFF',
        borderRadius: 20,
        padding: 20,
        elevation: 2,
    },
    techBadge: {
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'flex-start',
        backgroundColor: '#F0E6FA',
        paddingHorizontal: 10,
        paddingVertical: 4,
        borderRadius: 8,
        gap: 6,
        marginBottom: 12,
    },
    techBadgeText: {
        fontSize: 10,
        fontWeight: '800',
        color: '#6818A5',
        letterSpacing: 0.5,
    },
    formTitle: {
        fontSize: 18,
        fontWeight: '800',
        color: '#130029',
        marginBottom: 4,
    },
    formSubtitle: {
        fontSize: 13,
        color: '#666666',
        lineHeight: 18,
        marginBottom: 18,
    },
    input: {
        marginBottom: 12,
        backgroundColor: '#FFFFFF',
        fontSize: 14,
    },
    inputArea: {
        marginBottom: 18,
        backgroundColor: '#FFFFFF',
        fontSize: 14,
    },
    button: {
        borderRadius: 12,
    },
    buttonContentCenter: {
        height: 48,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonLabel: {
        fontSize: 14,
        fontWeight: '700',
    },
});