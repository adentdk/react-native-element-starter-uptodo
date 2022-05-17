import AppleIcon from '@assets/svg-icons/AppleInc.svg'
import GoogleIcon from '@assets/svg-icons/GoogleInc.svg'

import { Button, Text, Icon, useTheme } from '@rneui/themed';
import HorizontalLine from 'components/atoms/HorizontalLine';
import Main from 'components/templates/Main';
import React, { FC } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Platform, ScrollView, View } from 'react-native';
import LoginForm from './components/LoginForm';
import { useStyles } from './styles';
import { iLoginScreen } from './types';

const LoginScreen: FC<iLoginScreen.Props> = ({ navigation }) => {
  const styles = useStyles()
  const { theme } = useTheme()
  const loginForm = useForm<iLoginScreen.LoginForm>();

  const onSubmitLogin: SubmitHandler<iLoginScreen.LoginForm> = (data) => {
    console.log(data);
  }

  return (
    <Main>
      <ScrollView>
        <View style={[styles.body, { minHeight: theme.screenWithHeader }]}>
          <Text h2 style={styles.loginTitle}>{'Login'}</Text>

          <LoginForm loginForm={loginForm} onSubmit={onSubmitLogin} />

          <Button title={'Login'} onPress={loginForm.handleSubmit(onSubmitLogin)} containerStyle={styles.loginButton} />

          <HorizontalLine text='or' />

          <Button
            title="Login with Google"
            type="outline"
            titleStyle={{ color: theme.colors.black }}
            onPress={() => { }}
            icon={
              <GoogleIcon  />
            }
            containerStyle={styles.buttons}
          />

          {Platform.OS === 'ios' && (
            <Button
              title="Login with Apple"
              type="outline"
              titleStyle={{ color: theme.colors.black }}
              onPress={() => { }}
              icon={
                <AppleIcon />
              }
              containerStyle={styles.buttons}
            />
          )}

          <View style={{ flex: 1 }} />

          <Text center color={theme.colors.grey3}>Don’t have an account? <Text fontFamily="bold" onPress={() => navigation.navigate('Register')}>Register</Text></Text>
        </View>
      </ScrollView>
    </Main>
  )
}

export default LoginScreen;
