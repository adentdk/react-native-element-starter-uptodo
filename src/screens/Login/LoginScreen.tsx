import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Button, makeStyles, Text, Icon, useTheme } from '@rneui/themed';
import HorizontalLine from 'components/atoms/HorizontalLine';
import FormControl from 'components/molecules/FormControl';
import Main from 'components/templates/Main';
import React, { FC } from 'react';
import { useForm } from 'react-hook-form';
import { Dimensions, Platform, ScrollView, View } from 'react-native';

interface Props extends NativeStackScreenProps<iNavigator.RootParamList, 'Login'> { }

interface LoginForm {
  username: string;
  password: string;
}

const LoginScreen: FC<Props> = ({ navigation }) => {
  const styles = useStyles()
  const { theme } = useTheme()
  const loginForm = useForm<LoginForm>()
  return (
    <Main>
      <ScrollView>
        <View style={styles.body}>
          <Text h2 style={styles.loginTitle}>{'Login'}</Text>

          <FormControl
            containerStyle={styles.loginForm}
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
                }
              },
              control: loginForm.control,
            }}
            secureTextEntry
          />

          <Button title={'Login'} onPress={() => { }} containerStyle={styles.loginButton} />

          <HorizontalLine text='or' />

          <Button
            title="Login with Google"
            type="outline"
            onPress={() => { }}
            icon={
              <Icon name="google" type="material-community" color={theme.colors.primary} />
            }
            containerStyle={styles.buttons}
          />

          {Platform.OS === 'ios' && (
            <Button
              title="Login with Apple"
              type="outline"
              onPress={() => { }}
              icon={
                <Icon name="apple" type="material-community" color={theme.colors.primary} />
              }
              containerStyle={styles.buttons}
            />
          )}

          <View style={{ flex: 1 }} />

          <Text>Don’t have an account? Register</Text>
        </View>
      </ScrollView>
    </Main>
  )
}

const useStyles = makeStyles((theme) => {
  return {
    body: {
      paddingHorizontal: 24,
      paddingVertical: 20,
      backgroundColor: 'red'
    },
    loginTitle: {
      marginBottom: 56,
    },
    loginForm: {
      marginBottom: 8,
    },
    loginButton: {
      marginBottom: 31,
      marginTop: 30,
    },
    buttons: {
      marginTop: 20,
    }
  }
}
)

export default LoginScreen;
