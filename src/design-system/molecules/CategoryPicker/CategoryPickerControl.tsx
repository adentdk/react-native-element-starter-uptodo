import React, { forwardRef } from 'react';
import { Controller } from 'react-hook-form'
import CategoryPicker from './CategoryPicker'
import { iCategoryPicker } from './types';

const CategoryPickerControl = forwardRef<iCategoryPicker.Ref, iCategoryPicker.PropControl>(({ formProps, onSelect, ...props }, ref) => {
  const onSelectHandler = (time?: string) => {
    if (onSelect) {
      onSelect(time)
    }
  }

  return (
    <Controller
      {...formProps}
      render={({ field: { onChange, value } }) => (
        <CategoryPicker
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

export default CategoryPickerControl;
