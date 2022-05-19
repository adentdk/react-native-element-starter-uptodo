
declare module '*.svg' {
  import React from 'react';
  import { ColorValue } from 'react-native';
  import { SvgProps } from "react-native-svg";
  const content: React.FC<SvgProps>;
  export default content;
}