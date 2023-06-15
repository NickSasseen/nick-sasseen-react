import { AppBar, Box, Container, IconButton, Toolbar, Typography } from '@mui/material';
import './App.css';
import { DarkMode, DeveloperMode, LightMode, Login } from '@mui/icons-material';
import useMediaQuery from '@mui/material/useMediaQuery';
import MenuIcon from "@mui/icons-material/Menu";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { useState, useMemo } from 'react';

const pages = ["Movies"];

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

  const themeIcon = colorThemeIsDark ? 
      <DarkMode /> : <LightMode />

  const changeColorTheme = () => setColorThemeIsDark(!colorThemeIsDark);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <DeveloperMode sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />

            {
              // Mobile 
            }
            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton size='large'>
                <MenuIcon />
              </IconButton>
            </Box>

            <DeveloperMode sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
            <Typography
              variant="h5"
              noWrap
              component="a"
              href=""
              sx={{
                mr: 2,
                display: { xs: 'flex', md: 'none' },
                flexGrow: 1,
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              LOGO
            </Typography>

            <Box sx={{ flexGrow: 0 }}>
              <IconButton sx={{ p: 0 }} onClick={changeColorTheme}>
                {
                  themeIcon
                }
              </IconButton>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  );
}

export default App;
