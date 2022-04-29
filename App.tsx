import React, { FC } from 'react';
import { Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const App: FC = () => {
  return (
    <SafeAreaProvider>
      <View>
        <Text>Hello</Text>
      </View>
    </SafeAreaProvider>
  )
}

export default App;