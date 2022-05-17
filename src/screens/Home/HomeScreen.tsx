import { Text } from "@rneui/themed";
import Main from "components/templates/Main";
import React, {FC} from "react";
import { ScrollView } from "react-native";
import { useStyles } from "./styles";

const HomeScreen: FC = () => {
  const styles = useStyles();

  return (
    <Main>
      <ScrollView style={styles.body}>
        <Text>What do you want to do today?</Text>
      </ScrollView>
    </Main>
  )
}

export default HomeScreen;
