import { createTheme } from "@rneui/themed";
import { darkColors, lightColors } from "./colors";
import components from "./components";

const themes = createTheme({
  ...components,
  lightColors: lightColors,
  darkColors: darkColors,
  mode: 'dark',
});

export default themes;
