import { makeStyles } from "@rneui/themed";

export const useStyles = makeStyles(theme => ({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  timepicker: {
    minHeight: 254,
    borderRadius: 4,
    backgroundColor: theme.colors?.card,
    padding: 10,
  },
  timepickerHeader: {
    borderBottomWidth: 1,
    borderBottomColor: theme.colors?.greyOutline,
    paddingBottom: 20,
    paddingTop: 10,
  },
  timepickerBody: {
    flex: 1,
    flexDirection: "row",
    paddingVertical: 21,
    justifyContent: 'center',
    alignItems: 'center',
  },
  hourPicker: {
    marginRight: 13,
  },
  minutePicker: {
    marginLeft: 14,
    marginRight: 16,
  },
  timepickerFooter: {
    flexDirection: "row",
  },
  scrollInput: {
    width: 64,
  },
}));