import { SvgProps } from "react-native-svg";

declare namespace iCategoryIcon {
  interface Props extends SvgProps {
    name: IconNames;
    size?: number;
  }

  type IconNames = 
    | 'bread'
    | 'briefcase'
    | 'sport'
    | 'game'
    | 'mortarboard'
    | 'megaphone'
    | 'music'
    | 'heartbeat'
    | 'video'
    | 'home'
    | 'add'
}

export { iCategoryIcon };