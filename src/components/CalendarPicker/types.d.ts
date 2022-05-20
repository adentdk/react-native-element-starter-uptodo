import { CalendarProps } from "react-native-calendars";

declare namespace iCalendarPicker {
  interface Props extends CalendarProps {
    value?: Date,
    visible?: boolean;
    onDismiss?: () => void;
    onSelect?: (date: Date, fdate: string) => void;
    finishText?: string;
    cancelText?: string;
    onFinish?: () => void;
    onCancel?: () => void;
  }

  interface Ref {
    togglePickerVisibility: () => void;
  }
}

export { iCalendarPicker };
