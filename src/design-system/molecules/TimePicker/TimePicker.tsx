import { Button, Text } from '@rneui/themed';
import Backdrop from '@design-system/atoms/Backdrop';
import ScrollInput from '@design-system/atoms/ScrollInput';
import { getFormattedTime, getTimeFromDate } from '@helpers/datetime';
import React, { forwardRef, Fragment, useImperativeHandle } from 'react';
import {Modal, useWindowDimensions, View } from 'react-native';

import { useStyles } from './styles';
import { iTimePicker } from './types';
import { useTimePicker } from './useTimePicker';

const TimePicker = forwardRef<iTimePicker.Ref, iTimePicker.Props>(({
  value = getFormattedTime(getTimeFromDate(new Date())),
  visible,
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
    hours,
    minutes,
    ampm,
    hourItems,
    minuteItems,
    ampmItems,
    togglePickerVisibility,
    onSaveTime,
    setHours,
    setMinutes,
    setAmpm,
  } = useTimePicker({ visible, value, onSelect, onFinish });

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
                <Text  center lg>Choose Time</Text>
              </View>
              <View style={styles.timepickerBody}>
                <ScrollInput selectedValue={hours} onSelect={setHours} items={hourItems} containerStyle={[styles.scrollInput, styles.hourPicker]} />
                <Text fontFamily="bold" xl>:</Text>
                <ScrollInput selectedValue={minutes} onSelect={setMinutes} items={minuteItems} containerStyle={[styles.scrollInput, styles.minutePicker]} />
                <ScrollInput selectedValue={ampm} onSelect={setAmpm} items={ampmItems} containerStyle={styles.scrollInput} />
              </View>

              <View style={styles.timepickerFooter}>
                <Button onPress={onCancel} title={cancelText} type="clear" containerStyle={{flex: 1}} />
                <View style={{width: 5}} />
                <Button onPress={onSaveTime} title={finishText} containerStyle={{flex: 1}} />
              </View>

            </View>

        </View>
      </Modal>
    </Fragment>
  )
})

export default TimePicker;
