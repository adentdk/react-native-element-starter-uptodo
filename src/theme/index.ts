import { createTheme } from "@rneui/themed";
import { Dimensions } from "react-native";
import { darkColors, lightColors } from "./colors";
import components from "./components";

const themes = createTheme({
  ...components,
  lightColors: lightColors,
  darkColors: darkColors,
  mode: 'light',
  headerHeight: 49,
  screenWithHeader: Dimensions.get('screen').height - 49,
  screenWithTwoHeader: Dimensions.get('screen').height - 49 * 2
});

export default themes;
