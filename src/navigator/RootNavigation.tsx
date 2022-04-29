import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { FC } from 'react';

import IntroScreen from '@screens/Intro';
import OnBoardingScreen from '@screens/OnBoarding';

const RootNavigatior: FC = ({ }) => {
  const { Navigator, Group, Screen } = createNativeStackNavigator<iNavigator.RootParamList>();
  return (
    <Navigator initialRouteName="Intro">
      <Group
        screenOptions={{
          headerTransparent: true,
        }}>
        <Screen
          options={{
            headerShown: false,
          }}
          name="Intro"
          component={IntroScreen}
        />
        <Screen
          options={{
            title: ''
          }}
          name="OnBoarding"
          component={OnBoardingScreen}
        />
      </Group>
    </Navigator>
  )
}

export default RootNavigatior;
