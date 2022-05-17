import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { FC } from 'react';

import Intro from '@screens/Intro';
import OnBoarding from '@screens/OnBoarding';
import GetStart from 'screens/GetStart';

import Icon from 'react-native-vector-icons/Octicons';
import { useTheme } from '@rneui/themed';
import Login from 'screens/Login';
import Register from 'screens/Register';

const RootNavigatior: FC = ({ }) => {
  const { Navigator, Group, Screen } = createNativeStackNavigator<iNavigator.RootParamList>();
  const {theme} = useTheme();
  return (
    <Navigator
      screenOptions={{
        headerBackImageSource: { ...Icon.getImageSourceSync('chevron-left', 24, theme.colors.black), width: 24, height: 24 },
        headerShadowVisible: false,
      }}
      initialRouteName="Login"> 

      {/* with transparent header */}
      <Group
        screenOptions={{
          headerTransparent: true,
        }}>
        <Screen
          options={{
            headerShown: false,
          }}
          name="Intro"
          component={Intro}
        />
        <Screen
          options={{
            title: ''
          }}
          name="OnBoarding"
          component={OnBoarding}
        />
      </Group>

      <Screen options={{title: ''}} name="GetStart" component={GetStart} />
      <Screen options={{title: ''}} name="Login" component={Login} />
      <Screen options={{title: ''}} name="Register" component={Register} />
    </Navigator>
  )
}

export default RootNavigatior;
