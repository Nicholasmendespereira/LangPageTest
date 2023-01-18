import { Header, Button, Tittle, SubTittle, BarColor, Content2, ContainerFlex } from './style'
import img1 from '../../assets/img33.jpg'
import img2 from '../../assets/img2.jpg'
import img3 from '../../assets/img3.jpg'

import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { styled, useTheme } from '@mui/material/styles';
import Drawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';

import CssBaseline from '@mui/material/CssBaseline';
import List from '@mui/material/List';

import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';

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
import { HiOutlinePhotograph } from 'react-icons/hi'
import { GiMicrophone } from 'react-icons/gi'
import { BsCameraVideo } from 'react-icons/bs'
import { AiOutlineCamera } from 'react-icons/ai'





function Pothography() {
    const drawerWidth = 240;
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
                                    <li><RiMenu3Fill className='menuToggle' style={{ visibility: "hidden" }} /></li>
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
                    <Box sx={{ display: 'flex' }} >
                        <CssBaseline />
                        <AppBar position="fixed" open={open} id="toggletest" style={{ backgroundColor: "rgb(00, 00, 00, 0.0)", width: "3rem", marginRight: "9.5rem", marginTop: "0.5rem", boxShadow: "none", color: "#d66939" }}
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
                    <Content2>
                        <Tittle>
                            <h2>What can do for you</h2>
                        </Tittle>
                        <ContainerFlex>
                            <div>
                                <AiOutlineCamera className='iconContent2' />
                                <SubTittle>Photo shooting</SubTittle>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum dignissimos laudantium magnam recusandae, amet sapiente. Quidem quam dignissimos consectetur ad sunt perferendis eveniet excepturi ipsa, tempora culpa minus dolores natus.</p>
                            </div>
                            <div>
                                <BsCameraVideo className='iconContent2' />
                                <SubTittle>Video shooting</SubTittle>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus fugiat sed at quidem, officia eligendi eos tempore repudiandae, excepturi laborum corrupti et debitis qui repellendus consequuntur id. Labore, possimus modi!</p>
                            </div>
                            <div>
                                <HiOutlinePhotograph className='iconContent2' />
                                <SubTittle>Retouch</SubTittle>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, debitis maxime amet consequatur sunt aut doloribus vero beatae hic enim inventore consectetur. Eum iure beatae quisquam repellat eaque consectetur necessitatibus.</p>
                            </div>
                            <div>
                                <GiMicrophone className='iconContent2' />
                                <SubTittle>Sound recording</SubTittle>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, debitis maxime amet consequatur sunt aut doloribus vero beatae hic enim inventore consectetur. Eum iure beatae quisquam repellat eaque consectetur necessitatibus.</p>
                            </div>
                        </ContainerFlex>
                        <ContainerFlex>
                            <BarColor className='content2'>
                            </BarColor>
                            <Tittle><h2>My lastest works</h2></Tittle>
                        </ContainerFlex>

                    </Content2>
                </Grid>
                <Grid item xs={12}>
                <ContainerFlex>
                    <img src={img1} alt="img1" className='imgsContainer3'/>
                    <img src={img2} alt="img2" className='imgsContainer3'/>
                    <img src={img3} alt="img3" className='imgsContainer3'/>
                </ContainerFlex>
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