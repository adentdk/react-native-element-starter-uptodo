import { makeStyles } from "@rneui/themed"

export const useStyles = makeStyles((theme) => {
  return {
    body: {
      paddingHorizontal: 24,
      paddingVertical: 20,
    },
    loginTitle: {
      marginBottom: 56,
    },
    loginForm: {
      marginBottom: 8,
    },
    loginButton: {
      marginBottom: 31,
      marginTop: 30,
    },
    buttons: {
      marginTop: 20,
    },
    forgotPassword: {
      textAlign: 'right',
      marginTop: -24,
      fontSize: 12, 
    }
  }
})