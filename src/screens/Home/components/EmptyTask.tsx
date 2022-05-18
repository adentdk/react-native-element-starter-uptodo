import ChecklistPeople from '@assets/svg-ilustrations/ChecklistPeople.svg';
import { Text } from "@rneui/themed";
import React, { FC } from "react";
import { View } from "react-native";

const EmptyTask: FC = () => {
  return (
    <View>
      <ChecklistPeople style={{alignSelf: 'center'}} />
      <Text h4 center>What do you want to do today?</Text>
      <Text lg center>Tap + to add your tasks</Text>
    </View>
  )
}

export default EmptyTask;
