import { Button, Text, useTheme } from '@rneui/themed';
import Backdrop from '@design-system/atoms/Backdrop';
import { getFormattedDate, getFormattedDateJson } from '@helpers/datetime';
import React, { forwardRef, Fragment, useImperativeHandle } from 'react';
import {Modal, useWindowDimensions, View } from 'react-native';
import { Calendar } from 'react-native-calendars';

import ArrowLeftIcon from '@assets/icons/arrow-left.svg';
import ArrowRightIcon from '@assets/icons/arrow-right.svg';

import { useStyles } from './styles';
import { iCalendarPicker } from './types';
import { useCalendarPicker } from './useCalendarPicker';

const CalendarPicker = forwardRef<iCalendarPicker.Ref, iCalendarPicker.Props>(({
  value = new Date(),
  visible,
  finishText = 'Save',
  cancelText = 'Cancel',
  onFinish,
  onCancel,
  onSelect,
}, ref) => {
  const { theme } = useTheme();
  const styles = useStyles();

  const { width: screenWidth } = useWindowDimensions();
  const {
    isPickerVisible,
    togglePickerVisibility,
    onDayPress,
    onSaveDate,
  } = useCalendarPicker({ visible, value, onSelect, onFinish });

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
              styles.calendar,
            ]}
            >
              <Calendar
                style={{
                  padding: 0,
                  margin: 0,
                }}
                renderHeader={(date) => {
                  const { monthName, year } = getFormattedDateJson(date);
                  return (
                    <View>
                      <Text center>{monthName.toUpperCase()}</Text>
                      <Text fontSize={10} center>{year}</Text>
                    </View>
                  )
                }}
                renderArrow={(direction) => {
                  if (direction === 'left') {
                    return <ArrowLeftIcon fill={theme.colors.black} />
                  }
                  return <ArrowRightIcon fill={theme.colors.black} />
                }}
                theme={{
                  backgroundColor: theme.colors.card,
                  calendarBackground: theme.colors.card,
                  todayTextColor: theme.colors.primary,
                  dayTextColor: theme.colors.black,
                  textDisabledColor: theme.colors.grey4,
                  monthTextColor: theme.colors.black,
                  arrowColor: theme.colors.black,
                  textDayFontFamily: theme.fontFamilies?.bold,
                  textMonthFontFamily: theme.fontFamilies?.bold,
                  textDayHeaderFontFamily: theme.fontFamilies?.bold,
                  // textDayFontSize: 12,
                  textDayHeaderFontSize: 10,
                }}
                removeClippedSubviews
                onDayPress={onDayPress}
                current={getFormattedDate(value)}
                markedDates={{
                  [getFormattedDate(value)]: {
                    selected: true,
                    selectedColor: theme.colors.primary,
                  }
                }}
              />
              <View style={styles.calendarFooter}>
                <Button onPress={onCancel} title={cancelText} type="clear" containerStyle={{flex: 1}} />
                <View style={{width: 5}} />
                <Button onPress={onSaveDate} title={finishText} containerStyle={{flex: 1}} />
              </View>

            </View>

        </View>
      </Modal>
    </Fragment>
  )
})

export default CalendarPicker;
