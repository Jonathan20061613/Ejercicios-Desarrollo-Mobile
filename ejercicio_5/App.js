import React from 'react';
import { View, StyleSheet } from 'react-native';

export default function ContenedoresFlex() {
  return (
    <View style={styles.padre}>
      <View style={[styles.caja, styles.rojo]} />
      <View style={[styles.caja, styles.verde]} />
      <View style={[styles.caja, styles.azul]} />
    </View>
  );
}

const styles = StyleSheet.create({
  padre: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  caja: {
    width: 60,
    height: 60,
  },
  rojo: {
    backgroundColor: 'red',
  },
  verde: {
    backgroundColor: 'green',
  },
  azul: {
    backgroundColor: 'blue',
  },
});

