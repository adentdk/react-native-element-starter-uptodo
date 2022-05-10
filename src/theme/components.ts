import { Theme, ThemeOptions } from "@rneui/themed";
import { fontFamilies } from "./font";

const Text: ThemeOptions['Text'] = ({ fontFamily, lg, center }) => {
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

const Button: ThemeOptions['Button'] = ({ }) => {
  return {
    titleStyle: {
      fontFamily: fontFamilies.regular,
      fontSize: 16,
      paddingVertical: 12,
      paddingHorizontal: 24,
    }
  }
}

const Input: ThemeOptions['Input'] = ({  }) => {
  return {
    labelStyle: {
      fontFamily: fontFamilies.regular,
      fontSize: 16,
      lineHeight: 16 * 1.5,
      fontWeight: '400',
      marginBottom: 8
    },
    containerStyle: {
      paddingHorizontal: 0,
    },
    inputContainerStyle: {
      borderWidth: 0.8,
      paddingHorizontal: 12,
      paddingVertical: 4,
      borderRadius: 4,
    },
    inputStyle: {
      fontFamily: fontFamilies.regular,
      fontSize: 16,
      lineHeight: 16 * 1.5,
      padding: 0,
    }
  }
}

export default {
  Text,
  Button,
  Input
}
