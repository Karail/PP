import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Routers } from "./routers/Routers";
import { createMuiTheme, ThemeProvider } from "@material-ui/core";

const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#fff",
      dark: "#000",
      main: "#218373",
    },
  },
});

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Routers />
  </ThemeProvider>,
  document.getElementById("root")
);
