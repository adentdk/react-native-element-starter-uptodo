import { makeStyles } from "@rneui/themed";
import { addAlpha } from "helpers/colors";

export const useStyles = makeStyles((theme) => {
  return {
    bottomSheet: {
      backgroundColor: theme.colors?.card,
      borderTopRightRadius: 16,
      borderTopLeftRadius: 16,
      minHeight: 228,
      padding: 25,
      paddingBottom: 17,
    },
    bottomSheetBackdrop: {
      backgroundColor: addAlpha(theme.colors?.background, 0.7),
    },
    bottomSheetTitle: {
      marginBottom: 16,
    },
    bottomSheetFooter: {
      flexDirection: 'row',
    },
    bottomSheetFooterButton: {
      marginRight: 32,
    },
  }
})