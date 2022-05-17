import { NativeStackScreenProps } from "@react-navigation/native-stack";

declare namespace iLoginScreen {
  interface Props extends NativeStackScreenProps<iNavigator.RootParamList, 'Login'> { }

  interface LoginForm {
    email: string;
    password: string;
  }
}

export { iLoginScreen };