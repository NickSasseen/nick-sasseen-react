import { AppBar, Box, Container, IconButton, Toolbar, Typography, Button, Menu, MenuItem, Drawer, List, ListItem, ListItemButton, ListItemText, ListItemIcon } from '@mui/material';
import './App.css';
import { DarkMode, DeveloperMode, LightMode, Login } from '@mui/icons-material';
import useMediaQuery from '@mui/material/useMediaQuery';
import MenuIcon from "@mui/icons-material/Menu";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import React, { useState, useMemo } from 'react';

const pages = ["Movies"];

function App() {
  const [colorThemeIsDark, setColorThemeIsDark] = useState(useMediaQuery('(prefers-color-scheme: dark)'));
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

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

  const toggleDrawer = () => {
    setDrawerIsOpen(!drawerIsOpen);
  }

  const lightDarkIcon =
    <Box sx={{ flexGrow: 0 }}>
      <IconButton sx={{ p: 0 }} onClick={changeColorTheme}>
        {
          colorThemeIsDark ? <DarkMode /> : <LightMode />
        }
      </IconButton>
    </Box>

  const mobileToolbar =
    <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
      <IconButton size='large' onClick={toggleDrawer}>
        <MenuIcon />
      </IconButton>
      <DeveloperMode />
      {
        lightDarkIcon
      }
    </Toolbar>;

  const desktopToolbar =
    <Toolbar disableGutters>
      <DeveloperMode />

      <Box sx={{ flexGrow: 1, display: 'flex' }}>
        {pages.map((page) => (
          <Button
            key={page}
            onClick={handleCloseNavMenu}
            sx={{ my: 2, color: 'white', display: 'block' }}
          >
            {page}
          </Button>
        ))}
      </Box>

      {
        lightDarkIcon
      }
    </Toolbar>

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar>
        <Container maxWidth="xl">
          <Box sx={{display: {xs: 'block', md: 'none'}}}>
            {
              mobileToolbar
            }
          </Box>
          <Box sx={{display: {xs: 'none', md: 'block'}}}>
            {
              desktopToolbar
            }
          </Box>

          <Drawer
            variant="temporary"
            open={drawerIsOpen}
            onClose={toggleDrawer}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{ '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 250 } }}
          >
            <div>
              <List>
                {pages.map((text, index) => (
                  <ListItem key={text} disablePadding>
                    <ListItemButton>
                      <ListItemIcon>
                        {
                          // PUT ICONS HERE
                        }
                      </ListItemIcon>
                      <ListItemText primary={text} />
                    </ListItemButton>
                  </ListItem>
                ))}
              </List>
            </div>
          </Drawer>
        </Container>
      </AppBar>
    </ThemeProvider>
  );

  const otherToolbar = <Toolbar disableGutters sx={{ display: 'flex', justifyContent: 'space-between' }}>
    <DeveloperMode sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
      {pages.map((page) => (
        <Button
          key={page}
          onClick={handleCloseNavMenu}
          sx={{ my: 2, color: 'white', display: 'block' }}
        >
          {page}
        </Button>
      ))}
    </Box>

    {
      // Mobile 
    }
    <Box sx={{ display: { xs: 'flex', md: 'none' }, justifyContent: "space-between" }}>
      { /* menu icon */}
      <Box>
        <IconButton size='large' onClick={toggleDrawer}>
          <MenuIcon />
        </IconButton>
      </Box>

      { /* icon */}
      <DeveloperMode />
    </Box>
  </Toolbar>
}

export default App;
