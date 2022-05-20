import React, { forwardRef } from 'react';
import { Controller } from 'react-hook-form'
import TimePicker from './TimePicker'
import { iTimePicker } from './types';

const TimePickerControl = forwardRef<iTimePicker.Ref, iTimePicker.PropControl>(({ formProps, onSelect, ...props }, ref) => {
  const onSelectHandler = (time: string) => {
    if (onSelect) {
      onSelect(time)
    }
  }

  return (
    <Controller
      {...formProps}
      render={({ field: { onChange, value } }) => (
        <TimePicker
          ref={ref}
          value={value}
          onSelect={(time) => {
            onChange(time);
            onSelectHandler(time);
          }}
          {...props}
        />
      )}
    />
  )
})

export default TimePickerControl;
