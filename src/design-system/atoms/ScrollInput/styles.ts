import { makeStyles } from "@rneui/themed";
import { addAlpha } from "helpers/colors";



export const useStyles = makeStyles(theme => ({
  container: {
    backgroundColor: addAlpha(theme.mode === "light" ? theme.colors?.black : theme.colors?.white, 0.2),
    borderRadius: 4,
  },
  item: {
    justifyContent: 'center',
  },
  itemActive: {},
}));