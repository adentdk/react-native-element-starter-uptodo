import { ThemeProvider } from '@rneui/themed';
import Navigator from 'navigator';
import React, { FC } from 'react';
import { StatusBar } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import theme from './src/theme'

const App: FC = () => {
  return (
    <SafeAreaProvider>
      <ThemeProvider theme={theme}>
        <Navigator />
      </ThemeProvider>
    </SafeAreaProvider>
  )
}

export default App;