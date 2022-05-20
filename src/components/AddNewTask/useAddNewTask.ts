import { useCallback, useLayoutEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { BackHandler, Keyboard, TextInput } from "react-native";
import { iAddNewTask } from "./types";

export const useAddNewTask = () => {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [isCalendarPickerVisible, setIsCalendarPickerVisible] = useState(false);
  const [isTimePickerVisible, setIsTimePickerVisible] = useState(false);

  const taskInputRef = useRef<TextInput>(null);
  const descriptionInputRef = useRef<TextInput>(null);

  const addNewTaskForm = useForm<iAddNewTask.AddNewTaskForm>();

  const onTaskInputSubmit = useCallback(() => {
    descriptionInputRef.current?.focus();
  }, []);

  const toggleFormVisibility = () => {
    setIsFormVisible(prevState => !prevState);
  };

  const toggleCalendarPickerVisibility = () => {
    setIsCalendarPickerVisible(prevState => !prevState);
  };

  const toggleTimePickerVisibility = () => {
    setIsTimePickerVisible(prevState => !prevState);
  };

  const onBottomSheetOpen = () => {
    setTimeout(() => {
      taskInputRef.current?.focus();
    }, 100);
  };

  const onBackPress = useCallback(() => {
    if (isFormVisible) {
      setIsFormVisible(false);
      return true;
    }

    return false;
  }, [isFormVisible]);

  useLayoutEffect(() => {
    const backhandler = BackHandler.addEventListener(
      "hardwareBackPress",
      onBackPress
    );

    return () => {
      backhandler.remove();
    };
  }, []);
    

  return {
    isFormVisible,
    addNewTaskForm,
    taskInputRef,
    descriptionInputRef,
    isCalendarPickerVisible,
    isTimePickerVisible,
    setIsFormVisible,
    toggleFormVisibility,
    onBottomSheetOpen,
    onTaskInputSubmit,
    toggleCalendarPickerVisibility,
    toggleTimePickerVisibility,
  };
}