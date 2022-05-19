import ChecklistPeople from '@assets/svg-ilustrations/ChecklistPeople.svg';
import { Text } from "@rneui/themed";
import React, { FC } from "react";
import { View } from "react-native";
import { useStyles } from '../styles';

const EmptyTask: FC = () => {
  const styles = useStyles();
  return (
    <View style={styles.emptyTaskContainer}>
      <ChecklistPeople style={{alignSelf: 'center'}} />
      <Text h4 center style={styles.emptyTaskParagraph}>What do you want to do today?</Text>
      <Text lg center>Tap + to add your tasks</Text>
    </View>
  )
}

export default EmptyTask;
