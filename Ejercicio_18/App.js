import React, { useState, useRef } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, FlatList } from 'react-native';
import { CameraView, useCameraPermissions } from 'expo-camera';

export default function App() {
  const [facing, setFacing] = useState('back');
  const [permission, requestPermission] = useCameraPermissions();
  const cameraRef = useRef(null);
  const [photos, setPhotos] = useState([]);

  if (!permission) {
    return (
      <View style={styles.loadingContainer}>
        <Text style={styles.loadingText}>INITIALIZING SENSORS...</Text>
      </View>
    );
  }

  if (!permission.granted) {
    return (
      <View style={styles.centeredContainer}>
        <View style={styles.permissionCard}>
          <Text style={styles.permissionIcon}>⚡</Text>
          <Text style={styles.permissionTitle}>ACCESO REQUERIDO</Text>
          <Text style={styles.message}>
            Se requiere autorización de cámara para activar el Stand Fotográfico Digital.
          </Text>
          <TouchableOpacity style={styles.buttonPermission} onPress={requestPermission}>
            <Text style={styles.buttonPermissionText}>CONCEDER ACCESO</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  const toggleCameraFacing = () => {
    setFacing((current) => (current === 'back' ? 'front' : 'back'));
  };

  const takePhoto = async () => {
    if (cameraRef.current) {
      try {
        const photoOptions = { quality: 0.8, skipProcessing: false };
        const photoData = await cameraRef.current.takePictureAsync(photoOptions);
        setPhotos((prevPhotos) => [photoData.uri, ...prevPhotos]);
      } catch (error) {
        console.error("Error al capturar la fotografía: ", error);
      }
    }
  };

  return (
    <View style={styles.container}>
      {/* Encabezado Tecnológico */}
      <View style={styles.headerContainer}>
        <View style={styles.badgeContainer}>
          <View style={styles.liveIndicator} />
          <Text style={styles.badgeText}>PHOTOBOOTH V2.0 // ONLINE</Text>
        </View>
        <Text style={styles.appTitle}>STAND FOTOGRÁFICO</Text>
        <Text style={styles.appDescription}>
          Estación digital de registro y captura instantánea de alta precisión.
        </Text>
      </View>

      {/* Frame de la Cámara estilo Visor Tecnológico */}
      <View style={styles.cameraFrame}>
        <CameraView style={styles.camera} facing={facing} ref={cameraRef}>
          {/* Marcas de Visor / Enfoque */}
          <View style={styles.overlayCorners}>
            <View style={[styles.corner, styles.topLeft]} />
            <View style={[styles.corner, styles.topRight]} />
            <View style={[styles.corner, styles.bottomLeft]} />
            <View style={[styles.corner, styles.bottomRight]} />
          </View>

          {/* Botones de Control Integrados */}
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.actionButton} onPress={toggleCameraFacing}>
              <Text style={styles.actionButtonText}>🔄 LENTE</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.captureButton} onPress={takePhoto}>
              <View style={styles.innerCaptureButton} />
            </TouchableOpacity>
          </View>
        </CameraView>
      </View>

      {/* Galería Inferior Estilo Dashboard de Almacenamiento */}
      <View style={styles.galleryContainer}>
        <View style={styles.galleryHeader}>
          <Text style={styles.galleryTitle}>REGISTROS CAPTURADOS</Text>
          <View style={styles.countBadge}>
            <Text style={styles.countText}>{photos.length} SLOTS</Text>
          </View>
        </View>

        <FlatList
          data={photos}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) => (
            <View style={styles.thumbnailWrapper}>
              <Image source={{ uri: item }} style={styles.thumbnail} />
              <Text style={styles.thumbnailTag}>#{photos.length - index}</Text>
            </View>
          )}
          ListEmptyComponent={
            <View style={styles.emptyContainer}>
              <Text style={styles.emptyText}>[ ESPERANDO CAPTURA DE DATOS ]</Text>
            </View>
          }
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0A0E17',
    paddingTop: 45,
  },
  loadingContainer: {
    flex: 1,
    backgroundColor: '#0A0E17',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    color: '#00F0FF',
    fontSize: 14,
    fontWeight: 'bold',
    letterSpacing: 2,
  },
  centeredContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#0A0E17',
  },
  permissionCard: {
    backgroundColor: '#131B2E',
    borderColor: '#00F0FF',
    borderWidth: 1,
    borderRadius: 16,
    padding: 25,
    alignItems: 'center',
    width: '90%',
  },
  permissionIcon: {
    fontSize: 40,
    marginBottom: 10,
  },
  permissionTitle: {
    color: '#00F0FF',
    fontSize: 18,
    fontWeight: 'bold',
    letterSpacing: 1.5,
    marginBottom: 10,
  },
  message: {
    fontSize: 13,
    textAlign: 'center',
    color: '#8A99AD',
    marginBottom: 20,
    lineHeight: 18,
  },
  buttonPermission: {
    backgroundColor: '#00F0FF',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  buttonPermissionText: {
    color: '#0A0E17',
    fontWeight: 'bold',
    fontSize: 12,
    letterSpacing: 1,
  },
  headerContainer: {
    paddingHorizontal: 20,
    paddingBottom: 12,
    alignItems: 'center',
  },
  badgeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 240, 255, 0.1)',
    borderColor: 'rgba(0, 240, 255, 0.3)',
    borderWidth: 1,
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
    marginBottom: 6,
  },
  liveIndicator: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#00FF66',
    marginRight: 6,
  },
  badgeText: {
    color: '#00F0FF',
    fontSize: 10,
    fontWeight: 'bold',
    letterSpacing: 1,
  },
  appTitle: {
    fontSize: 22,
    fontWeight: '900',
    color: '#FFFFFF',
    letterSpacing: 2,
  },
  appDescription: {
    fontSize: 12,
    color: '#6C7D93',
    textAlign: 'center',
    marginTop: 2,
  },
  cameraFrame: {
    flex: 1,
    marginHorizontal: 15,
    borderRadius: 16,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: 'rgba(0, 240, 255, 0.4)',
  },
  camera: {
    flex: 1,
    justifyContent: 'space-between',
    padding: 15,
  },
  overlayCorners: {
    ...StyleSheet.absoluteFillObject,
    pointerEvents: 'none',
  },
  corner: {
    position: 'absolute',
    width: 20,
    height: 20,
    borderColor: '#00F0FF',
  },
  topLeft: { top: 10, left: 10, borderTopWidth: 2, borderLeftWidth: 2 },
  topRight: { top: 10, right: 10, borderTopWidth: 2, borderRightWidth: 2 },
  bottomLeft: { bottom: 10, left: 10, borderBottomWidth: 2, borderLeftWidth: 2 },
  bottomRight: { bottom: 10, right: 10, borderBottomWidth: 2, borderRightWidth: 2 },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 'auto',
    paddingBottom: 10,
  },
  actionButton: {
    backgroundColor: 'rgba(19, 27, 46, 0.85)',
    borderColor: '#00F0FF',
    borderWidth: 1,
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderRadius: 20,
  },
  actionButtonText: {
    color: '#00F0FF',
    fontSize: 11,
    fontWeight: 'bold',
    letterSpacing: 1,
  },
  captureButton: {
    width: 68,
    height: 68,
    borderRadius: 34,
    borderWidth: 2,
    borderColor: '#00F0FF',
    backgroundColor: 'rgba(0, 240, 255, 0.15)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerCaptureButton: {
    width: 52,
    height: 52,
    borderRadius: 26,
    backgroundColor: '#00F0FF',
  },
  galleryContainer: {
    height: 160,
    backgroundColor: '#0D131E',
    borderTopWidth: 1,
    borderTopColor: 'rgba(0, 240, 255, 0.2)',
    padding: 15,
    marginTop: 10,
  },
  galleryHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  galleryTitle: {
    color: '#8A99AD',
    fontSize: 11,
    fontWeight: 'bold',
    letterSpacing: 1.5,
  },
  countBadge: {
    backgroundColor: 'rgba(0, 240, 255, 0.1)',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 4,
  },
  countText: {
    color: '#00F0FF',
    fontSize: 10,
    fontWeight: 'bold',
  },
  thumbnailWrapper: {
    marginRight: 12,
    position: 'relative',
  },
  thumbnail: {
    width: 85,
    height: 85,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: 'rgba(0, 240, 255, 0.4)',
  },
  thumbnailTag: {
    position: 'absolute',
    bottom: 4,
    right: 4,
    backgroundColor: 'rgba(10, 14, 23, 0.8)',
    color: '#00F0FF',
    fontSize: 9,
    fontWeight: 'bold',
    paddingHorizontal: 4,
    borderRadius: 2,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: 300,
  },
  emptyText: {
    color: '#3A485B',
    fontSize: 11,
    letterSpacing: 1.5,
  },
});