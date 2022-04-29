import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { makeStyles, Text } from '@rneui/themed';
import Main from 'components/templates/Main';
import React, {FC} from 'react';
import { View } from 'react-native';

interface Props extends NativeStackScreenProps<iNavigator.RootParamList, 'Login'> { }

const LoginScreen: FC<Props> = ({navigation}) => {
  const styles = useStyles()
  return (
    <Main>
      <View style={styles.body}>
        <Text h2>{'Login'}</Text>
      </View>
    </Main>
  )
}

const useStyles = makeStyles(() => ({
  body: {
    paddingHorizontal: 24,
    paddingVertical: 20,
  }
}))

export default LoginScreen;
