import { NavigationContainer, Theme } from "@react-navigation/native";
import { useTheme } from "@rneui/themed";
import React, { FC, useEffect } from "react";
import { Dimensions } from "react-native";
import RootNavigatior from "./RootNavigation";

const Navigator: FC = () => {

  const { theme, updateTheme } = useTheme();

  useEffect(() => {
    (() => {
      const { height } = Dimensions.get('window');

      updateTheme((_theme) => ({
        headerHeight: 49,
        screenWithHeader: height - _theme.headerHeight,
        screenWithTwoHeader: height - _theme.headerHeight * 2,
      }))
    })();
  }, [])

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
