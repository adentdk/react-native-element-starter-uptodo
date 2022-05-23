import { BottomSheet, FAB, Text, useTheme } from '@rneui/themed';
import React, { FC, Fragment } from 'react'

import AddIcon from '@assets/icons/add.svg';
import { useStyles } from './styles';
import { Pressable, View } from 'react-native';
import { useAddNewTask } from './useAddNewTask';

import FlagIcon from '@assets/icons/flag.svg';
import SendIcon from '@assets/icons/send.svg';
import TagIcon from '@assets/icons/tag.svg';
import TimerIcon from '@assets/icons/timer.svg';

import TextInputControl from '@design-system/molecules/TextInputControl';
import { CalendarPickerControl } from '@design-system/molecules/CalendarPicker';
import { TimePickerControl } from '@design-system/molecules/TimePicker';
import { CategoryPickerControl } from '@design-system/molecules/CategoryPicker';
const AddNewTask: FC = () => {
  const { theme } = useTheme();
  const styles = useStyles();

  const {
    isFormVisible,
    addNewTaskForm,
    taskInputRef,
    descriptionInputRef,
    isCalendarPickerVisible,
    isTimePickerVisible,
    isCategoryPickerVisible,
    onTaskInputSubmit,
    onBottomSheetOpen,
    toggleFormVisibility,
    toggleCalendarPickerVisibility,
    toggleTimePickerVisibility,
    toggleCategoryPickerVisibility,
  } = useAddNewTask();
  return (
    <Fragment>
      <FAB
        onPress={toggleFormVisibility}
        icon={<AddIcon />}
        color={theme.colors.primary}
        buttonStyle={{
          width: 64,
          height: 64,
          borderRadius: 32,
        }}
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          bottom: 32,
        }}
      />

      <BottomSheet
        backdropStyle={styles.bottomSheetBackdrop}
        scrollViewProps={{
          keyboardShouldPersistTaps: 'handled',
        }}
        onBackdropPress={toggleFormVisibility}
        modalProps={{
          onRequestClose: toggleFormVisibility,
          onShow: onBottomSheetOpen,
        }}
        isVisible={isFormVisible}
      >
        <View style={styles.bottomSheet}>
          <Text fontFamily="bold" xl style={styles.bottomSheetTitle}>Add Task</Text>

          <Fragment>
            <TextInputControl
              placeholder="Title"
              ref={taskInputRef}
              onSubmitEditing={onTaskInputSubmit}
              formProps={{
                control: addNewTaskForm.control,
                name: 'title',
              }}
            />
            <TextInputControl
              placeholder="Description"
              ref={descriptionInputRef}
              formProps={{
                control: addNewTaskForm.control,
                name: 'description',
              }}
            />
          </Fragment>

          <View style={styles.bottomSheetFooter}>
            <Pressable onPress={toggleCalendarPickerVisibility}>
              <TimerIcon fill={theme.colors.black} style={styles.bottomSheetFooterButton} />
            </Pressable>

            <Pressable onPress={toggleCategoryPickerVisibility}>
              <TagIcon fill={theme.colors.black} style={styles.bottomSheetFooterButton} />
            </Pressable>
            <FlagIcon fill={theme.colors.black} style={styles.bottomSheetFooterButton} />

            <View style={{ flex: 2 / 1 }} />

            <SendIcon fill={theme.colors.primary} />
          </View>
        </View>
      </BottomSheet>

      <CalendarPickerControl
        formProps={{
          control: addNewTaskForm.control,
          name: 'date',
        }}
        visible={isCalendarPickerVisible}
        onDismiss={toggleCalendarPickerVisibility}
        onCancel={toggleCalendarPickerVisibility}
        onFinish={() => {
          toggleCalendarPickerVisibility();
          toggleTimePickerVisibility();
        }}
      />

      <TimePickerControl
        formProps={{
          control: addNewTaskForm.control,
          name: 'time',
        }}
        visible={isTimePickerVisible}
        onDismiss={toggleTimePickerVisibility}
        onCancel={toggleTimePickerVisibility}
        onFinish={toggleTimePickerVisibility}
      />

      <CategoryPickerControl
        formProps={{
          control: addNewTaskForm.control,
          name: 'category',
        }}
        visible={isCategoryPickerVisible}
        onDismiss={toggleCategoryPickerVisibility}
        onCancel={toggleCategoryPickerVisibility}
        onFinish={toggleCategoryPickerVisibility}
      />
    </Fragment>
  )
}

export default AddNewTask;