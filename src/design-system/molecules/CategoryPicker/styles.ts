import { makeStyles } from "@rneui/themed";

export const useStyles = makeStyles(theme => ({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  categorypicker: {
    minHeight: 254,
    borderRadius: 4,
    backgroundColor: theme.colors?.card,
    padding: 10,
  },
  categorypickerHeader: {
    borderBottomWidth: 1,
    borderBottomColor: theme.colors?.greyOutline,
    paddingBottom: 20,
    paddingTop: 10,
  },
  categorypickerBody: {
    flex: 1,
    flexDirection: "row",
    paddingVertical: 21,
    flexWrap: 'wrap',
  },
  categorypickerItem: {
    width: 74,
  },
  categorypickerItemIcon: {
    width: 64,
    height: 64,
    borderRadius: 4,
    backgroundColor: '#80FFD1',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 5,
  },
  categorypickerFooter: {
    flexDirection: "row",
  },
}));