import React, { useState } from 'react';
import { SafeAreaView, StatusBar, StyleSheet, Text } from 'react-native';
import { gStyle } from './styles/style';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import FirstStack from './navigate';

const fonts = () => Font.loadAsync({
  'source-sans': require('./assets/fonts/SourceSansPro-SemiBold.ttf'),
  'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
  'bold': require('./assets/fonts/exljbris-Museo-Cyrl-700.ttf'),
  'normal': require('./assets/fonts/exljbris-Museo-Cyrl-500.ttf')
});

export default function App() {
  const [font, setFont] = useState(false);

  if (font) {
    return (
      <FirstStack />
    );
  } else {
    return (
      <AppLoading
        startAsync={fonts} onFinish={() => setFont(true)}
        onError={console.warn}
      />
    )
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
