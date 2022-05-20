import { makeStyles } from "@rneui/themed";

export const useStyles = makeStyles(theme => ({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  timepicker: {
    minHeight: 326,
    borderRadius: 4,
    backgroundColor: theme.colors?.card,
    padding: 8,
  },
  timepickerHeader: {
    borderBottomWidth: 1,
    borderBottomColor: theme.colors?.greyOutline,
    paddingBottom: 10,
  },
  timepickerBody: {
    flex: 1,
  },
  timepickerFooter: {
    flexDirection: "row",
  },
}));