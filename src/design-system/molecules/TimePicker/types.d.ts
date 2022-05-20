declare namespace iTimePicker {
  interface Props {
    value?: string;
    visible?: boolean;
    finishText?: string;
    cancelText?: string;
    onDismiss?: () => void;
    onSelect?: (value: string) => void;
    onFinish?: () => void;
    onCancel?: () => void;
  }

  interface Ref {
    togglePickerVisibility: () => void;
  }
}

export { iTimePicker };
