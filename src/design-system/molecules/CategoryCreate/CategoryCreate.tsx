import { Button, Text } from '@rneui/themed';
import React, { forwardRef, Fragment, useImperativeHandle } from 'react';
import { Modal, View } from 'react-native';

import { useStyles } from './styles';
import { iCategoryCreate } from './types';
import { useCategoryCreate } from './useCategoryCreate';

const CategoryCreate = forwardRef<iCategoryCreate.Ref, iCategoryCreate.ComponentProps>(({
  visible,
  onFinish,
  onCancel
}, ref) => {
  const styles = useStyles();

  const {
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
          <View
            style={[
              styles.categorycreate,
            ]}
          >
            <View style={styles.categorycreateHeader}>
              <Text center lg>Choose Category</Text>
            </View>

            <View style={styles.categorycreateFooter}>
              <Button onPress={onSaveCategory} title={'a'} containerStyle={{ flex: 1 }} />
            </View>

          </View>

        </View>
      </Modal>
    </Fragment>
  )
})

export default CategoryCreate;
