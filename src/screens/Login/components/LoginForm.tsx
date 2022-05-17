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
  const usernameRef = useRef<TextInput>(null);
  const passwordRef = useRef<TextInput>(null);

  const onUsernameSubmitEditing = () => {
    passwordRef.current?.focus();
  };

  const onPasswordSubmitEditing = () => {
    const usernameValue = loginForm.getValues("username") || '';

    if (usernameValue.length > 0) {
      loginForm.handleSubmit(onSubmit)();
    } else {
      usernameRef.current?.focus();
    }
  };

  return (
    <Fragment>
      <FormControl
        ref={usernameRef}
        containerStyle={styles.loginForm}
        onSubmitEditing={onUsernameSubmitEditing}
        label={'Username'}
        placeholder={'Enter your Username'}
        formProps={{
          name: 'username',
          rules: {
            required: {
              value: true,
              message: 'Username is required',
            }
          },
          control: loginForm.control,
        }}
      />

      <FormControl
        ref={passwordRef}
        containerStyle={styles.loginForm}
        onSubmitEditing={onPasswordSubmitEditing}
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
    </Fragment>
  )
}

export default LoginForm;
