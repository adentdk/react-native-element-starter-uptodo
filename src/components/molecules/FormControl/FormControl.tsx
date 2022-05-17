import { Input, InputProps, makeStyles } from '@rneui/themed';
import { addAlpha } from 'helpers/colors';
import React, { FC, forwardRef } from 'react';
import { Controller, ControllerProps } from 'react-hook-form'
import { TextInput } from 'react-native';

interface Props extends Omit<InputProps, 'ref' | 'value'> {
  formProps: Omit<ControllerProps<any>, 'render'>
}

const FormControl = forwardRef<TextInput, Props>(({ formProps, inputContainerStyle, onChangeText, onBlur, ...props }, ref) => {
  const styles = useStyles();

  const onChangeTextHandler = (text: string) => {
    if (onChangeText) {
      onChangeText(text);
    }
  }

  const onBlurHandler = (e: any) => {
    if (onBlur) {
      onBlur(e);
    }
  }

  return (
    <Controller
      {...formProps}
      render={({ field: { value, onChange, onBlur }, fieldState: {error} }) => (
        <Input
          ref={ref}
          {...props}
          value={value}
          onChangeText={text => {
            onChangeTextHandler(text)
            onChange(text)
          }}
          onBlur={e => {
            onBlurHandler(e)
            onBlur()
          }}
          inputContainerStyle={[inputContainerStyle, styles.inputContainer]}
          errorMessage={error?.message}
        />
      )}
    />
  )
})

const useStyles = makeStyles((theme) => ({
  inputContainer: {
    backgroundColor: theme.mode === 'light' ? addAlpha(theme.colors?.grey5, 0.23) : addAlpha(theme.colors?.black, 0.01),
    borderColor: theme.colors?.grey5,
  },
}));

export type {
  Props as FormControlProps
}

export default FormControl;
