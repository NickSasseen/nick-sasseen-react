import './App.css';
import useMediaQuery from '@mui/material/useMediaQuery';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import React, { useState, useMemo } from 'react';
import AppBar from './components/layout/AppBar';
import { Outlet, BrowserRouter, Routes, Route } from 'react-router-dom';
import Movies from './pages/Movies';
import NoPage from './pages/404';

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
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Movies />}>
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
      <AppBar changeColorTheme={changeColorTheme} themeIsDark={colorThemeIsDark} />

      <Outlet />
    </ThemeProvider>
  );
}

export default App;
