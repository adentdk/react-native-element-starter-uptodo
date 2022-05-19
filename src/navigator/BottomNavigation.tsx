import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useTheme } from '@rneui/themed';
import React from "react";
import BlankScreen from 'screens/BlankScreen';
import Home from 'screens/Home';

const BottomNavigation = () => {
  const { Navigator, Screen } = createBottomTabNavigator<iNavigator.BottomParamList>();

  const { theme } = useTheme();

  return (
    <Navigator
      screenOptions={({ route }) => ({
        headerShadowVisible: false,
        headerTitleAlign: 'center',
        headerTintColor: theme.colors.black,
      })}
    >
      <Screen
        name="Home"
        component={Home}
      />
      <Screen name="Calendar" component={BlankScreen} />
      <Screen name="Focus" component={BlankScreen} />
      <Screen name="Profile" component={BlankScreen} />
    </Navigator>
  )
}

export default BottomNavigation;