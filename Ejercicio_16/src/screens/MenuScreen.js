import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const PLATOS = [
    // --- ENTRADAS ---
    {
        id: '1',
        categoria: 'ENTRADAS',
        nombre: 'Chorizo Santafereño a la Parrilla',
        detalle: 'Acompañado de arepa de choclo y chimichurri',
        precio: '$ 18.000',
        imagen: 'https://cloudfront-us-east-1.images.arcpublishing.com/elespectador/QLA7BACJXJGAPNEU6L4GR5CZ4E.jpg',
    },
    {
        id: '2',
        categoria: 'ENTRADAS',
        nombre: 'Mantecada & Chicharrón Crocante',
        detalle: '200g de chicharrón crocante con guacamole casero',
        precio: '$ 24.000',
        imagen: 'https://images.unsplash.com/photo-1561758033-d89a9ad46330?q=80&w=400&auto=format&fit=crop',
    },

    // --- CORTES DE CARNE ---
    {
        id: '3',
        categoria: 'CORTES DE CARNE',
        nombre: 'Punta de Anca Premium',
        detalle: '400g • Término a elección con papas rústicas',
        precio: '$ 45.000',
        imagen: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=400&auto=format&fit=crop',
    },
    {
        id: '4',
        categoria: 'CORTES DE CARNE',
        nombre: 'Bife de Lomo al Carbón',
        detalle: '350g de lomo tierno con mantequilla de hierbas',
        precio: '$ 48.000',
        imagen: 'https://images.unsplash.com/photo-1558030006-450675393462?q=80&w=400&auto=format&fit=crop',
    },
    {
        id: '5',
        categoria: 'CORTES DE CARNE',
        nombre: 'Costillas BBQ Ahumadas',
        detalle: '500g • Bañadas en salsa ahumada artesanal',
        precio: '$ 38.000',
        imagen: 'https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?q=80&w=400&auto=format&fit=crop',
    },
    {
        id: '6',
        categoria: 'CORTES DE CARNE',
        nombre: 'Tomahawk Steak (Familiar)',
        detalle: '800g con hueso largo, mazorca y chimichurri',
        precio: '$ 85.000',
        imagen: 'https://images.unsplash.com/photo-1588168333986-5078d3ae3976?q=80&w=400&auto=format&fit=crop',
    },

    // --- PARA COMPARTIR ---
    {
        id: '7',
        categoria: 'PARA COMPARTIR',
        nombre: 'Picada Especial El Carbón',
        detalle: '2-3 Personas • Res, Cerdo, Chorizo, Papa y Plátano',
        precio: '$ 62.000',
        imagen: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=400&auto=format&fit=crop',
    },

    // --- BEBIDAS ---
    {
        id: '8',
        categoria: 'BEBIDAS',
        nombre: 'Limonada de Coco Artesanal',
        detalle: '500ml de refrescante limonada frappé',
        precio: '$ 12.000',
        imagen: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?q=80&w=400&auto=format&fit=crop',
    },
    {
        id: '9',
        categoria: 'BEBIDAS',
        nombre: 'Cerveza Artesanal Club Negra',
        detalle: 'Botella 330ml helada ideal para carnes',
        precio: '$ 10.000',
        imagen: 'https://images.unsplash.com/photo-1608270586620-248524c67de9?q=80&w=400&auto=format&fit=crop',
    },
];

