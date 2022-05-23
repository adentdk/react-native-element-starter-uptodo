import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Button, makeStyles, Text } from '@rneui/themed';
import Main from '@design-system/templates/Main';
import React, { FC } from 'react';
import { View } from 'react-native';

interface Props extends NativeStackScreenProps<iNavigator.RootParamList, 'OnBoarding'> { }

const GetStartScreen: FC<Props> = ({navigation}) => {
  const styles = useStyles();

  return (
    <Main>
      <View style={styles.body}>
        <Text h2 center>{'Welcome to UpTodo'}</Text>
        <Text lg center style={styles.description}>{'Please login to your account or create new account to continue'}</Text>
      </View>
      <View style={styles.footer}>
        <Button title={'LOGIN'} containerStyle={styles.footerButton} onPress={() => navigation.navigate('Login')} />

        <Button type="outline" title={'CREATE ACCOUNT'} containerStyle={styles.footerButton} titleStyle={styles.createAccountTitle} onPress={() => navigation.navigate('Register')} />
      </View>
    </Main>
  )
}

const useStyles = makeStyles(({colors}) => ({
  body: {
    flex: 1,
    marginTop: 56,
    marginHorizontal: 42,
  },
  footer: {
    paddingHorizontal: 24,
    paddingBottom: 24,
  },
  description: {
    marginTop: 26,
    lineHeight: 16 * 1.505,
  },
  footerButton: {
    marginBottom: 28
  },
  createAccountTitle: {
    color: colors?.black
  }
}))

export default GetStartScreen;
