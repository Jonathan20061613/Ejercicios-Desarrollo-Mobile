import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, Linking } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function ContactoScreen() {
    const handlePressPhone = () => {
        Linking.openURL('tel:+573109876543');
    };

    const handlePressEmail = () => {
        Linking.openURL('mailto:pedidos@cafearoma.com.co');
    };

    const handlePressInstagram = () => {
        Linking.openURL('https://instagram.com/cafearoma.co');
    };

    return (
        <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
            <View style={styles.header}>
                <Image
                    source={require('../../assets/image.png')}
                    style={styles.logo}
                />
                <Text style={styles.companyName}>Café AROMA & CO.</Text>
                <Text style={styles.subtitle}>Atención al Cliente & Pedidos</Text>
            </View>

            <View style={styles.section}>
                <Text style={styles.sectionTitle}>INFORMACIÓN OFICIAL</Text>

                <TouchableOpacity style={styles.contactCard} onPress={handlePressPhone} activeOpacity={0.7}>
                    <View style={styles.iconContainer}>
                        <Ionicons name="call-outline" size={20} color="#3E2723" />
                    </View>
                    <View style={styles.cardContent}>
                        <Text style={styles.cardLabel}>Teléfono de atención</Text>
                        <Text style={styles.cardValue}>+57 310 987 6543</Text>
                    </View>
                    <Ionicons name="chevron-forward-outline" size={18} color="#A1887F" />
                </TouchableOpacity>

                <TouchableOpacity style={styles.contactCard} onPress={handlePressEmail} activeOpacity={0.7}>
                    <View style={styles.iconContainer}>
                        <Ionicons name="mail-outline" size={20} color="#3E2723" />
                    </View>
                    <View style={styles.cardContent}>
                        <Text style={styles.cardLabel}>Correo electrónico</Text>
                        <Text style={styles.cardValue}>pedidos@cafearoma.com.co</Text>
                    </View>
                    <Ionicons name="chevron-forward-outline" size={18} color="#A1887F" />
                </TouchableOpacity>

                <View style={styles.contactCard}>
                    <View style={styles.iconContainer}>
                        <Ionicons name="location-outline" size={20} color="#3E2723" />
                    </View>
                    <View style={styles.cardContent}>
                        <Text style={styles.cardLabel}>Ubicación Principal</Text>
                        <Text style={styles.cardValue}>Bogotá D.C., Colombia</Text>
                    </View>
                </View>
            </View>

            <View style={styles.section}>
                <Text style={styles.sectionTitle}>REDES SOCIALES</Text>

                <TouchableOpacity style={styles.socialRow} onPress={handlePressInstagram} activeOpacity={0.7}>
                    <View style={styles.socialLeft}>
                        <Ionicons name="logo-instagram" size={20} color="#8D6E63" />
                        <Text style={styles.socialName}>Instagram</Text>
                    </View>
                    <Text style={styles.socialHandle}>@cafearoma.co</Text>
                </TouchableOpacity>

                <View style={styles.socialRow}>
                    <View style={styles.socialLeft}>
                        <Ionicons name="logo-facebook" size={20} color="#8D6E63" />
                        <Text style={styles.socialName}>Facebook</Text>
                    </View>
                    <Text style={styles.socialHandle}>/CafeAromaColombia</Text>
                </View>

                <View style={styles.socialRow}>
                    <View style={styles.socialLeft}>
                        <Ionicons name="logo-tiktok" size={20} color="#8D6E63" />
                        <Text style={styles.socialName}>TikTok</Text>
                    </View>
                    <Text style={styles.socialHandle}>@cafearoma_artesanal</Text>
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: '#FAFAFA',
        flexGrow: 1,
    },
    header: {
        alignItems: 'center',
        marginBottom: 24,
        marginTop: 10,
    },
    logo: {
        width: 90,
        height: 90,
        marginBottom: 12,
        resizeMode: 'contain',
    },
    companyName: {
        fontSize: 22,
        fontWeight: '700',
        color: '#3E2723',
        letterSpacing: 0.5,
    },
    subtitle: {
        fontSize: 13,
        color: '#8D6E63',
        marginTop: 4,
        fontWeight: '500',
    },
    section: {
        marginBottom: 24,
    },
    sectionTitle: {
        fontSize: 11,
        fontWeight: '700',
        color: '#8D6E63',
        letterSpacing: 1.2,
        marginBottom: 10,
        marginLeft: 4,
    },
    contactCard: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        padding: 14,
        borderRadius: 12,
        marginBottom: 10,
        borderWidth: 1,
        borderColor: '#EFEBE9',
        elevation: 1,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.05,
        shadowRadius: 2,
    },
    iconContainer: {
        width: 38,
        height: 38,
        borderRadius: 8,
        backgroundColor: '#F5EBE6',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 12,
    },
    cardContent: {
        flex: 1,
    },
    cardLabel: {
        fontSize: 12,
        color: '#8D6E63',
        fontWeight: '500',
    },
    cardValue: {
        fontSize: 14,
        color: '#3E2723',
        fontWeight: '600',
        marginTop: 2,
    },
    socialRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        paddingHorizontal: 16,
        paddingVertical: 14,
        borderRadius: 10,
        marginBottom: 8,
        borderWidth: 1,
        borderColor: '#EFEBE9',
    },
    socialLeft: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    socialName: {
        fontSize: 14,
        color: '#3E2723',
        fontWeight: '600',
        marginLeft: 10,
    },
    socialHandle: {
        fontSize: 13,
        color: '#8D6E63',
        fontWeight: '500',
    },
});