import { Input, InputProps, makeStyles } from '@rneui/themed';
import { addAlpha } from 'helpers/colors';
import React, { FC } from 'react';
import {Controller, ControllerProps} from 'react-hook-form'

interface Props extends InputProps {
  formProps: Omit<ControllerProps<any>, 'render'>
}

const FormControl: FC<Props> = ({formProps, inputContainerStyle, ...props}) => {
  const styles = useStyles();
  return (
    <Controller
      {...formProps}
      render={() => (
        <Input {...props} inputContainerStyle={[inputContainerStyle, styles.inputContainer]}/>
      )}
    />
  )
}

const useStyles = makeStyles((theme) => ({
  inputContainer: {
    backgroundColor: theme.mode === 'light' ? addAlpha(theme.colors?.grey5, 0.23) : addAlpha(theme.colors?.black, 0.01),
    borderColor: theme.colors?.grey5,
  }
}));

export type {
  Props as FormControlProps 
}

export default FormControl;
