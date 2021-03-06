import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { FC } from 'react';

import Intro from '@screens/Intro';
import OnBoarding from '@screens/OnBoarding';
import GetStart from 'screens/GetStart';

import Icon from 'react-native-vector-icons/Octicons';
import { useTheme } from '@rneui/themed';
import Login from 'screens/Login';
import Register from 'screens/Register';
import BottomNavigation from './BottomNavigation';
import CreateCategory from 'screens/CreateCategory';

const RootNavigatior: FC = ({ }) => {
  const { Navigator, Group, Screen } = createNativeStackNavigator<iNavigator.RootParamList>();
  const {theme} = useTheme();
  return (
    <Navigator
      screenOptions={{
        headerBackImageSource: { ...Icon.getImageSourceSync('chevron-left', 24, theme.colors.black), width: 24, height: 24 },
        headerShadowVisible: false,
        headerTintColor: theme.colors.black,
      }}
      initialRouteName="Main"> 

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

      <Group>
        <Screen
          options={{
            headerShown: false,
          }}
          name="Main"
          component={BottomNavigation}
        />

        <Screen
          name="CreateCategory"
          component={CreateCategory}
        />
      </Group>
    </Navigator>
  )
}

export default RootNavigatior;
