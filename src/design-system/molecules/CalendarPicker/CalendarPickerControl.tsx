import React, { forwardRef } from 'react';
import { Controller } from 'react-hook-form'
import CalendarPicker from './CalendarPicker'
import { iCalendarPicker } from './types';

const CalendarPickerControl = forwardRef<iCalendarPicker.Ref, iCalendarPicker.PropControl>(({ formProps, onSelect, ...props }, ref) => {
  const onSelectHandler = (date: Date, fdate: string) => {
    if (onSelect) {
      onSelect(date, fdate)
    }
  }

  return (
    <Controller
      {...formProps}
      render={({ field: { onChange, value } }) => (
        <CalendarPicker
          ref={ref}
          value={value}
          onSelect={(date, fdate) => {
            onChange(date);
            onSelectHandler(date, fdate);
          }}
          {...props}
        />
      )}
    />
  )
})

export default CalendarPickerControl;
