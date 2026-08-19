import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Text } from 'react-native-paper';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { RootStackParamList } from './types';
import ZonaAlmacen from './ZonaAlmacen';

type HomeScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Home'>;

interface HomeScreenProps {
    navigation: HomeScreenNavigationProp;
}

interface ZonaData {
    id: number;
    nombreZona: string;
    descripcion: string;
}

export default function HomeScreen({ navigation }: HomeScreenProps): React.JSX.Element {
    const zonas: ZonaData[] = [
        {
            id: 1,
            nombreZona: 'Zona A: Almacenamiento Seco',
            descripcion: 'Área destinada a mercancía general, empaques de cartón y materia prima no perecedera.',
        },
        {
            id: 2,
            nombreZona: 'Zona B: Cuarto Frío y Refrigeración',
            descripcion: 'Espacio con control térmico para conservación de insumos sensibles a la temperatura.',
        },
        {
            id: 3,
            nombreZona: 'Zona C: Muelle de Carga y Descarga',
            descripcion: 'Plataforma logística para recepción de proveedores y despacho de pedidos terminados.',
        },
    ];

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.badgeContainer}>
                    <View style={styles.liveIndicator} />
                    <Text style={styles.badgeText}>INSPECCIÓN DE BODEGA</Text>
                </View>

                <View style={styles.titleRow}>
                    <MaterialCommunityIcons name="warehouse" size={28} color="#6366F1" style={{ marginRight: 10 }} />
                    <Text style={styles.title}>Zonas de Almacén</Text>
                </View>
                <Text style={styles.subtitle}>SISTEMA DE AUDITORÍA</Text>
            </View>

            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.list}>
                {zonas.map((zona) => (
                    <ZonaAlmacen
                        key={zona.id}
                        nombreZona={zona.nombreZona}
                        descripcion={zona.descripcion}
                        onPress={() => navigation.navigate('CapturaEvidencia')}
                    />
                ))}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F8FAFC', 
        paddingTop: 55,
        paddingHorizontal: 20,
    },
    header: {
        marginBottom: 20,
    },
    badgeContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'flex-start',
        backgroundColor: '#EEF2FF',
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#E0E7FF',
        marginBottom: 12,
    },
    liveIndicator: {
        width: 6,
        height: 6,
        borderRadius: 3,
        backgroundColor: '#6366F1',
        marginRight: 8,
    },
    badgeText: {
        color: '#4F46E5',
        fontSize: 10,
        fontWeight: '700',
        letterSpacing: 1,
    },
    titleRow: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    title: {
        fontSize: 26,
        fontWeight: '800',
        color: '#0F172A',
        letterSpacing: -0.5,
    },
    subtitle: {
        fontSize: 11,
        color: '#94A3B8',
        fontWeight: '600',
        letterSpacing: 1.5,
        marginTop: 4,
    },
    list: {
        paddingBottom: 24,
    },
});