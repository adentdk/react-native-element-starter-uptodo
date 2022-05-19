import { useTheme } from '@rneui/themed';
import Backdrop from 'components/Backdrop';
import React, { forwardRef, Fragment, useImperativeHandle } from 'react';
import { Dimensions, Modal, useWindowDimensions, View } from 'react-native';
import { Calendar } from 'react-native-calendars';
import { useStyles } from './styles';
import { iCalendarPicker } from './types';
import { useCalendarPicker } from './useCalendarPicker';

const CalendarPicker = forwardRef<iCalendarPicker.Ref, iCalendarPicker.Props>(({
  value,
  visible,
  onDismiss,
  onSelect
}, ref) => {
  const { theme } = useTheme();
  const styles = useStyles();

  const {width: screenWidth} = useWindowDimensions();
  const {
    isPickerVisible,
    pickerRef,
    togglePickerVisibility
  } = useCalendarPicker({ visible });

  useImperativeHandle(ref, () => ({
    togglePickerVisibility
  }));

  return (
    <Fragment>
      <Modal transparent visible={isPickerVisible} onDismiss={onDismiss} animationType="slide">
        <Backdrop onPress={onDismiss} />
        <View style={styles.container}>
          <Calendar
            style={[
              {width: screenWidth - 25 * 2},
              styles.calendar,
            ]}
            theme={{
              backgroundColor: theme.colors.card,
              calendarBackground: theme.colors.card,
              todayTextColor: theme.colors.primary,
              dayTextColor: theme.colors.black,
              textDisabledColor: theme.colors.greyOutline,
              monthTextColor: theme.colors.black,
              arrowColor: theme.colors.black,
              textDayFontFamily: theme.fontFamilies?.bold,
              textMonthFontFamily: theme.fontFamilies?.bold,
              textDayHeaderFontFamily: theme.fontFamilies?.bold,
              textDayFontSize: 12,
              textDayHeaderFontSize: 10,
            }}
          />
        </View>
      </Modal>
    </Fragment>
  )
})

export default CalendarPicker;
