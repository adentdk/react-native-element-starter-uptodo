import { makeStyles, useTheme } from '@rneui/themed';
import React, { FC } from 'react';
import { ColorValue, StatusBar, StatusBarStyle, View } from 'react-native';

interface Props {
  statusBarColor?: ColorValue;
  statusBarStyle?: StatusBarStyle;
  statusBarHidden?: boolean;
  statusBarAnimation?: boolean;
  statusBarTranslucent?: boolean;
  backgroundColor?: ColorValue;
  children: React.ReactNode;
  center?: boolean;
}

export const Main: FC<Props> = ({
  children,
  statusBarColor,
  statusBarStyle,
  statusBarTranslucent = false,
  statusBarAnimation = true,
  statusBarHidden = false,
  center = false,
}) => {
  const { theme } = useTheme();

  const styles = useStyles();

  const statusBarProps = {
    backgroundColor: statusBarColor || theme.colors.white,
    barStyle: statusBarStyle || (theme.mode === 'dark' ? 'light-content' : 'dark-content'),
    translucent: statusBarTranslucent,
    animated: statusBarAnimation,
    hidden: statusBarHidden,
  };

  return (
    <View style={[styles.container, center && styles.center]}>
      <StatusBar {...statusBarProps} />
      {children}
    </View>
  );
};

const useStyles = makeStyles(() => ({
  container: {
    flex: 1,
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  }
}));

export default Main;
