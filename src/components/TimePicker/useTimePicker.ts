import { generateArray } from "helpers/array";
import { useEffect, useRef, useState } from "react";
import { iTimePicker } from "./types";

interface Params {
  visible?: boolean;
  value: string;
  onSelect?: (time: string) => void;
  onFinish?: () => void;
}

export const useTimePicker = ({ visible = false, value, onSelect, onFinish }: Params) => {
  const [isPickerVisible, setIsPickerVisible] = useState(visible);
  const [hours, setHours] = useState('01');
  const [minutes, setMinutes] = useState('00');
  const [ampm, setAmpm] = useState("AM");

  const [hourItems] = useState<ValueLabel[]>(
    generateArray(24).map(i => ({
      value: i.toString(),
      label: i.toString().padStart(2, '0'),
    })));

  const togglePickerVisibility = () => {
    setIsPickerVisible(prevState => !prevState);
  };

  const pickerRef = useRef<iTimePicker.Ref>(null);

  const onSaveTime = () => {

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
    hours,
    minutes,
    ampm,
    hourItems,
    setHours,
    setMinutes,
    setAmpm,
    togglePickerVisibility,
    onSaveTime
  }
};
