import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Button, makeStyles, Text } from '@rneui/themed';
import FormControl, {FormControlProps} from 'components/molecules/FormControl';
import Main from 'components/templates/Main';
import React, {FC} from 'react';
import { useForm } from 'react-hook-form';
import { View } from 'react-native';

interface Props extends NativeStackScreenProps<iNavigator.RootParamList, 'Login'> { }

interface LoginForm {
  username: string;
  password: string;
}

const LoginScreen: FC<Props> = ({navigation}) => {
  const styles = useStyles()
  const loginForm = useForm<LoginForm>()
  return (
    <Main>
      <View style={styles.body}>
        <Text h2 style={styles.loginTitle}>{'Login'}</Text>

        {LOGIN_INPUTS.map(({formProps, ...inputProps}, index) => (
          <FormControl
            key={index}
            containerStyle={styles.loginForm}
            {...inputProps}
            formProps={{
              ...formProps,
              control: loginForm.control,
            }}
          />
        ))}

        <Button title={'Login'} onPress={() => {}} containerStyle={styles.loginButton} />
      </View>
    </Main>
  )
}

const useStyles = makeStyles(() => ({
  body: {
    paddingHorizontal: 24,
    paddingVertical: 20,
  },
  loginTitle: {
    marginBottom: 56,
  },
  loginForm: {
    marginBottom: 8,
  },
  loginButton: {
    marginBottom: 31,
    marginTop: 46,
  }
}))

const LOGIN_INPUTS: FormControlProps[] = [
  {
    formProps: {
      name: 'username',
      rules: {
        required: {
          value: true,
          message: 'Username is required',
        }
      }
    },
    label: 'Username',
    placeholder: 'Enter your Username'
  },
  {
    formProps: {
      name: 'password',
      rules: {
        required: {
          value: true,
          message: 'Password is required',
        }
      },
    },
    label: 'Password'
  }
]

export default LoginScreen;
