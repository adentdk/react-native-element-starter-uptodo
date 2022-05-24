
import withObservables from '@nozbe/with-observables'
import { withDatabase } from '@nozbe/watermelondb/DatabaseProvider';
import Database from '@nozbe/watermelondb/Database';
import { Button, Text } from '@rneui/themed';
import Backdrop from '@design-system/atoms/Backdrop';
import React, { forwardRef, Fragment, useImperativeHandle } from 'react';
import { Modal, Pressable, ScrollView, useWindowDimensions, View } from 'react-native';
import { compose } from 'recompose'

import { useStyles } from './styles';
import { iCategoryPicker } from './types';
import { useCategoryPicker } from './useCategoryPicker';
import CategoryIcon from 'design-system/atoms/CategoryIcon';
import CategoryCreate from '../CategoryCreate';

const CategoryPicker = forwardRef<iCategoryPicker.Ref, iCategoryPicker.ComponentProps>(({
  categories,
  visible,
  value,
  finishText = 'Add Category',
  onFinish,
  onCancel,
  onSelect,
}, ref) => {
  const styles = useStyles();

  const { width: screenWidth } = useWindowDimensions();

  const {
    isPickerVisible,
    isFormAddVisible,
    togglePickerVisibility,
    toggleFormAddVisibility,
    onSaveCategory, 
  } = useCategoryPicker({ visible, value, onSelect, onFinish });

  useImperativeHandle(ref, () => ({
    togglePickerVisibility
  }));

  return (
    <Fragment>
      <Modal transparent visible={isPickerVisible} onRequestClose={onCancel} animationType="slide">
        <Backdrop onPress={onCancel} />
        <View style={styles.container}>
          <View
            style={[
              { width: screenWidth - 25 * 2 },
              styles.categorypicker,
            ]}
          >
            <View style={styles.categorypickerHeader}>
              <Text center lg>Choose Category</Text>
            </View>


            <ScrollView style={styles.categorypickerBody}>
              {categories?.map(category => (
                <Pressable style={styles.categorypickerItem}>
                  <View style={styles.categorypickerItemIcon}>
                    <CategoryIcon name={category.icon} />
                  </View>
                  <Text>{category.name}</Text>
                </Pressable>
              ))}

              <Pressable style={styles.categorypickerItem} onPress={toggleFormAddVisibility}>
                <View style={styles.categorypickerItemIcon}>
                  <CategoryIcon name="add" fill={'#fff'} width={24} height={24} />
                </View>

                <Text>Create New</Text>
              </Pressable>

            </ScrollView>

            <View style={styles.categorypickerFooter}>
              <Button onPress={onSaveCategory} title={finishText} containerStyle={{ flex: 1 }} />
            </View>

          </View>

        </View>
      </Modal>

      <CategoryCreate visible={isFormAddVisible} onCancel={toggleFormAddVisibility} onFinish={toggleFormAddVisibility} />
    </Fragment>
  )
})

const enhance = compose<iCategoryPicker.ComposePropsInput, iCategoryPicker.ComposePropsOutput>(
  withDatabase,
  withObservables<{ database: Database }, iCategoryPicker.DatabaseProps>([], ({ database }) => ({
    categories: database.get<iCategoryPicker.CategoryModel>('categories').query().observe() as unknown as iCategoryPicker.CategoryModel[]
  })),
);

export default enhance(CategoryPicker) as unknown as typeof CategoryPicker;
