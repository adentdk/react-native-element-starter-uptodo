import { ThemeOptions } from "@rneui/themed";
import { fontFamilies } from "./font";

const Text: ThemeOptions['Text'] = ({ fontFamily, lg, center, style }) => {
  console.log(lg)
  return {
    h1Style: {
      fontFamily: fontFamilies.bold,
      fontSize: 40,
    },
    h2Style: {
      fontFamily: fontFamilies.bold,
      fontSize: 32,
    },
    style: [
      style,
      {
        fontFamily: fontFamily !== undefined ? fontFamilies[fontFamily] : fontFamilies.regular,
      },
      lg && {
        fontSize: 16,
      },
      center && {
        textAlign: "center",
      },
    ]
  }
}

const Button: ThemeOptions['Button'] = ({ style }) => {
  return {
    style: [
      style,
    ],
    titleStyle: {
      fontFamily: fontFamilies.regular,
      fontSize: 16,
      paddingVertical: 12,
      paddingHorizontal: 24,
    }
  }
}

export default {
  Text,
  Button,
}
