import { NativeStackScreenProps } from "@react-navigation/native-stack";

declare namespace iLoginScreen {
  interface Props extends NativeStackScreenProps<iNavigator.RootParamList, 'Login'> { }

  interface LoginForm {
    username: string;
    password: string;
  }
}

export { iLoginScreen };