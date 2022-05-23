import { generateArray } from "helpers/array";
import { getTimeJson } from "helpers/datetime";
import { useEffect, useRef, useState } from "react";
import { iCategoryPicker } from "./types";

interface Params {
  visible?: boolean;
  value?: string;
  onSelect?: (value?: string) => void;
  onFinish?: () => void;
}

export const useCategoryPicker = ({ visible = false, value, onSelect, onFinish }: Params) => {

  const [isPickerVisible, setIsPickerVisible] = useState(visible);

  const togglePickerVisibility = () => {
    setIsPickerVisible(prevState => !prevState);
  };

  const pickerRef = useRef<iCategoryPicker.Ref>(null);

  const onSaveCategory = () => {

    if (onSelect) {
      onSelect(value);
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
    onSaveCategory
  }
};
