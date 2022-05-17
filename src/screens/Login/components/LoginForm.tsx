import { Text } from "@rneui/themed";
import FormControl from "components/molecules/FormControl";
import React, { FC, Fragment, useRef } from "react";
import { UseFormReturn, SubmitHandler } from "react-hook-form";
import { TextInput } from "react-native";
import { useStyles } from "../styles";
import { iLoginScreen } from "../types";

interface Props {
  loginForm: UseFormReturn<iLoginScreen.LoginForm>,
  onSubmit: SubmitHandler<iLoginScreen.LoginForm>,
}

const LoginForm: FC<Props> = ({ loginForm, onSubmit }) => {
  const styles = useStyles();
  const passwordRef = useRef<TextInput>(null);

  const onEmailSubmitEditing = () => {
    passwordRef.current?.focus();
  };

  return (
    <Fragment>
      <FormControl
        containerStyle={styles.loginForm}
        onSubmitEditing={onEmailSubmitEditing}
        label={'Email'}
        placeholder={'Enter your Email'}
        formProps={{
          name: 'email',
          rules: {
            required: {
              value: true,
              message: 'Email is required',
            }
          },
          control: loginForm.control,
        }}
      />

      <FormControl
        ref={passwordRef}
        containerStyle={styles.loginForm}
        inputStyle={{ letterSpacing: 8 }}
        label={'Password'}
        placeholder={'••••••••'}
        formProps={{
          name: 'password',
          rules: {
            required: {
              value: true,
              message: 'Password is required',
            },
            minLength: {
              value: 6,
              message: 'Password must be at least 6 characters',
            }
          },
          control: loginForm.control,
        }}
        secureTextEntry
      />
      <Text style={styles.forgotPassword}>
        Forgot your password?
      </Text>
    </Fragment>
  )
}

export default LoginForm;
