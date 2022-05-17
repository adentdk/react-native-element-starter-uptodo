import { makeStyles, Text } from '@rneui/themed';
import { addAlpha } from 'helpers/colors';
import React, { FC } from 'react';
import { View } from 'react-native';

interface Props {
  width?: number
  fullWidth?: boolean
  text?: string
}

const HorizontalLine: FC<Props> = ({ width, fullWidth = true, text }) => {
  const styles = useStyles();
  return (
    <View style={styles.lineWrapper}>
      <View style={styles.line} />
      {text !== undefined && (
        <View style={styles.textWrapper}>
          <Text lg style={styles.text}>{text}</Text>
        </View>
      )}
      <View style={styles.line} />
    </View>
  )
}

const useStyles = makeStyles((theme) => ({
  lineWrapper: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  line: {
    height: 1,
    backgroundColor: addAlpha(theme.colors?.black, 0.4),
    flex: 1
  },
  textWrapper: {
    padding: 2
  },
  text: {
    color: addAlpha(theme.colors?.black, 0.4),
    lineHeight: 16 * 1.5,
    marginTop: -4
  }
}))

export default HorizontalLine