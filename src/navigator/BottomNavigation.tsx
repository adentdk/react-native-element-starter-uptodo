import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useTheme } from '@rneui/themed';
import React, { Fragment } from "react";

import HomeIcon from '@assets/icons/home.svg';
import CalendarIcon from '@assets/icons/calendar.svg';
import FocusIcon from '@assets/icons/clock.svg';
import ProfileIcon from '@assets/icons/user.svg';

import BlankScreen from 'screens/BlankScreen';
import Home from 'screens/Home';
import AddNewTask from 'components/AddNewTask';

const BottomNavigation = () => {
  const { Navigator, Screen } = createBottomTabNavigator<iNavigator.BottomParamList>();

  const { theme } = useTheme();

  return (
    <Fragment>

      <Navigator
        screenOptions={({ route }) => ({
          tabBarHideOnKeyboardDismiss: true,
          headerShadowVisible: false,
          headerTitleAlign: 'center',
          headerTintColor: theme.colors.black,
          headerStyle: {
            backgroundColor: theme.colors.background,
          },
          tabBarStyle: {
            height: 64,
            alignItems: 'center',
            backgroundColor: theme.colors.card,
            borderTopWidth: 0,
          },
          tabBarLabelStyle: {
            fontSize: 12,
            fontFamily: theme.fontFamilies?.regular
          },
          tabBarItemStyle: [
            {
              paddingBottom: 8,
              marginLeft: 16,
            },
            route.name === 'Focus' && {
              marginLeft: 92,
            },
            route.name === 'Profile' && {
              marginRight: 16,
            },
          ],
        })}
        backBehavior="initialRoute"
      >
        <Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: ({ color }) => (
              <HomeIcon fill={color} />
            ),
          }}
        />
        <Screen
          name="Calendar"
          component={BlankScreen}
          options={{
            tabBarIcon: ({ color }) => (
              <CalendarIcon fill={color} />
            ),
          }}
        />
        <Screen
          name="Focus"
          component={BlankScreen}
          options={{
            tabBarIcon: ({ color }) => (
              <FocusIcon fill={color} />
            ),
          }}
        />
        <Screen
          name="Profile"
          component={BlankScreen}
          options={{
            tabBarIcon: ({ color }) => (
              <ProfileIcon fill={color} />
            ),
          }}
        />
      </Navigator>

      <AddNewTask />
    </Fragment>
  )
}

export default BottomNavigation;