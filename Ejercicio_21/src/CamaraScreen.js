import React, { useState, useRef } from 'react';
import { View, StyleSheet, Image, Alert } from 'react-native';
import { Text, Button } from 'react-native-paper';
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
                    <Text style={styles.permissionText}>Se requiere acceso a la cámara para capturar evidencias escolares.</Text>
                    <Button mode="contained" onPress={requestPermission} buttonColor="#38BDF8" textColor="#030712">
                        PERMITIR CÁMARA
                    </Button>
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
                        {photoUri ? "EVIDENCIA CAPTURADA" : "VISOR EN VIVO"}
                    </Text>
                </View>
            </View>

            {/* Visor / Vista Previa */}
            {photoUri ? (
                <View style={styles.viewFrame}>
                    <Image source={{ uri: photoUri }} style={styles.previewImage} />
                    <View style={styles.photoTag}>
                        <Ionicons name="checkmark-circle-outline" size={14} color="#38BDF8" style={{ marginRight: 6 }} />
                        <Text style={styles.photoTagText}>EVIDENCIA_ESCOLAR.JPG</Text>
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

            {/* Botones Tomar Fotografía y Regresar */}
            <View style={styles.controlsBar}>
                <Button
                    mode="outlined"
                    icon="arrow-left"
                    onPress={() => navigation.goBack()}
                    textColor="#94A3B8"
                    style={styles.backButton}
                >
                    REGRESAR
                </Button>

                {!photoUri ? (
                    <Button
                        mode="contained"
                        icon="camera"
                        onPress={takePhoto}
                        buttonColor="#38BDF8"
                        textColor="#030712"
                        style={styles.actionButton}
                        labelStyle={styles.actionButtonLabel}
                    >
                        TOMAR FOTOGRAFÍA
                    </Button>
                ) : (
                    <Button
                        mode="contained"
                        icon="refresh"
                        onPress={() => setPhotoUri(null)}
                        buttonColor="#38BDF8"
                        textColor="#030712"
                        style={styles.actionButton}
                        labelStyle={styles.actionButtonLabel}
                    >
                        REPETIR
                    </Button>
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
        paddingTop: 16,
        gap: 12,
    },
    backButton: {
        borderColor: '#1E293B',
        borderRadius: 12,
    },
    actionButton: {
        borderRadius: 12,
        flex: 1,
    },
    actionButtonLabel: {
        fontWeight: '900',
        fontSize: 10,
        letterSpacing: 1,
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
});