import { Button, makeStyles, Text, Icon, useTheme } from '@rneui/themed';
import HorizontalLine from 'components/atoms/HorizontalLine';
import Main from 'components/templates/Main';
import React, { FC } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Platform, ScrollView, View } from 'react-native';
import RegisterForm from './components/RegisterForm';
import { useStyles } from './styles';
import { iRegisterScreen } from './types';

const RegisterScreen: FC<iRegisterScreen.Props> = ({ navigation }) => {
  const styles = useStyles()
  const { theme } = useTheme()
  const registerForm = useForm<iRegisterScreen.RegisterForm>();

  const onSubmitRegister: SubmitHandler<iRegisterScreen.RegisterForm> = (data) => {
    console.log(data);
  }

  return (
    <Main>
      <ScrollView>
        <View style={[styles.body, { minHeight: theme.screenWithHeader }]}>
          <Text h2 style={styles.registerTitle}>{'Register'}</Text>

          <RegisterForm registerForm={registerForm} onSubmit={onSubmitRegister} />

          <Button title={'Register'} onPress={registerForm.handleSubmit(onSubmitRegister)} containerStyle={styles.registerButton} />

          <View style={{ flex: 1 }} />

          <Text center color={theme.colors.grey3}>Already have an account? <Text fontFamily="bold" onPress={() => navigation.navigate('Login')}>Login</Text></Text>
        </View>
      </ScrollView>
    </Main>
  )
}

export default RegisterScreen;
