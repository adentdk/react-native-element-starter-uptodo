import { generateArray } from "helpers/array";
import { getTimeJson } from "helpers/datetime";
import { useEffect, useRef, useState } from "react";
import { iTimePicker } from "./types";

interface Params {
  visible?: boolean;
  value: string;
  onSelect?: (time: string) => void;
  onFinish?: () => void;
}

export const useTimePicker = ({ visible = false, value, onSelect, onFinish }: Params) => {

  const timeJson = getTimeJson(value);

  const [isPickerVisible, setIsPickerVisible] = useState(visible);
  const [hours, setHours] = useState(timeJson.hours12.toString().padStart(2, "0"));
  const [minutes, setMinutes] = useState(timeJson.minutes.toString().padStart(2, "0"));
  const [ampm, setAmpm] = useState(timeJson.ampm);

  const [hourItems] = useState<ValueLabel[]>(
    generateArray(12).map(i => ({
      value: (i + 1).toString().padStart(2, '0'),
      label: (i + 1).toString().padStart(2, '0'),
    })));

  const [minuteItems] = useState<ValueLabel[]>(
    generateArray(60).map(i => ({
      value: i.toString().padStart(2, '0'),
      label: i.toString().padStart(2, '0'),
    })));

  const [ampmItems] = useState<ValueLabel[]>(
    [
      { value: "AM", label: "AM" },
      { value: "PM", label: "PM" },
    ]);


  const togglePickerVisibility = () => {
    setIsPickerVisible(prevState => !prevState);
  };

  const pickerRef = useRef<iTimePicker.Ref>(null);

  const onSaveTime = () => {

    if (onSelect) {
      onSelect(`${hours}:${minutes} ${ampm}`);
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
    hours,
    minutes,
    ampm,
    hourItems,
    minuteItems,
    ampmItems,
    setHours,
    setMinutes,
    setAmpm,
    togglePickerVisibility,
    onSaveTime
  }
};
