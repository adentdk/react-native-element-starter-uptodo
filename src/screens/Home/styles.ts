import { makeStyles } from "@rneui/themed";

export const useStyles = makeStyles(() => {
  return {
    body: {
      paddingHorizontal: 24,
      paddingVertical: 20,
    },
    emptyTaskContainer: {
      alignItems: "center",
      marginTop: 75,
    },
    emptyTaskParagraph: {
      marginBottom: 10,
    },
    navigationHeaderButton: {
      marginHorizontal: 25
    },
  };
});