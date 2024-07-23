import React from "react";
import { createTheme, ThemeProvider } from "@mui/material";

const theme = createTheme({
  typography: {
    fontFamily: "inherit",
  },
});

const AppThemeProvider = ({ children }) => {
  return (
    <main className="bg-black">
      <ThemeProvider theme={theme}>
        <section className="max-w-[100rem] mx-auto w-full">{children}</section>
      </ThemeProvider>
    </main>
  );
};

export default AppThemeProvider;
