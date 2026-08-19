import React, { useState, useRef } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
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
                    <Feather name="shield-alert" size={36} color="#FF4500" style={{ marginBottom: 12 }} />
                    <Text style={styles.permissionTitle}>ACCESO REQUERIDO</Text>
                    <Text style={styles.permissionText}>Se requiere permiso de la cámara para capturar evidencias.</Text>
                    <TouchableOpacity style={styles.primaryButton} onPress={requestPermission}>
                        <Text style={styles.buttonText}>PERMITIR ACCESO</Text>
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
            } catch (error) {
                console.error("Error al capturar la fotografía: ", error);
            }
        }
    };

    return (
        <View style={styles.container}>
            {/* BARRA SUPERIOR */}
            <View style={styles.header}>
                <View style={styles.statusBadge}>
                    <View style={photoUri ? styles.statusCaptured : styles.statusLive} />
                    <Text style={styles.statusText}>
                        {photoUri ? "EVIDENCIA REGISTRADA" : "VISOR ACTIVO"}
                    </Text>
                </View>
            </View>

            {/* ÁREA CENTRAL (PREVIEW O CÁMARA) */}
            {photoUri ? (
                <View style={styles.viewFrame}>
                    <Image source={{ uri: photoUri }} style={styles.previewImage} />
                    <View style={styles.photoTag}>
                        <Ionicons name="document-text-outline" size={12} color="#FF7A00" style={{ marginRight: 6 }} />
                        <Text style={styles.photoTagText}>IMG_EVIDENCIA.JPG</Text>
                    </View>
                </View>
            ) : (
                <View style={styles.viewFrame}>
                    <CameraView style={styles.camera} facing="back" ref={cameraRef}>
                        {/* Esquinas minimalistas neón */}
                        <View style={styles.overlayCorners}>
                            <View style={[styles.corner, styles.topLeft]} />
                            <View style={[styles.corner, styles.topRight]} />
                            <View style={[styles.corner, styles.bottomLeft]} />
                            <View style={[styles.corner, styles.bottomRight]} />
                        </View>
                    </CameraView>
                </View>
            )}

            {/* PANEL INFERIOR DE ACCIONES */}
            <View style={styles.controlsBar}>
                {/* Botón Atrás */}
                <TouchableOpacity
                    style={styles.backButton}
                    activeOpacity={0.7}
                    onPress={() => navigation.goBack()}
                >
                    <Ionicons name="chevron-back" size={20} color="#FF7A00" />
                    <Text style={styles.backButtonText}>REGRESAR</Text>
                </TouchableOpacity>

                {/* Botón Capturar o Repetir */}
                {!photoUri ? (
                    <TouchableOpacity
                        style={styles.captureButton}
                        activeOpacity={0.8}
                        onPress={takePhoto}
                    >
                        <View style={styles.innerCaptureButton}>
                            <Ionicons name="aperture-outline" size={28} color="#000000" />
                        </View>
                    </TouchableOpacity>
                ) : (
                    <TouchableOpacity
                        style={styles.retakeButton}
                        activeOpacity={0.8}
                        onPress={() => setPhotoUri(null)}
                    >
                        <Ionicons name="refresh-outline" size={16} color="#000000" style={{ marginRight: 6 }} />
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
        backgroundColor: '#0A0505',
        paddingTop: 50,
        paddingHorizontal: 20,
        paddingBottom: 20,
        justifyContent: 'space-between',
    },
    loadingContainer: {
        flex: 1,
        backgroundColor: '#0A0505',
        justifyContent: 'center',
        alignItems: 'center',
    },
    loadingText: {
        color: '#FF4500',
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
        backgroundColor: '#140A0A',
        borderColor: 'rgba(255, 69, 0, 0.3)',
        borderWidth: 1,
        paddingHorizontal: 14,
        paddingVertical: 6,
        borderRadius: 20,
    },
    statusLive: {
        width: 6,
        height: 6,
        borderRadius: 3,
        backgroundColor: '#FF4500',
        marginRight: 8,
    },
    statusCaptured: {
        width: 6,
        height: 6,
        borderRadius: 3,
        backgroundColor: '#FF7A00',
        marginRight: 8,
    },
    statusText: {
        color: '#FF7A00',
        fontSize: 10,
        fontWeight: '700',
        letterSpacing: 1.5,
    },
    viewFrame: {
        flex: 1,
        borderRadius: 24,
        overflow: 'hidden',
        borderWidth: 1,
        borderColor: 'rgba(255, 69, 0, 0.4)',
        backgroundColor: '#120A0A',
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
        backgroundColor: 'rgba(10, 5, 5, 0.85)',
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: 'rgba(255, 69, 0, 0.3)',
    },
    photoTagText: {
        color: '#FFFFFF',
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
        borderColor: '#FF4500',
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
        backgroundColor: '#140A0A',
        borderColor: 'rgba(255, 69, 0, 0.3)',
        borderWidth: 1,
        paddingVertical: 12,
        paddingHorizontal: 18,
        borderRadius: 14,
    },
    backButtonText: {
        color: '#FF7A00',
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
        borderColor: '#FF4500',
        backgroundColor: 'rgba(255, 69, 0, 0.15)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    innerCaptureButton: {
        width: 52,
        height: 52,
        borderRadius: 26,
        backgroundColor: '#FF4500',
        justifyContent: 'center',
        alignItems: 'center',
    },
    retakeButton: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FF4500',
        paddingVertical: 14,
        paddingHorizontal: 20,
        borderRadius: 14,
    },
    retakeText: {
        color: '#000000',
        fontSize: 11,
        fontWeight: '900',
        letterSpacing: 1.5,
    },
    permissionCard: {
        backgroundColor: '#120A0A',
        padding: 28,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#FF4500',
        alignItems: 'center',
    },
    permissionTitle: {
        color: '#FFFFFF',
        fontSize: 15,
        fontWeight: '800',
        letterSpacing: 1.5,
        marginBottom: 8,
    },
    permissionText: {
        color: '#8C7A7A',
        textAlign: 'center',
        fontSize: 12,
        marginBottom: 20,
        lineHeight: 18,
    },
    primaryButton: {
        backgroundColor: '#FF4500',
        paddingVertical: 12,
        paddingHorizontal: 24,
        borderRadius: 10,
    },
    buttonText: {
        color: '#000000',
        fontWeight: '900',
        fontSize: 11,
        letterSpacing: 1,
    },
});