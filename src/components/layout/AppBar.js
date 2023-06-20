import { AppBar as MuiAppBar, Box, Chip, Divider, Container, IconButton, Toolbar, Button, Drawer, List, ListItem, ListItemButton, ListItemText, ListItemIcon } from '@mui/material';
import { DarkMode, DeveloperMode, LightMode, Movie } from '@mui/icons-material';
import MenuIcon from "@mui/icons-material/Menu";
import React, { useState } from 'react';

const pages = ["Movies"];

const AppBar = ({ changeColorTheme, themeIsDark }) => {
    const [drawerIsOpen, setDrawerIsOpen] = useState(false);

    const toggleDrawer = () => {
        setDrawerIsOpen(!drawerIsOpen);
    }

    const lightDarkIcon =
        <Box sx={{ flexGrow: 0 }}>
            <IconButton sx={{ p: 0 }} onClick={() => changeColorTheme()}>
                {
                    themeIsDark ? <DarkMode /> : <LightMode />
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
        <MuiAppBar>
            <Container maxWidth="xl">
                <Box sx={{ display: { xs: 'block', md: 'none' } }}>
                    {
                        mobileToolbar
                    }
                </Box>
                <Box sx={{ display: { xs: 'none', md: 'block' } }}>
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
                            <Divider>
                                <Chip label="My personal projects" />
                            </Divider>
                            {pages.map((text, index) => (
                                <ListItem key={text} disablePadding>
                                    <ListItemButton>
                                        <ListItemIcon>
                                            {

                                            }
                                            <Movie />
                                        </ListItemIcon>
                                        <ListItemText primary={text} />
                                    </ListItemButton>
                                </ListItem>
                            ))}
                        </List>
                    </div>
                </Drawer>
            </Container>
        </MuiAppBar>
    );
}

export default AppBar;