import PropTypes from "prop-types";
import React from "react";
import { useMemo } from "react";
import { CssBaseline } from "@mui/material";
import {
  ThemeProvider as MUIThemeProvider,
  createTheme,
  StyledEngineProvider,
} from "@mui/material/styles";
import getPalette from "./palette";
// import shadows from './shadows';
// import customShadows from './customShadows';
import { ScreenSizeProvider } from "./screenSizeContext";
import typography from "./typography";
import GlobalStyles from "./globalStyles";
// import componentsOverride from './overrides';

ThemeProvider.propTypes = {
  children: PropTypes.node,
  darkMode: PropTypes.bool,
};

export default function ThemeProvider({ children, isDarkTheme }) {
  const palette = useMemo(() => getPalette(isDarkTheme), [isDarkTheme]); // Get palette based on theme type

  const themeOptions = useMemo(
    () => ({
      palette,
      typography,
    }),
    [palette]
  );

  const theme = createTheme(themeOptions);

  return (
    <StyledEngineProvider injectFirst>
      <MUIThemeProvider theme={theme}>
        <ScreenSizeProvider>
          <CssBaseline />
          <GlobalStyles />
          {children}
        </ScreenSizeProvider>
      </MUIThemeProvider>
    </StyledEngineProvider>
  );
}
