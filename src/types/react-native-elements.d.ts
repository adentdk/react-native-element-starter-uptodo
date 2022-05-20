import { FontFamily } from '@theme/font';
import { StyleProp, TextStyle } from 'react-native';

export * from '@rneui/themed';

declare module '@rneui/themed' {
  export interface TextProps {
    bold?: boolean;
    fontFamily?: FontFamily;
    lg?: boolean;
    xl?: boolean;
    xxl?: boolean;
    lgStyle?: StyleProp<TextStyle>;
    center?: boolean;
    color?: string;
    fontSize?: number;
  }

  export interface BottomSheetProps {
    children: React.ReactNode;
  }

  export interface Colors {
    card: string;
  }

  export interface Theme {
    headerHeight?: number;
    screenWithHeader?: number;
    screenWithTwoHeader?: number;
    fontFamilies?: {
      [key in FontFamily]?: string;
    }
  }

  export interface FullTheme {
    Text: Partial<TextProps>;
    BottomSheet: Partial<BottomSheetProps>;
  }
}