import React, { useState, useRef } from 'react';
import { View, StyleSheet, Image, Alert } from 'react-native';
import { Text, Button } from 'react-native-paper';
import { CameraView, useCameraPermissions } from 'expo-camera';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Ionicons, Feather } from '@expo/vector-icons';
import { RootStackParamList } from './types';

type CapturaEvidenciaNavigationProp = NativeStackNavigationProp<RootStackParamList, 'CapturaEvidencia'>;

interface CapturaEvidenciaProps {
    navigation: CapturaEvidenciaNavigationProp;
}

export default function CapturaEvidencia({ navigation }: CapturaEvidenciaProps): React.JSX.Element {
    const [permission, requestPermission] = useCameraPermissions();
    const [photoUri, setPhotoUri] = useState<string | null>(null);
    const cameraRef = useRef<any>(null);

    if (!permission) {
        return (
            <View style={styles.loadingContainer}>
                <Text style={styles.loadingText}>Cargando cámara...</Text>
            </View>
        );
    }

    if (!permission.granted) {
        return (
            <View style={styles.container}>
                <View style={styles.permissionCard}>
                    <Feather name={"shield-alert" as any} size={40} color="#6366F1" style={{ marginBottom: 16 }} />
                    <Text style={styles.permissionTitle}>Acceso requerido</Text>
                    <Text style={styles.permissionText}>Necesitamos permiso para acceder a la cámara y tomar evidencias de la auditoría.</Text>
                    <Button mode="contained" onPress={requestPermission} buttonColor="#6366F1" textColor="#FFFFFF" style={{ borderRadius: 10 }}>
                        Permitir cámara
                    </Button>
                </View>
            </View>
        );
    }

    const takePhoto = async () => {
        if (cameraRef.current) {
            try {
                const photo = await cameraRef.current.takePictureAsync({ quality: 0.85 });
                if (photo) {
                    setPhotoUri(photo.uri);
                    Alert.alert('Fotografía tomada', 'La evidencia de la bodega ha sido capturada.');
                }
            } catch (error) {
                console.error('Error al tomar la foto:', error);
            }
        }
    };

    const finalizarAuditoria = () => {
        Alert.alert('Auditoría Finalizada', 'Los datos y la evidencia de la inspección se registraron con éxito.', [
            { text: 'Aceptar', onPress: () => navigation.navigate('Home') }
        ]);
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.statusBadge}>
                    <View style={photoUri ? styles.statusCaptured : styles.statusLive} />
                    <Text style={styles.statusText}>
                        {photoUri ? "Evidencia registrada" : "Cámara activa"}
                    </Text>
                </View>
            </View>

            {photoUri ? (
                <View style={styles.viewFrame}>
                    <Image source={{ uri: photoUri }} style={styles.previewImage} />
                    <View style={styles.photoTag}>
                        <Ionicons name="checkmark-circle" size={16} color="#10B981" style={{ marginRight: 6 }} />
                        <Text style={styles.photoTagText}>EVIDENCIA_BODEGA.JPG</Text>
                    </View>
                </View>
            ) : (
                <View style={styles.viewFrame}>
                    <CameraView style={styles.camera} facing="back" ref={cameraRef}>
                        <View style={styles.overlayCorners}>
                            <View style={[styles.corner, styles.topLeft]} />
                            <View style={[styles.corner, styles.topRight]} />
                            <View style={[styles.corner, styles.bottomLeft]} />
                            <View style={[styles.corner, styles.bottomRight]} />
                        </View>
                    </CameraView>
                </View>
            )}

            <View style={styles.controlsBar}>
                {!photoUri ? (
                    <Button
                        mode="contained"
                        icon="camera"
                        onPress={takePhoto}
                        buttonColor="#6366F1"
                        textColor="#FFFFFF"
                        style={styles.actionButton}
                        labelStyle={styles.actionButtonLabel}
                    >
                        Tomar fotografía
                    </Button>
                ) : (
                    <Button
                        mode="contained-tonal"
                        icon="refresh"
                        onPress={() => setPhotoUri(null)}
                        buttonColor="#EEF2FF"
                        textColor="#4F46E5"
                        style={styles.actionButton}
                        labelStyle={styles.actionButtonLabel}
                    >
                        Repetir fotografía
                    </Button>
                )}

                <Button
                    mode="outlined"
                    icon="check"
                    onPress={finalizarAuditoria}
                    textColor="#0F172A"
                    style={styles.finishButton}
                    labelStyle={styles.finishButtonLabel}
                >
                    Finalizar auditoría
                </Button>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F8FAFC',
        paddingTop: 50,
        paddingHorizontal: 20,
        paddingBottom: 24,
        justifyContent: 'space-between',
    },
    loadingContainer: {
        flex: 1,
        backgroundColor: '#F8FAFC',
        justifyContent: 'center',
        alignItems: 'center',
    },
    loadingText: {
        color: '#6366F1',
        fontSize: 14,
        fontWeight: '600',
    },
    header: {
        alignItems: 'center',
        marginBottom: 12,
    },
    statusBadge: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        borderColor: '#E2E8F0',
        borderWidth: 1,
        paddingHorizontal: 14,
        paddingVertical: 6,
        borderRadius: 20,
    },
    statusLive: {
        width: 8,
        height: 8,
        borderRadius: 4,
        backgroundColor: '#10B981',
        marginRight: 8,
    },
    statusCaptured: {
        width: 8,
        height: 8,
        borderRadius: 4,
        backgroundColor: '#6366F1',
        marginRight: 8,
    },
    statusText: {
        color: '#475569',
        fontSize: 12,
        fontWeight: '600',
    },
    viewFrame: {
        flex: 1,
        borderRadius: 20,
        overflow: 'hidden',
        borderWidth: 1,
        borderColor: '#E2E8F0',
        backgroundColor: '#000000',
        position: 'relative',
    },
    camera: {
        flex: 1,
    },
    previewImage: {
        width: '100%',
        height: '100%',
    },
    photoTag: {
        position: 'absolute',
        bottom: 16,
        left: 16,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'rgba(255, 255, 255, 0.95)',
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#E2E8F0',
    },
    photoTagText: {
        color: '#0F172A',
        fontSize: 11,
        fontWeight: '700',
    },
    overlayCorners: {
        ...StyleSheet.absoluteFillObject,
        pointerEvents: 'none',
    },
    corner: {
        position: 'absolute',
        width: 20,
        height: 20,
        borderColor: '#FFFFFF',
    },
    topLeft: { top: 16, left: 16, borderTopWidth: 2, borderLeftWidth: 2 },
    topRight: { top: 16, right: 16, borderTopWidth: 2, borderRightWidth: 2 },
    bottomLeft: { bottom: 16, left: 16, borderBottomWidth: 2, borderLeftWidth: 2 },
    bottomRight: { bottom: 16, right: 16, borderBottomWidth: 2, borderRightWidth: 2 },
    controlsBar: {
        flexDirection: 'column',
        gap: 10,
        paddingTop: 16,
    },
    actionButton: {
        borderRadius: 12,
    },
    actionButtonLabel: {
        fontWeight: '700',
        fontSize: 13,
    },
    finishButton: {
        borderColor: '#CBD5E1',
        borderRadius: 12,
        backgroundColor: '#FFFFFF',
    },
    finishButtonLabel: {
        fontWeight: '700',
        fontSize: 13,
        color: '#0F172A',
    },
    permissionCard: {
        backgroundColor: '#FFFFFF',
        padding: 28,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#E2E8F0',
        alignItems: 'center',
    },
    permissionTitle: {
        color: '#0F172A',
        fontSize: 18,
        fontWeight: '700',
        marginBottom: 8,
    },
    permissionText: {
        color: '#64748B',
        textAlign: 'center',
        fontSize: 13,
        marginBottom: 20,
        lineHeight: 20,
    },
});