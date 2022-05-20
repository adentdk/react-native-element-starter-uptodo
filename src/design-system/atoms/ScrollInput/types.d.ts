import { StyleProp, ViewStyle, ViewToken } from "react-native";

declare namespace iScrollInput {
  interface Props {
    selectedValue?: string;
    onSelect?: (value: string) => void;
    items: ValueLabel[];
    containerStyle?: StyleProp<ViewStyle>;
    itemStyle?: StyleProp<ViewStyle>;
    itemHeight?: number;
    infinite?: boolean;
  }

  interface OnViewableItemsChangedParams {
    viewableItems: ViewToken[];
    changed: ViewToken[];
  }
}

export { iScrollInput };
