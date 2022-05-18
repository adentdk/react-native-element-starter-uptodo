
import { Text } from "@rneui/themed";
import Main from "components/templates/Main";
import React, {FC} from "react";
import { ScrollView, View } from "react-native";
import EmptyTask from "./components/EmptyTask";
import { useStyles } from "./styles";

const HomeScreen: FC = () => {
  const styles = useStyles();

  return (
    <Main>
      <ScrollView style={styles.body}>
        <EmptyTask />
      </ScrollView>
    </Main>
  )
}

export default HomeScreen;
