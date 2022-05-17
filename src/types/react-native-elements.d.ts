import { FontFamily } from '@theme/font';
import { StyleProp, TextStyle } from 'react-native';

export * from '@rneui/themed';

declare module '@rneui/themed' {
  export interface TextProps {
    bold?: boolean;
    fontFamily?: FontFamily;
    lg?: boolean;
    lgStyle?: StyleProp<TextStyle>;
    center?: boolean;
  }

  export interface FullTheme {
    Text: Partial<TextProps>;
  }

  export interface Theme {
    headerHeight: number;
    screenWithHeader: number;
    screenWithTwoHeader: number;
  }
}