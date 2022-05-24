import { useNavigation } from "@react-navigation/native"
import { NativeStackScreenProps } from "@react-navigation/native-stack"

export const useTypedNavigation = () => {
  return useNavigation<NativeStackScreenProps<iNavigator.RootParamList>['navigation']>()
}