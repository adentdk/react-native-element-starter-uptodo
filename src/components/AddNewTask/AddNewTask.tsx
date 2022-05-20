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

import TextInputControl from 'design-system/molecules/TextInputControl';
import CalendarPicker from 'design-system/molecules/CalendarPicker';
import TimePicker from 'design-system/molecules/TimePicker';
import { Controller } from 'react-hook-form';

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
    onTaskInputSubmit,
    onBottomSheetOpen,
    toggleFormVisibility,
    toggleCalendarPickerVisibility,
    toggleTimePickerVisibility,
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
            <TagIcon fill={theme.colors.black} style={styles.bottomSheetFooterButton} />
            <FlagIcon fill={theme.colors.black} style={styles.bottomSheetFooterButton} />

            <View style={{ flex: 2 / 1 }} />

            <SendIcon fill={theme.colors.primary} />
          </View>
        </View>
      </BottomSheet>

      <Controller
        name='date'
        control={addNewTaskForm.control}
        render={({field: {onChange, value}}) => (
          <CalendarPicker
            visible={isCalendarPickerVisible}
            onDismiss={toggleCalendarPickerVisibility}
            value={value}
            onCancel={toggleCalendarPickerVisibility}
            onFinish={() => {
              toggleCalendarPickerVisibility();
              toggleTimePickerVisibility();
            }}
            onSelect={onChange}
          />
        )}
      />

      <Controller
        name='time'
        control={addNewTaskForm.control}
        render={({field: {onChange, value}}) => (
          <TimePicker
            visible={isTimePickerVisible}
            onDismiss={toggleTimePickerVisibility}
            value={value}
            onCancel={toggleTimePickerVisibility}
            onFinish={toggleTimePickerVisibility}
            onSelect={onChange}
          />
        )}
      />
    </Fragment>
  )
}

export default AddNewTask;