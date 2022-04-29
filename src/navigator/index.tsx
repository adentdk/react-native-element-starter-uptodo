import { NavigationContainer, Theme } from "@react-navigation/native";
import { useTheme } from "@rneui/themed";
import React, { FC } from "react";
import RootNavigatior from "./RootNavigation";

const Navigator: FC = () => {

  const { theme } = useTheme();

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