export default function MenuScreen() {
    const [pedidos, setPedidos] = useState([]);

    const togglePedido = (id, nombre) => {
        if (pedidos.includes(id)) {
            setPedidos(pedidos.filter((item) => item !== id));
        } else {
            setPedidos([...pedidos, id]);
            Alert.alert('¡Agregado!', `${nombre} se ha añadido a tu orden.`);
        }
    };

    return (
        <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>

            {/* Encabezado con Contador */}
            <View style={styles.header}>
                <View>
                    <Text style={styles.headerTitle}>Nuestro Menú</Text>
                    <Text style={styles.headerSub}>Explora nuestros {PLATOS.length} productos especiales</Text>
                </View>
                <View style={styles.orderBadge}>
                    <Ionicons name="cart" size={16} color="#FF6D00" />
                    <Text style={styles.orderBadgeCount}>{pedidos.length}</Text>
                </View>
            </View>

            {/* Lista de Platos Horizontales */}
            {PLATOS.map((item, index) => {
                const agendado = pedidos.includes(item.id);
                const esNuevaCategoria = index === 0 || PLATOS[index - 1].categoria !== item.categoria;

                return (
                    <View key={item.id}>
                        {/* Título de Sección por Categoría */}
                        {esNuevaCategoria && (
                            <View style={styles.categoryHeader}>
                                <Ionicons name="flame-outline" size={14} color="#FF6D00" />
                                <Text style={styles.categoryTitle}>{item.categoria}</Text>
                            </View>
                        )}

                        <View style={styles.horizontalCard}>
                            <Image source={{ uri: item.imagen }} style={styles.cardImage} />

                            <View style={styles.cardContent}>
                                <Text style={styles.dishTitle} numberOfLines={1}>{item.nombre}</Text>
                                <Text style={styles.dishDetail} numberOfLines={2}>{item.detalle}</Text>
                                <Text style={styles.dishPrice}>{item.precio}</Text>
                            </View>

                            {/* Botón de Acción Lateral */}
                            <TouchableOpacity
                                style={[styles.actionButton, agendado && styles.actionButtonActive]}
                                activeOpacity={0.7}
                                onPress={() => togglePedido(item.id, item.nombre)}
                            >
                                <Ionicons
                                    name={agendado ? "checkmark-sharp" : "add-sharp"}
                                    size={22}
                                    color={agendado ? "#FFFFFF" : "#FF6D00"}
                                />
                            </TouchableOpacity>
                        </View>
                    </View>
                );
            })}

        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 16,
        backgroundColor: '#09090B',
        flexGrow: 1,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
        marginTop: 4,
    },
    headerTitle: {
        fontSize: 26,
        fontWeight: '900',
        color: '#FFFFFF',
    },
    headerSub: {
        fontSize: 12,
        color: '#A1A1AA',
        marginTop: 2,
    },
    orderBadge: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#18181B',
        paddingHorizontal: 12,
        paddingVertical: 8,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#FF6D00',
        gap: 6,
    },
    orderBadgeCount: {
        color: '#FFFFFF',
        fontWeight: '800',
        fontSize: 13,
    },
    categoryHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 6,
        marginTop: 12,
        marginBottom: 10,
    },
    categoryTitle: {
        fontSize: 11,
        fontWeight: '800',
        color: '#FF6D00',
        letterSpacing: 1.5,
    },
    horizontalCard: {
        flexDirection: 'row',
        backgroundColor: '#18181B',
        borderRadius: 18,
        padding: 12,
        marginBottom: 12,
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#27272A',
    },
    cardImage: {
        width: 76,
        height: 76,
        borderRadius: 14,
    },
    cardContent: {
        flex: 1,
        marginLeft: 12,
        marginRight: 8,
    },
    dishTitle: {
        fontSize: 14,
        fontWeight: '800',
        color: '#FFFFFF',
    },
    dishDetail: {
        fontSize: 11,
        color: '#A1A1AA',
        marginVertical: 3,
        lineHeight: 15,
    },
    dishPrice: {
        fontSize: 14,
        fontWeight: '900',
        color: '#FF6D00',
    },
    actionButton: {
        width: 40,
        height: 40,
        borderRadius: 12,
        backgroundColor: 'rgba(255, 109, 0, 0.12)',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: 'rgba(255, 109, 0, 0.3)',
    },
    actionButtonActive: {
        backgroundColor: '#00E676',
        borderColor: '#00E676',
    },
});