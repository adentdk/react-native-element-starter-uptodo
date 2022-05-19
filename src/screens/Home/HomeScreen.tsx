
import Main from "design-system/templates/Main";
import React, { FC, useLayoutEffect } from "react";
import { ScrollView } from "react-native";
import EmptyTask from "./components/EmptyTask";
import { useStyles } from "./styles";

import SortIcon from "@assets/icons/sort.svg"
import { iHomeScreen } from "./types";
import { Avatar, useTheme } from "@rneui/themed";

const HomeScreen: FC<iHomeScreen.Props> = ({ navigation }) => {
  const styles = useStyles();

  const {theme} = useTheme();

  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Home',
      headerLeft: ({ tintColor }) => (
        <SortIcon style={styles.navigationHeaderButton} fill={tintColor} />
      ),
      headerRight: () => (
        <Avatar title="A" containerStyle={[styles.navigationHeaderButton, {backgroundColor: theme.colors.primary}]} rounded />
      ),
    });
  }, [navigation]);

  return (
    <Main>
      <ScrollView style={styles.body}>
        <EmptyTask />
      </ScrollView>
    </Main>
  )
}

export default HomeScreen;
