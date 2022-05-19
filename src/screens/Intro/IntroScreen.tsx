import React, { FC, useEffect } from 'react';
import { Text } from '@rneui/themed';

import Logo from '@assets/svg-icons/Logo.svg'
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import Main from 'design-system/templates/Main/Main';

interface Props extends NativeStackScreenProps<iNavigator.RootParamList, 'Intro'> { }

const IntroScreen: FC<Props> = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('OnBoarding')
    }, 1000);
  }, []);

  return (
    <Main center>
      <Logo width={LOGO_SIZE} height={LOGO_SIZE} />

      <Text h1>UpTodo</Text>
    </Main>
  )
}

const LOGO_SIZE = 113;

export default IntroScreen;
