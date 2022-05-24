import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { iCategoryCreate } from "./types";

interface Params {
  visible?: boolean;
  onFinish?: () => void;
  onCancel?: () => void;
}

export const useCategoryCreate = ({ visible = false, onFinish }: Params) => {

  const [isPickerVisible, setIsPickerVisible] = useState(visible);

  const categoryCreateForm = useForm<iCategoryCreate.Form>();

  const togglePickerVisibility = () => {
    setIsPickerVisible(prevState => !prevState);
  };

  const pickerRef = useRef<iCategoryCreate.Ref>(null);

  const onSaveCategory = () => {
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
    categoryCreateForm,
    pickerRef,
    togglePickerVisibility,
    onSaveCategory,
  }
};
