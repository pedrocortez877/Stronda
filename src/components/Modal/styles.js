import { createTheme } from "@mui/material/styles";

export const sxContainer = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "var(--background_light)",
  border: "2px solid var(--gray-dark)",
  borderRadius: "10px",
  boxShadow: 24,
  paddingTop: 1,
  paddingRight: 2,
  paddingBottom: 2,
};

export const sxTitleContainer = {
  textAlign: "center",

  color: "var(--primary70)",

  fontSize: "22px",
  fontWeight: "bold",
};

export const theme = createTheme({
  palette: {
    primary: {
      main: "rgba(26, 176, 76, 0.7)",
    },
  },
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          "& label": {
            color: "grey",
          },
          "& input": {
            color: "white",
          },
          "& .MuiInput-underline:after": {
            borderBottomColor: "yellow",
          },
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "rgba(26, 176, 76, 0.7)",
            },
          },
        },
      },
    },
    MuiAutocomplete: {
      styleOverrides: {
        root: {
          "& label": {
            color: "grey",
          },
          "& input": {
            color: "white",
          },
          "& .MuiInput-underline:after": {
            borderBottomColor: "yellow",
          },
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "rgba(26, 176, 76, 0.7)",
            },
          },
        },
      },
    },
  },
});
