import React from 'react';
import { ScrollView, View, Text, StyleSheet, Image } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function App() {
  const user = {
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
    city: "Gwenborough",
    company: "Romaguera-Crona",
    phrase: "Multi-layered client-server neural-net"
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.banner} />

      <View style={styles.profileContainer}>
        <Image
          source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-IsYucQaLfSkhJ1OLLeWOoWmeF3hFO-DBuDEg54-3caRlS-curfMvCGP8&s=10' }}
          style={styles.profileImage}
        />
        <Text style={styles.name}>{user.name}</Text>
        <Text style={styles.job}>{user.company}</Text>
        <Text style={styles.phrase}>"{user.phrase}"</Text>
      </View>

      <View style={styles.statsContainer}>
        <View style={styles.statBox}>
          <Text style={styles.number}>18</Text>
          <Text style={styles.label}>Proyectos</Text>
        </View>
        <View style={styles.statBox}>
          <Text style={styles.number}>2.3K</Text>
          <Text style={styles.label}>Seguidores</Text>
        </View>
        <View style={styles.statBox}>
          <Text style={styles.number}>12</Text>
          <Text style={styles.label}>Certificados</Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.title}>Biografía</Text>
        <Text style={styles.bio}>
          Especialista en desarrollo e integración de sistemas. Enfocada en soluciones de red e infraestructura para aplicaciones escalables y eficientes en entornos empresariales.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.title}>Contacto</Text>
        
        <View style={styles.item}>
          <MaterialIcons name="email" size={24} color="#1976D2" />
          <Text style={styles.itemText}>{user.email}</Text>
        </View>

        <View style={styles.item}>
          <MaterialIcons name="phone" size={24} color="#1976D2" />
          <Text style={styles.itemText}>{user.phone}</Text>
        </View>

        <View style={styles.item}>
          <MaterialIcons name="language" size={24} color="#1976D2" />
          <Text style={styles.itemText}>{user.website}</Text>
        </View>

        <View style={styles.item}>
          <MaterialIcons name="location-on" size={24} color="#1976D2" />
          <Text style={styles.itemText}>{user.city}</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F6F9',
  },
  banner: {
    height: 180,
    backgroundColor: '#1976D2',
  },
  profileContainer: {
    alignItems: 'center',
    marginTop: -70,
  },
  profileImage: {
    width: 140,
    height: 140,
    borderRadius: 70,
    borderWidth: 5,
    borderColor: '#FFF',
  },
  name: {
    fontSize: 26,
    fontWeight: 'bold',
    marginTop: 15,
    color: '#333',
  },
  job: {
    fontSize: 16,
    color: '#1976D2',
    fontWeight: '600',
    marginTop: 5,
  },
  phrase: {
    fontSize: 13,
    color: 'gray',
    fontStyle: 'italic',
    marginTop: 4,
    textAlign: 'center',
    paddingHorizontal: 20,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 25,
    marginHorizontal: 20,
    backgroundColor: '#FFF',
    borderRadius: 15,
    padding: 20,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  statBox: {
    alignItems: 'center',
  },
  number: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#1976D2',
  },
  label: {
    color: 'gray',
    fontSize: 13,
    marginTop: 5,
  },
  section: {
    marginTop: 20,
    marginHorizontal: 20,
    backgroundColor: '#FFF',
    padding: 20,
    borderRadius: 15,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    marginBottom: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#333',
  },
  bio: {
    fontSize: 15,
    lineHeight: 22,
    color: '#555',
    textAlign: 'justify',
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  itemText: {
    fontSize: 15,
    marginLeft: 12,
    color: '#444',
  },
});