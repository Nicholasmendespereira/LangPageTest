import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { useTheme } from '@mui/material/styles';
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


import Logo from '../../assets/logo-headephone-sem-fundo.png'

import { Header, Main, Aside, Main2, Card, Button, Main3, Button2, Footer, Div } from './style'
import { GiSoundWaves } from 'react-icons/gi'
import { FiBluetooth } from 'react-icons/fi'
import { SlEnergy } from 'react-icons/sl'
import { FaHeadphones } from 'react-icons/fa'
import { AiOutlineInstagram, AiOutlineFacebook, AiOutlineYoutube, AiFillTwitterSquare } from 'react-icons/ai'

function Phone() {
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

                <Grid item xs={12} style={{ padding: "0" }}>
                    <Main>
                        <Header>
                            <img src={Logo} alt="Logo" className='logo' />
                        </Header>
                        <Aside>
                            <h3>Reiventando a <br /> Experiência do som</h3>
                            <Button>Surpreenda-se</Button>
                        </Aside>
                    </Main>
                </Grid>
                <Grid item xs={12} style={{ padding: "0" }}>
                    <Main2>
                        <Card position={"end"} margin={"0 8%"}>
                            <GiSoundWaves className='icon' />
                            <h4>Alta Qualidade de
                                Som</h4>
                            <small>Clique aqui para saber mais <br />
                                sobre a qualidade que podemos <br />
                                oferecer.</small>
                        </Card>
                        <Card position={"start"} margin={"0 10%"}>
                            <FiBluetooth className='icon' />
                            <h4>Fácil ultilização sem

                                fio</h4>
                            <small>Clique aqui para saber mais <br />
                                sobre a a ptráticiade que podemos <br />
                                oferecer.</small>
                        </Card>
                    </Main2>
                </Grid>
                <Grid item xs={12} style={{ padding: "0" }}>
                    <Main3>
                        <Card position={"center"} margin={"0 auto"}>
                            <SlEnergy className='icon' />
                            <h4>Longa duração da<br />
                                Bateria</h4>
                            <small>Clique aqui para saber mais <br />
                                sobre a qualidade que podemos <br />
                                oferecer.</small>
                        </Card>
                        <Card position={"center"} margin={"0 auto"}>
                            <FaHeadphones className='icon' />
                            <h4>Design inovador e
                                <br />
                                Disruptivo</h4>
                            <small>Clique aqui para saber mais <br />
                                sobre a a ptráticiade que podemos <br />
                                oferecer.</small>
                        </Card>
                        <Button2>
                            Conhecer!
                        </Button2>
                    </Main3>
                </Grid>
                <Grid item xs={12} style={{ padding: "0" }}>
                    <Footer>
                        <Div rotate={"rotate(180deg)"}>
                        </Div>
                        <div className='contact'>
                            500 - Tocantins  <br />
                            Brasil - Uberlândia - MG <br />
                            Tel: (34)9999-9999 | | test@gmail.com
                        </div>
                        <div >
                            <p>Redes Sociais</p>
                            <AiOutlineInstagram className='socialIcon' onClick={() => window.open("https://www.instagram.com/", "target")} />
                            <AiOutlineFacebook className='socialIcon' onClick={() => window.open("https://www.facebook.com/", "target")} />
                            <AiOutlineYoutube className='socialIcon' onClick={() => window.open("https://www.youtube.com/", "target")} />
                            <AiFillTwitterSquare className='socialIcon' onClick={() => window.open("https://twitter.com/login?lang=pt", "target")} />
                        </div>
                        <Div rotate={"rotate(0deg)"}>
                        </Div>
                    </Footer>
                </Grid>

            </Grid>
        </Box>
    )
}
export default Phone;