import React from 'react';
import { PaperProvider, MD3LightTheme } from 'react-native-paper';
import { SafeAreaView, ScrollView } from 'react-native';
import AprendizCard from './components/AprendizCard';

const theme = {
  ...MD3LightTheme,
  colors: {
    ...MD3LightTheme.colors,
    primary: '#1B4D3E',
    background: '#E8F0EC',
    surface: '#FFFFFF',
    text: '#0D261F',
  },
};

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <SafeAreaView style={{ flex: 1, backgroundColor: theme.colors.background }}>
        <ScrollView>
          <AprendizCard
            nombre="Juan Guerrero"
            programa="ADSO"
            ficha="2876543"
            telefono="+57 300 123 4567"
            avance={0.80}
            foto="https://desarrolloeconomico.gov.co/wp-content/uploads/2025/11/PerfilLaboral.jpg"
          />
          <AprendizCard
            nombre="Laura Portilla"
            programa="Multimedia"
            ficha="2899999"
            telefono="+57 315 987 6543"
            avance={0.55}
            foto="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTS4yEVc-9xMtpK9FefY1Pz1f-LMa9t0TX4vGckeTODm_lzpC2TgmjQCs7R&s=10"
          />
          <AprendizCard
            nombre="Pablo Goméz"
            programa="Contabilidad"
            ficha="3001234"
            telefono="+57 320 456 7890"
            avance={0.95}
            foto="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3wOXCHfXy-GStzg00kCE7M5DBkKJQSWBkCQz4nMVjrw&s=10"
          />
        </ScrollView>
      </SafeAreaView>
    </PaperProvider>
  );
}