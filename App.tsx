import { ThemeProvider } from '@rneui/themed';
import Navigator from 'navigator';
import React, { FC } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import DatabaseProvider from '@nozbe/watermelondb/DatabaseProvider'

import database from './src/db';

import theme from './src/theme'

const App: FC = () => {
  return (
    <SafeAreaProvider>
      <ThemeProvider theme={theme}>
        <DatabaseProvider database={database}>
          <Navigator />
        </DatabaseProvider>
      </ThemeProvider>
    </SafeAreaProvider>
  )
}

export default App;