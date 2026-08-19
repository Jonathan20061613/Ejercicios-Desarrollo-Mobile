import React, { useState, useRef } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, Alert } from 'react-native';
import { CameraView, useCameraPermissions } from 'expo-camera';
import { Ionicons, Feather } from '@expo/vector-icons';

export default function CamaraScreen({ navigation }) {
    const [permission, requestPermission] = useCameraPermissions();
    const [photoUri, setPhotoUri] = useState(null);
    const cameraRef = useRef(null);

    if (!permission) {
        return (
            <View style={styles.loadingContainer}>
                <Text style={styles.loadingText}>INICIALIZANDO SENSOR...</Text>
            </View>
        );
    }

    if (!permission.granted) {
        return (
            <View style={styles.container}>
                <View style={styles.permissionCard}>
                    <Feather name="shield-alert" size={36} color="#38BDF8" style={{ marginBottom: 12 }} />
                    <Text style={styles.permissionTitle}>ACCESO REQUERIDO</Text>
                    <Text style={styles.permissionText}>Se requiere acceso a la cámara para capturar evidencias del producto.</Text>
                    <TouchableOpacity style={styles.primaryButton} onPress={requestPermission}>
                        <Text style={styles.buttonText}>PERMITIR CÁMARA</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }

    const takePhoto = async () => {
        if (cameraRef.current) {
            try {
                const photo = await cameraRef.current.takePictureAsync({ quality: 0.85 });
                setPhotoUri(photo.uri);
                Alert.alert('Fotografía tomada', 'La evidencia ha sido capturada correctamente.');
            } catch (error) {
                console.error("Error al capturar la fotografía: ", error);
            }
        }
    };

    return (
        <View style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <View style={styles.statusBadge}>
                    <View style={photoUri ? styles.statusCaptured : styles.statusLive} />
                    <Text style={styles.statusText}>
                        {photoUri ? "CAPTURA REALIZADA" : "VISOR EN VIVO"}
                    </Text>
                </View>
            </View>

            {/* Visor o Imagen Capturada */}
            {photoUri ? (
                <View style={styles.viewFrame}>
                    <Image source={{ uri: photoUri }} style={styles.previewImage} />
                    <View style={styles.photoTag}>
                        <Ionicons name="checkmark-circle-outline" size={14} color="#38BDF8" style={{ marginRight: 6 }} />
                        <Text style={styles.photoTagText}>CAPTURA_TEMP.JPG</Text>
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

            {/* Barra Inferior de Acciones */}
            <View style={styles.controlsBar}>
                <TouchableOpacity
                    style={styles.backButton}
                    activeOpacity={0.7}
                    onPress={() => navigation.goBack()}
                >
                    <Ionicons name="chevron-back" size={20} color="#94A3B8" />
                    <Text style={styles.backButtonText}>REGRESAR</Text>
                </TouchableOpacity>

                {!photoUri ? (
                    <TouchableOpacity
                        style={styles.captureButton}
                        activeOpacity={0.8}
                        onPress={takePhoto}
                    >
                        <View style={styles.innerCaptureButton}>
                            <Ionicons name="aperture-outline" size={28} color="#030712" />
                        </View>
                    </TouchableOpacity>
                ) : (
                    <TouchableOpacity
                        style={styles.retakeButton}
                        activeOpacity={0.8}
                        onPress={() => setPhotoUri(null)}
                    >
                        <Ionicons name="refresh-outline" size={16} color="#030712" style={{ marginRight: 6 }} />
                        <Text style={styles.retakeText}>REPETIR</Text>
                    </TouchableOpacity>
                )}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0B0F17',
        paddingTop: 50,
        paddingHorizontal: 20,
        paddingBottom: 24,
        justifyContent: 'space-between',
    },
    loadingContainer: {
        flex: 1,
        backgroundColor: '#0B0F17',
        justifyContent: 'center',
        alignItems: 'center',
    },
    loadingText: {
        color: '#38BDF8',
        fontSize: 11,
        fontWeight: '700',
        letterSpacing: 2,
    },
    header: {
        alignItems: 'center',
        marginBottom: 12,
    },
    statusBadge: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#111827',
        borderColor: '#1E293B',
        borderWidth: 1,
        paddingHorizontal: 14,
        paddingVertical: 6,
        borderRadius: 20,
    },
    statusLive: {
        width: 6,
        height: 6,
        borderRadius: 3,
        backgroundColor: '#38BDF8',
        marginRight: 8,
    },
    statusCaptured: {
        width: 6,
        height: 6,
        borderRadius: 3,
        backgroundColor: '#818CF8',
        marginRight: 8,
    },
    statusText: {
        color: '#94A3B8',
        fontSize: 10,
        fontWeight: '700',
        letterSpacing: 1.5,
    },
    viewFrame: {
        flex: 1,
        borderRadius: 24,
        overflow: 'hidden',
        borderWidth: 1,
        borderColor: '#1E293B',
        backgroundColor: '#111827',
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
        backgroundColor: 'rgba(11, 15, 23, 0.85)',
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: 'rgba(56, 189, 248, 0.3)',
    },
    photoTagText: {
        color: '#F8FAFC',
        fontSize: 10,
        fontWeight: '600',
        letterSpacing: 1,
    },
    overlayCorners: {
        ...StyleSheet.absoluteFillObject,
        pointerEvents: 'none',
    },
    corner: {
        position: 'absolute',
        width: 20,
        height: 20,
        borderColor: '#38BDF8',
    },
    topLeft: { top: 16, left: 16, borderTopWidth: 2, borderLeftWidth: 2 },
    topRight: { top: 16, right: 16, borderTopWidth: 2, borderRightWidth: 2 },
    bottomLeft: { bottom: 16, left: 16, borderBottomWidth: 2, borderLeftWidth: 2 },
    bottomRight: { bottom: 16, right: 16, borderBottomWidth: 2, borderRightWidth: 2 },
    controlsBar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: 20,
        paddingHorizontal: 8,
    },
    backButton: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#111827',
        borderColor: '#1E293B',
        borderWidth: 1,
        paddingVertical: 12,
        paddingHorizontal: 18,
        borderRadius: 14,
    },
    backButtonText: {
        color: '#94A3B8',
        fontSize: 11,
        fontWeight: '700',
        letterSpacing: 1.5,
        marginLeft: 4,
    },
    captureButton: {
        width: 68,
        height: 68,
        borderRadius: 34,
        borderWidth: 2,
        borderColor: '#38BDF8',
        backgroundColor: 'rgba(56, 189, 248, 0.15)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    innerCaptureButton: {
        width: 52,
        height: 52,
        borderRadius: 26,
        backgroundColor: '#38BDF8',
        justifyContent: 'center',
        alignItems: 'center',
    },
    retakeButton: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#38BDF8',
        paddingVertical: 14,
        paddingHorizontal: 20,
        borderRadius: 14,
    },
    retakeText: {
        color: '#030712',
        fontSize: 11,
        fontWeight: '900',
        letterSpacing: 1.5,
    },
    permissionCard: {
        backgroundColor: '#111827',
        padding: 28,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#1E293B',
        alignItems: 'center',
    },
    permissionTitle: {
        color: '#F8FAFC',
        fontSize: 15,
        fontWeight: '800',
        letterSpacing: 1.5,
        marginBottom: 8,
    },
    permissionText: {
        color: '#94A3B8',
        textAlign: 'center',
        fontSize: 12,
        marginBottom: 20,
        lineHeight: 18,
    },
    primaryButton: {
        backgroundColor: '#38BDF8',
        paddingVertical: 12,
        paddingHorizontal: 24,
        borderRadius: 10,
    },
    buttonText: {
        color: '#030712',
        fontWeight: '900',
        fontSize: 11,
        letterSpacing: 1,
    },
});