import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { CompositeScreenProps } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

declare namespace iHomeScreen {
  interface Props extends CompositeScreenProps<
    BottomTabScreenProps<iNavigator.BottomParamList, 'Home'>,
    NativeStackScreenProps<iNavigator.RootParamList>
  > {}
}

export { iHomeScreen };