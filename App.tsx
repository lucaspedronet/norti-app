import 'react-native-gesture-handler';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import AppLoading from 'expo-app-loading';
import { 
  useFonts, 
  Poppins_400Regular, 
  Poppins_500Medium, 
  Poppins_700Bold 
} from '@expo-google-fonts/poppins';

import { HooksProvider } from './src/hooks';
import { theme } from './src/globals/styles/theme';

import { RouteApp } from './src/routes/app.routes';

export default function App() {
  const [fontLoading] = useFonts({
    Poppins_400Regular, 
    Poppins_500Medium, 
    Poppins_700Bold
  })

  if (!fontLoading) {
    return <AppLoading />;
  }

  return (
    <ThemeProvider theme={theme}>
      <HooksProvider>
        <RouteApp />
      </HooksProvider>
    </ThemeProvider>
  )
}