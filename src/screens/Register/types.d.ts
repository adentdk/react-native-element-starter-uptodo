import { NativeStackScreenProps } from "@react-navigation/native-stack";

declare namespace iRegisterScreen {
  interface Props extends NativeStackScreenProps<iNavigator.RootParamList, 'Register'> { }

  interface RegisterForm {
    email: string;
    password: string;
    confirmPassword: string;
  }
}

export { iRegisterScreen };