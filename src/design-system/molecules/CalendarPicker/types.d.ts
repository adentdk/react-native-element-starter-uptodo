import { ControllerProps } from "react-hook-form";
import { CalendarProps } from "react-native-calendars";

declare namespace iCalendarPicker {
  interface Props extends CalendarProps {
    value?: Date,
    visible?: boolean;
    onSelect?: (date: Date, fdate: string) => void;
    finishText?: string;
    cancelText?: string;
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

export { iCalendarPicker };
