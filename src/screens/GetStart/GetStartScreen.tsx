import { Button, makeStyles, Text } from '@rneui/themed';
import Main from 'components/templates/Main';
import React, { FC } from 'react';
import { View } from 'react-native';

const GetStartScreen: FC = () => {
  const styles = useStyles();
  return (
    <Main>
      <View style={styles.body}>
        <Text h2 center>{'Welcome to UpTodo'}</Text>
        <Text lg center style={styles.description}>{'Please login to your account or create new account to continue'}</Text>
      </View>
      <View style={styles.footer}>
        <Button title={'LOGIN'} containerStyle={styles.footerButton} />

        <Button type="outline" title={'CREATE ACCOUNT'} containerStyle={styles.footerButton} titleStyle={styles.createAccountTitle} />
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
