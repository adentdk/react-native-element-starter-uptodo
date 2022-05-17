import { makeStyles } from "@rneui/themed"

export const useStyles = makeStyles((theme) => {
  return {
    body: {
      paddingHorizontal: 24,
      paddingVertical: 20,
    },
    registerTitle: {
      marginBottom: 56,
    },
    registerForm: {
      marginBottom: 8,
    },
    registerButton: {
      marginBottom: 31,
      marginTop: 30,
    },
    buttons: {
      marginTop: 20,
    }
  }
})