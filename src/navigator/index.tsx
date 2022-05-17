import { NavigationContainer, Theme } from "@react-navigation/native";
import { useTheme } from "@rneui/themed";
import React, { FC, useEffect } from "react";
import { Dimensions, useColorScheme } from "react-native";
import RootNavigatior from "./RootNavigation";

const Navigator: FC = () => {

  const { theme, updateTheme } = useTheme();

  const colorScheme = useColorScheme();

  useEffect(() => {
    (() => {
      const { height } = Dimensions.get('window');

      updateTheme((_theme) => ({
        screenWithHeader: height - (_theme?.headerHeight || 0),
        screenWithTwoHeader: height - (_theme?.headerHeight || 0 * 2),
      }))
    })();
  }, [])

  useEffect(() => {
    (() => {
      updateTheme(() => {
        return {
          mode: colorScheme === 'dark' ? 'dark' : 'light',
        }
      })
    })()
  }, [colorScheme])

  return (
    <NavigationContainer
      theme={{
        dark: theme.mode === "dark",
        colors: {
          primary: theme.colors.primary,
          card: theme.colors.background,
          background: theme.colors.background,
          text: theme.colors.black,
          border: theme.colors.greyOutline,
          notification: theme.colors.black,
        },
      }}>
      <RootNavigatior />
    </NavigationContainer>
  )
}

export default Navigator;
