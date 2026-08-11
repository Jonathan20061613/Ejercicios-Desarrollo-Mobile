import React from 'react';
import { StyleSheet, View, ScrollView, Image } from 'react-native';
import { Text, Card } from 'react-native-paper';

export default function InicioScreen() {
    return (
        <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>

            <View style={styles.heroCard}>
                <View style={styles.logoContainer}>
                    <Image
                        source={require('../../assets/image.png')}
                        style={styles.logo}
                        defaultSource={{ uri: 'https://cdn-icons-png.flaticon.com/512/2092/2092663.png' }}
                    />
                </View>

                <Text style={styles.companyName}>StockVelia</Text>
                <Text style={styles.subtitle}>Software & Soluciones Logísticas</Text>

                <View style={styles.divider} />

                <Text style={styles.description}>
                    Plataforma inteligente orientada al control total de inventarios, optimización de existencias en tiempo real y trazabilidad logística para microempresas.
                </Text>
            </View>

            {/* Información destacada */}
            <Card style={styles.cardInfo}>
                <Card.Content>
                    <Text style={styles.cardTitle}>Impacto del Proyecto</Text>
                    <Text style={styles.cardText}>
                        • Reducción de capital estancado mediante análisis ABC.{'\n'}
                        • Monitoreo multibodega en la nube 24/7.{'\n'}
                        • Alertas automáticas de stock mínimo.
                    </Text>
                </Card.Content>
            </Card>

        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 16,
        backgroundColor: '#F6F2FB',
        flexGrow: 1,
        justifyContent: 'center',
    },
    heroCard: {
        backgroundColor: '#1c0344',
        borderRadius: 24,
        padding: 24,
        alignItems: 'center',
        marginBottom: 20,
        shadowColor: '#6818A5',
        shadowOffset: { width: 0, height: 6 },
        shadowOpacity: 0.2,
        shadowRadius: 10,
        elevation: 6,
    },
    logoContainer: {
        width: 90,
        height: 90,
        borderRadius: 45,
        backgroundColor: '#c2a1db6b',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 14,
        borderWidth: 2,
        borderColor: '#D283FF',
    },
    logo: {
        width: 55,
        height: 55,
        resizeMode: 'contain',
    },
    companyName: {
        fontSize: 26,
        fontWeight: 'bold',
        color: '#FFFFFF',
    },
    subtitle: {
        fontSize: 13,
        color: '#D283FF',
        fontWeight: '600',
        marginTop: 2,
    },
    divider: {
        height: 1,
        backgroundColor: 'rgba(210, 131, 255, 0.2)',
        width: '100%',
        marginVertical: 16,
    },
    description: {
        fontSize: 14,
        color: '#E3D2FD',
        textAlign: 'center',
        lineHeight: 22,
    },
    cardInfo: {
        backgroundColor: '#FFFFFF',
        borderRadius: 18,
        borderWidth: 1,
        borderColor: '#EFE6F8',
    },
    cardTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#6818A5',
        marginBottom: 8,
    },
    cardText: {
        fontSize: 13,
        color: '#555555',
        lineHeight: 22,
    },
});