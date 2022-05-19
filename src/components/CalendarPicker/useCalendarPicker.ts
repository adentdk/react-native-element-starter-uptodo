import { useEffect, useRef, useState } from "react";
import { iCalendarPicker } from "./types";

export const useCalendarPicker = ({visible = false}) => {
  const [isPickerVisible, setIsPickerVisible] = useState(visible);

  const togglePickerVisibility = () => {
    setIsPickerVisible(prevState => !prevState);
  };

  const pickerRef = useRef<iCalendarPicker.Ref>(null);

  useEffect(() => {
    if (visible !== isPickerVisible) {
      setIsPickerVisible(visible);
    }
  }, [visible, isPickerVisible]);

  return {
    isPickerVisible,
    pickerRef,
    togglePickerVisibility
  }
};
