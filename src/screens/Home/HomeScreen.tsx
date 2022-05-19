
import Main from "components/templates/Main";
import React, { FC, useLayoutEffect } from "react";
import { ScrollView } from "react-native";
import EmptyTask from "./components/EmptyTask";
import { useStyles } from "./styles";

import SortIcon from "@assets/icons/sort.svg"
import { iHomeScreen } from "./types";
import { Avatar } from "@rneui/themed";

const HomeScreen: FC<iHomeScreen.Props> = ({ navigation }) => {
  const styles = useStyles();

  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Home',
      headerLeft: ({ tintColor }) => (
        <SortIcon style={styles.navigationHeaderButton} fill={tintColor} />
      ),
      headerRight: ({tintColor}) => (
        <Avatar title="A" containerStyle={[styles.navigationHeaderButton, {backgroundColor: tintColor}]} rounded />
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
