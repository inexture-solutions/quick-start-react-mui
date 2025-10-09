import { createTheme, Theme } from "@mui/material";

export const theme: Theme = createTheme({
  palette: {
    primary: {
      light: "#b36ee0",
      main: "#9231c6",
      dark: "#651b96",
      contrastText: "#fff",
    },
    secondary: {
      light: "#33bdb4",
      main: "#0c7a72",
      dark: "#004e48",
      contrastText: "#fff",
    },
  },
  typography: {
    fontFamily: "Montserrat",
    h1: {
      fontFamily: "Montserrat",
    },
    allVariants: {
      fontFamily: "Montserrat",
      fontWeight: "normal",
      borderRadius: 5,
    },
  },
  components: {
    MuiAppBar: {
      defaultProps: {
        color: "default",
        elevation: 2,
      },
    },
  },
});
