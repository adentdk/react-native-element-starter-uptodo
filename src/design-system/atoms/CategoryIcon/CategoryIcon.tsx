import React, { FC } from 'react';
import SvgIcon from 'react-native-svg-icon';
import svgs from './svgs';
import { iCategoryIcon } from './types';

const Icon: FC<iCategoryIcon.Props> = ({ onPress, ...props }) => (
  <SvgIcon {...props} svgs={svgs} />
);

export default Icon;