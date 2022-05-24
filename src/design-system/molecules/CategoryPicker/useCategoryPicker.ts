import { useTypedNavigation } from "hooks/navigation";
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
  const [isFormAddVisible, setIsFormAddVisible] = useState(false);

  const navigation = useTypedNavigation();

  const togglePickerVisibility = () => {
    setIsPickerVisible(prevState => !prevState);
  };

  const toggleFormAddVisibility = () => {
    setIsFormAddVisible(prevState => !prevState);
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

  const onCreateNewCategory = () => {
    navigation.navigate('CreateCategory');
  };


  useEffect(() => {
    if (visible !== isPickerVisible) {
      setIsPickerVisible(visible);
    }
  }, [visible, isPickerVisible]);

  return {
    isPickerVisible,
    isFormAddVisible,
    pickerRef,
    togglePickerVisibility,
    toggleFormAddVisibility,
    onSaveCategory,
    onCreateNewCategory
  }
};
