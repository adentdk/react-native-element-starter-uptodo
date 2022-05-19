import { makeStyles } from "@rneui/themed";

export const useStyles = makeStyles(theme => ({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  calendar: {
    minHeight: 326,
    borderRadius: 4,
  },
  calendarHeader: {
    color: theme.colors?.black,
  }
}));