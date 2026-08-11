import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, StatusBar } from 'react-native';

export default function HomeScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <StatusBar barStyle="light-content" backgroundColor="#0B0F19" />

            <View style={styles.card}>
                <View style={styles.badgeContainer}>
                    <Text style={styles.badgeText}>SENA ADSO</Text>
                </View>

                <Text style={styles.title}>Perfil del Aprendiz</Text>
                <Text style={styles.subtitle}>Jonathan Andrés Jiménez Aguilera</Text>
                <Text style={styles.text}>Análisis y Desarrollo de Software</Text>

                <TouchableOpacity
                    style={styles.button}
                    activeOpacity={0.8}
                    onPress={() => {
                        navigation.navigate('Profile', {
                            nombre: 'Jonathan Andrés Jiménez Aguilera',
                            programa: 'Análisis y Desarrollo de Software - ADSO',
                            ficha: '3311976',
                            rol: 'Aprendiz SENA',
                            correo: 'andressguilera2006@gmail.com',
                            ciudad: 'Bogotá D.C',
                            nivelFormacion: 'Tecnólogo',
                            fotoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLBVQfE5NgOOjwE_eXxesdIMffsZejW6V70acvZWyXOIoNypNCJC00cdM&s=10',
                        });
                    }}
                >
                    <Text style={styles.buttonText}>VER PERFIL COMPLETO</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0B0F19', 
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    card: {
        width: '100%',
        backgroundColor: '#151C2C', 
        borderRadius: 20,
        padding: 24,
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#1E293B',
        shadowColor: '#00D2FF',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.15,
        shadowRadius: 12,
        elevation: 8,
    },
    badgeContainer: {
        backgroundColor: 'rgba(0, 210, 255, 0.1)',
        paddingHorizontal: 12,
        paddingVertical: 4,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#00D2FF',
        marginBottom: 15,
    },
    badgeText: {
        color: '#00D2FF',
        fontSize: 12,
        fontWeight: 'bold',
        letterSpacing: 1,
    },
    title: {
        fontSize: 26,
        fontWeight: '800',
        color: '#FFFFFF',
        marginBottom: 8,
    },
    subtitle: {
        fontSize: 16,
        fontWeight: '600',
        color: '#38BDF8', 
        marginBottom: 4,
        textAlign: 'center',
    },
    text: {
        fontSize: 14,
        color: '#94A3B8',
        marginBottom: 24,
        textAlign: 'center',
    },
    button: {
        width: '100%',
        backgroundColor: '#0066FF', 
        paddingVertical: 14,
        borderRadius: 12,
        alignItems: 'center',
        shadowColor: '#0066FF',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.4,
        shadowRadius: 8,
        elevation: 5,
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 14,
        fontWeight: 'bold',
        letterSpacing: 1.2,
    },
});