import './App.css';
import useMediaQuery from '@mui/material/useMediaQuery';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import React, { useState, useMemo } from 'react';
import AppBar from './components/layout/AppBar';

function App() {
  const [colorThemeIsDark, setColorThemeIsDark] = useState(useMediaQuery('(prefers-color-scheme: dark)'));

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: !colorThemeIsDark ? 'dark' : 'light',
        },
      }),
    [colorThemeIsDark],
  );

  const changeColorTheme = () => setColorThemeIsDark(!colorThemeIsDark);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar changeColorTheme={changeColorTheme} themeIsDark={colorThemeIsDark} />
    </ThemeProvider>
  );
}

export default App;
