import { makeStyles } from "@rneui/themed";

export const useStyles = makeStyles(theme => ({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  categorycreate: {
    minHeight: 254,
    borderRadius: 4,
    backgroundColor: theme.colors?.card,
    padding: 10,
  },
  categorycreateHeader: {
    borderBottomWidth: 1,
    borderBottomColor: theme.colors?.greyOutline,
    paddingBottom: 20,
    paddingTop: 10,
  },
  categorycreateBody: {
    flex: 1,
    paddingVertical: 21,
  },
  categorycreateFooter: {
    flexDirection: "row",
  },
}));