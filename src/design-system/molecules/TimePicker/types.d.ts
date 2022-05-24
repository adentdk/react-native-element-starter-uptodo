import { ControllerProps } from "react-hook-form";

declare namespace iTimePicker {
  interface Props {
    value?: string;
    visible?: boolean;
    finishText?: string;
    cancelText?: string;
    onSelect?: (value: string) => void;
    onFinish?: () => void;
    onCancel?: () => void;
  }

  interface Ref {
    togglePickerVisibility: () => void;
  }

  interface PropControl extends Omit<Props, 'ref' | 'value'> {
    formProps: Omit<ControllerProps<any>, 'render'>
  }
}

export { iTimePicker };
