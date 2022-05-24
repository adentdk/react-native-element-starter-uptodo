import { makeStyles } from "@rneui/themed";

export const useStyles = makeStyles(theme => ({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    backgroundColor: theme.colors?.background,
  },
  categorycreateHeader: {
    paddingBottom: 26,
    paddingTop: 10,
  },
  categorycreateBody: {
    flex: 1,
    paddingVertical: 21,
  },
  categorycreateFooter: {
    flexDirection: "row",
    paddingBottom: 40,
  },
}));