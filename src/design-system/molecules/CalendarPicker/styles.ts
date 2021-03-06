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
    backgroundColor: theme.colors?.card,
    padding: 8,
  },
  calendarHeader: {
    color: theme.colors?.black,
  },
  calendarFooter: {
    flexDirection: "row",
  },
}));