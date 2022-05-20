import { getFormattedDate } from "helpers/datetime";
import { useEffect, useRef, useState } from "react";
import { DateData } from "react-native-calendars";
import { iCalendarPicker } from "./types";

interface Params {
  visible?: boolean;
  value: Date;
  onSelect?: (date: Date, fdate: string) => void;
  onFinish?: () => void;
}

export const useCalendarPicker = ({visible = false, value, onSelect, onFinish}: Params) => {
  const [isPickerVisible, setIsPickerVisible] = useState(visible);

  const togglePickerVisibility = () => {
    setIsPickerVisible(prevState => !prevState);
  };

  const pickerRef = useRef<iCalendarPicker.Ref>(null);

  const onDayPress = (day: DateData) => {
    if (onSelect) {
      onSelect(new Date(day.dateString), day.dateString);
    }
  };

  const onSaveDate = () => {

    if (onSelect) {
      onSelect(value, getFormattedDate(value));
    }

    if (onFinish) {
      onFinish();
    }
    if (!visible) {
      togglePickerVisibility();
    }
  };

  useEffect(() => {
    if (visible !== isPickerVisible) {
      setIsPickerVisible(visible);
    }
  }, [visible, isPickerVisible]);

  return {
    isPickerVisible,
    pickerRef,
    togglePickerVisibility,
    onDayPress,
    onSaveDate
  }
};
