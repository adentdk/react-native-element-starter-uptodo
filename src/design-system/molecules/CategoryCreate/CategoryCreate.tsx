import { Button, Text } from '@rneui/themed';
import React, { forwardRef, Fragment, useImperativeHandle } from 'react';
import { Modal, View } from 'react-native';
import TextInputControl from '../TextInputControl';

import { useStyles } from './styles';
import { iCategoryCreate } from './types';
import { useCategoryCreate } from './useCategoryCreate';

const CategoryCreate = forwardRef<iCategoryCreate.Ref, iCategoryCreate.Props>(({
  visible,
  onFinish,
  onCancel
}, ref) => {
  const styles = useStyles();

  const {
    categoryCreateForm,
    isPickerVisible,
    togglePickerVisibility,
    onSaveCategory,
  } = useCategoryCreate({ visible, onFinish, onCancel });

  useImperativeHandle(ref, () => ({
    togglePickerVisibility
  }));

  return (
    <Fragment>
      <Modal visible={isPickerVisible} animationType="slide" onRequestClose={() => {
        togglePickerVisibility();
        onCancel?.();
      }}>
        <View style={styles.container}>

          <View style={styles.categorycreateHeader}>
            <Text xl>Create New Category</Text>
          </View>

          <View style={styles.categorycreateBody}>
            <TextInputControl
              formProps={{
                control: categoryCreateForm.control,
                name: 'name',
              }}
              label="Category name :"
              placeholder="Enter category name"
            />
          </View>

          <View style={styles.categorycreateFooter}>
            <Button type="clear" onPress={onCancel} title={"Cancel"} containerStyle={{ flex: 1 }} />
            <Button onPress={onSaveCategory} title={"Create Category"} containerStyle={{ flex: 1 }} />
          </View>

        </View>
      </Modal>
    </Fragment>
  )
})

export default CategoryCreate;
