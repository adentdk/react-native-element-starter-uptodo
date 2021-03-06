import { makeStyles } from '@rneui/themed';
import { addAlpha } from '@helpers/colors';
import React, { FC } from 'react';
import { Pressable } from 'react-native';

interface Props {
  onPress?: () => void;
}

const Backdrop: FC<Props> = (props) => {
  const styles = useStyles();
  return (
    <Pressable style={styles.backdrop} {...props}/>
  );
}

const useStyles = makeStyles(theme => ({
  backdrop: {
    backgroundColor: addAlpha(theme.mode === 'dark' ? theme.colors?.white : theme.colors?.black, 0.7),
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
}))

export default Backdrop;
