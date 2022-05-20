import TextInputControl from "design-system/molecules/TextInputControl";
import React, { FC, Fragment, useRef } from "react";
import { UseFormReturn, SubmitHandler } from "react-hook-form";
import { TextInput } from "react-native";
import { useStyles } from "../styles";
import { iRegisterScreen } from "../types";

interface Props {
  registerForm: UseFormReturn<iRegisterScreen.RegisterForm>,
  onSubmit: SubmitHandler<iRegisterScreen.RegisterForm>,
}

const RegisterForm: FC<Props> = ({ registerForm, onSubmit }) => {
  const styles = useStyles();
  const passwordRef = useRef<TextInput>(null);
  const confirmPasswordRef = useRef<TextInput>(null);

  const onEmailSubmitEditing = () => {
    passwordRef.current?.focus();
  };

  const onPasswordSubmitEditing = () => {
    confirmPasswordRef.current?.focus();
  };

  return (
    <Fragment>
      <TextInputControl
        containerStyle={styles.registerForm}
        onSubmitEditing={onEmailSubmitEditing}
        label={'Email'}
        placeholder={'Enter your Email'}
        keyboardType="email-address"
        formProps={{
          name: 'email',
          rules: {
            required: {
              value: true,
              message: 'Email is required',
            }
          },
          control: registerForm.control,
        }}
      />

      <TextInputControl
        ref={passwordRef}
        containerStyle={styles.registerForm}
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
          control: registerForm.control,
        }}
        secureTextEntry
      />

      <TextInputControl
        ref={confirmPasswordRef}
        containerStyle={styles.registerForm}
        inputStyle={{ letterSpacing: 8 }}
        label={'Confirm Password'}
        placeholder={'••••••••'}
        formProps={{
          name: 'confirmPassword',
          rules: {
            validate: {
              value: (value) => value === registerForm.getValues("password") || 'Passwords do not match',
            }
          },
          control: registerForm.control,
        }}
        secureTextEntry
      />
    </Fragment>
  )
}

export default RegisterForm;
