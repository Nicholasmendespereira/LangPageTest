import { Header, Button } from './style'


import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { styled, useTheme } from '@mui/material/styles';
import Drawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import CssBaseline from '@mui/material/CssBaseline';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';


import { TiSocialLinkedin, TiSocialGithub, TiSocialYoutube, TiSocialInstagram } from 'react-icons/ti'
import { SiReact } from 'react-icons/si'
import { RiMenu3Fill } from 'react-icons/ri'




function Pothography() {
    const drawerWidth = 240;
    const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
        ({ theme, open }) => ({
            flexGrow: 1,
            padding: theme.spacing(3),
            transition: theme.transitions.create('margin', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen,
            }),
            marginRight: -drawerWidth,
            ...(open && {
                transition: theme.transitions.create('margin', {
                    easing: theme.transitions.easing.easeOut,
                    duration: theme.transitions.duration.enteringScreen,
                }),
                marginRight: 0,
            }),
        }),
    );

    const AppBar = styled(MuiAppBar, {
        shouldForwardProp: (prop) => prop !== 'open',
    })(({ theme, open }) => ({
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        ...(open && {
            width: `calc(100% - ${drawerWidth}px)`,
            transition: theme.transitions.create(['margin', 'width'], {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
            marginRight: drawerWidth,
        }),
    }));

    const DrawerHeader = styled('div')(({ theme }) => ({
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        justifyContent: 'flex-start',
    }));

    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Header>
                        <div className='container-header'>
                            <div style={{ display: "flex", alignItems: "center", marginLeft: "5.2rem" }}><SiReact className='menuToggle' style={{ marginRight: "0.8rem" }} />Contructor WebSites</div>
                            <div>
                                <ul className='nav-header'>
                                    <li>Contact</li>
                                    <li>linguas</li>
                                    <li><RiMenu3Fill className='menuToggle' /></li>
                                </ul>
                            </div>
                        </div>
                        <div className='containerContentHeader'>
                            <div className='rede-social-header'>
                                <div className="arrows" style={{ marginBottom: "2rem", marginTop: "2rem" }} />
                                <TiSocialLinkedin className="social" />
                                <TiSocialGithub className="social" />
                                <TiSocialYoutube className="social" />
                                <TiSocialInstagram className="social" />
                                <div id='teste' className="arrows" />

                            </div>
                            <div className='textContent-header'>
                                <h1>Testando o test</h1>
                                <p style={{ fontFamily: 'Cyntho Next Light' }}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam eligendi molestiae quae perferendis eaque magnam quia voluptatibus, ipsa dolor? Voluptate reiciendis, tenetur consequuntur minus natus illo! Nihil perspiciatis eos magnam?</p>
                                <button id='buttonContent'>Veja mais</button>
                            </div>
                        </div>
                    </Header>
                    {/* ////////////////////////////////////////////////// */}
                    <Box sx={{ display: 'flex' }}>
                        <CssBaseline />
                        <AppBar position="fixed" open={open}  id="toggletest" style={{backgroundColor: "rgb(00, 00, 00, 0.0)", width:"3rem", marginRight:"5.8rem", marginTop:"0.5rem", boxShadow:"none"}}
                        className='menuToggle'
                        >                      
                                <IconButton
                                    color="inherit"
                                    aria-label="open drawer"
                                    edge="end"
                                    onClick={handleDrawerOpen}
                                    sx={{ ...(open && { display: 'none' }) }}
                                >
                                    <RiMenu3Fill className='menuToggle' />
                                </IconButton>              
                        </AppBar>

                        <Drawer
                            sx={{
                                width: drawerWidth,
                                flexShrink: 0,
                                '& .MuiDrawer-paper': {
                                    width: drawerWidth,
                                },
                            }}
                            variant="persistent"
                            anchor="right"
                            open={open}
                        >
                            <DrawerHeader>
                                <IconButton onClick={handleDrawerClose}>
                                    {theme.direction === 'rtl' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                                </IconButton>
                            </DrawerHeader>
                            <Divider />
                            <List>
                                {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                                    <ListItem key={text} disablePadding>
                                        <ListItemButton>
                                            <ListItemIcon>
                                                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                                            </ListItemIcon>
                                            <ListItemText primary={text} />
                                        </ListItemButton>
                                    </ListItem>
                                ))}
                            </List>
                            <Divider /> 
                            <List>
                                {['All mail', 'Trash', 'Spam'].map((text, index) => (
                                    <ListItem key={text} disablePadding>
                                        <ListItemButton>
                                            <ListItemIcon>
                                                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                                            </ListItemIcon>
                                            <ListItemText primary={text} />
                                        </ListItemButton>
                                    </ListItem>
                                ))}
                            </List>
                        </Drawer>
                    </Box>
                    {/* ////////////////////////////////////////////////// */}
                </Grid>
                <Grid item xs={12}>
                    Content1
                </Grid>
                <Grid item xs={12}>
                    Content2
                </Grid>
                <Grid item xs={12}>
                    Content3
                </Grid>
                <Grid item xs={12}>
                    Content4
                </Grid>
                <Grid item xs={12}>
                    Content5
                </Grid>
                <Grid item xs={12}>
                    Content6
                </Grid>
                <Grid item xs={12}>
                    Footer
                </Grid>
            </Grid>
        </Box>
    )
};
export default Pothography;