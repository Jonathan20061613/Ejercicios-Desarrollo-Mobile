import React from 'react';
import { StyleSheet, View, ScrollView, Image } from 'react-native';
import { Text, Card, List, Divider } from 'react-native-paper';

export default function ContactoScreen() {
    return (
        <ScrollView contentContainerStyle={styles.container}>

            <Card style={styles.card}>
                <Card.Content style={styles.cardContentHeader}>

                    <View style={styles.logoContainer}>
                        <Image
                            source={require('../../assets/image.png')}
                            style={styles.logo}
                            defaultSource={{ uri: 'https://cdn-icons-png.flaticon.com/512/2092/2092663.png' }}
                        />
                    </View>

                    <Text style={styles.companyTitle}>StockVelia</Text>
                    <Text style={styles.companySub}>Atención y Soporte Técnico</Text>

                    <Divider style={styles.divider} />

                    <List.Item
                        title="Teléfono / WhatsApp"
                        description="+57 300 123 4567"
                        left={(props) => <List.Icon {...props} icon="phone" color="#6818A5" />}
                    />

                    <List.Item
                        title="Correo Electrónico"
                        description="andressguilera2006@gmail.com"
                        left={(props) => <List.Icon {...props} icon="email" color="#6818A5" />}
                    />

                    <List.Item
                        title="Ciudad"
                        description="Bogotá D.C., Colombia"
                        left={(props) => <List.Icon {...props} icon="map-marker" color="#6818A5" />}
                    />

                    <Divider style={styles.divider} />

                    <Text style={styles.socialTitle}>Redes Sociales</Text>

                    <List.Item
                        title="LinkedIn"
                        description="linkedin.com/company/stockvelia"
                        left={(props) => <List.Icon {...props} icon="linkedin" color="#6818A5" />}
                    />

                    <List.Item
                        title="GitHub StockVelia"
                        description="github.com/JonathanJimenez"
                        left={(props) => <List.Icon {...props} icon="github" color="#6818A5" />}
                    />
                </Card.Content>
            </Card>

            <View style={styles.footer}>
                <Text style={styles.footerText}>Proyecto Formativo SENA - ADSO</Text>
                <Text style={styles.footerSub}>Análisis y Desarrollo de Software</Text>
            </View>

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
    card: {
        backgroundColor: '#FFFFFF',
        borderRadius: 20,
        paddingVertical: 10,
        borderWidth: 1,
        borderColor: '#EFE6F8',
        elevation: 4,
    },
    cardContentHeader: {
        alignItems: 'stretch',
    },
    logoContainer: {
        width: 80,
        height: 80,
        borderRadius: 40,
        backgroundColor: '#c2a1db6b',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        marginBottom: 10,
        borderWidth: 2,
        borderColor: '#D283FF',
    },
    logo: {
        width: 48,
        height: 48,
        resizeMode: 'contain',
    },
    companyTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#1A0B2E',
        textAlign: 'center',
    },
    companySub: {
        fontSize: 13,
        color: '#6818A5',
        textAlign: 'center',
        marginTop: 2,
    },
    divider: {
        marginVertical: 14,
        backgroundColor: '#EFE6F8',
        width: '100%',
    },
    socialTitle: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#1A0B2E',
        marginLeft: 14,
        marginBottom: 4,
    },
    footer: {
        alignItems: 'center',
        marginTop: 20,
    },
    footerText: {
        fontSize: 12,
        fontWeight: 'bold',
        color: '#6818A5',
    },
    footerSub: {
        fontSize: 11,
        color: '#888888',
    },
});