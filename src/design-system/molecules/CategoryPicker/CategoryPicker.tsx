
import withObservables from '@nozbe/with-observables'
import { withDatabase } from '@nozbe/watermelondb/DatabaseProvider';
import Database from '@nozbe/watermelondb/Database';
import { Button, Text } from '@rneui/themed';
import Backdrop from '@design-system/atoms/Backdrop';
import React, { forwardRef, Fragment, useImperativeHandle } from 'react';
import { Modal, useWindowDimensions, View } from 'react-native';
import { compose } from 'recompose'

import { useStyles } from './styles';
import { iCategoryPicker } from './types';
import { useCategoryPicker } from './useCategoryPicker';

const CategoryPicker = forwardRef<iCategoryPicker.Ref, iCategoryPicker.ComponentProps>(({
  categories,
  visible,
  value,
  finishText = 'Save',
  cancelText = 'Cancel',
  onFinish,
  onCancel,
  onDismiss,
  onSelect,
}, ref) => {
  const styles = useStyles();

  const { width: screenWidth } = useWindowDimensions();

  const {
    isPickerVisible,
    togglePickerVisibility,
    onSaveCategory,
  } = useCategoryPicker({ visible, value, onSelect, onFinish });

  useImperativeHandle(ref, () => ({
    togglePickerVisibility
  }));

  return (
    <Fragment>
      <Modal transparent visible={isPickerVisible} onDismiss={onDismiss} animationType="slide">
        <Backdrop onPress={onDismiss} />
        <View style={styles.container}>
          <View
            style={[
              { width: screenWidth - 25 * 2 },
              styles.timepicker,
            ]}
          >
            <View style={styles.timepickerHeader}>
              <Text center lg>Choose Category</Text>
            </View>

            <View style={styles.timepickerFooter}>
              <Button onPress={onCancel} title={cancelText} type="clear" containerStyle={{ flex: 1 }} />
              <View style={{ width: 5 }} />
              <Button onPress={onSaveCategory} title={finishText} containerStyle={{ flex: 1 }} />
            </View>

          </View>

        </View>
      </Modal>
    </Fragment>
  )
})

const enhance = compose<iCategoryPicker.ComposePropsInput, iCategoryPicker.ComposePropsOutput>(
  withDatabase,
  withObservables<{ database: Database }, iCategoryPicker.DatabaseProps>([], ({ database }) => ({
    categories: database.get<iCategoryPicker.CategoryModel>('categories').query(),
  })),
);

export default enhance(CategoryPicker) as unknown as typeof CategoryPicker;
