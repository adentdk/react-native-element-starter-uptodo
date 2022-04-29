export * from '@rneui/themed';

declare module '@rneui/themed' {
  export interface TextProps {
    bold: boolean;
  }

  export interface FullTheme {
    Text: Partial<TextProps>;
  }
}