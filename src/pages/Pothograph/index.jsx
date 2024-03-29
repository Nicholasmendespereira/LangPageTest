import api from "../../api/api";

import Card from "../../components/Card/index";

import {
  Header,
  Buttton,
  Tittle,
  SubTittle,
  BarColor,
  Content2,
  Content3,
  ContainerFlex,
  NoStyled,
  Footer,
} from "./style";
import "./GlobalStyle.css";
import img1 from "../../assets/img33.jpg";
import img2 from "../../assets/img2.jpg";
import img3 from "../../assets/img3.jpg";
import img4 from "../../assets/img4.jpg";
import iconwhats from "../../assets/whatsapp.png";

import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { responsiveFontSizes, styled, useTheme } from "@mui/material/styles";
import Drawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import TextareaAutosize from "@mui/base/TextareaAutosize";

import CssBaseline from "@mui/material/CssBaseline";
import List from "@mui/material/List";

import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";

import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";

import {
  TiSocialLinkedin,
  TiSocialGithub,
  TiSocialYoutube,
  TiSocialInstagram,
} from "react-icons/ti";
import { SiReact } from "react-icons/si";
import { RiMenu3Fill } from "react-icons/ri";
import { HiOutlinePhotograph } from "react-icons/hi";
import { GiMicrophone } from "react-icons/gi";
import { BsCameraVideo, BsFillTelephoneFill } from "react-icons/bs";
import { AiOutlineCamera } from "react-icons/ai";
import { IoIosArrowDropupCircle } from "react-icons/io";
import { useState, useEffect } from "react";

function Pothography() {
  const [post, setpost] = useState(null);
  const [DataUsers, setDataUsers] = useState();
  const [formData, setformData] = useState({});

  const HandleFirst = () => {
    api.get("/users").then((response) => {
      console.log("Get do iniciar", response);
      // setDataUsers(response);
    });
  };
  useEffect(() => {
    HandleFirst();
  }, []);
  const handleForm = () => {
    api
      .post(
        "/usuarios",
        {
          name: formData?.name,
          email: formData?.email,
          telefone: formData?.telefone,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        console.log("resposta da função", response);
        setDataUsers(response);
      });
  };
  console.log("Usuários:", DataUsers);
  const handleClickOpen = () => {
    // e.preventDefault();
    // setOpen(true);
    const message = `https://api.whatsapp.com/send?phone=5534996596959&text=Olá! Gostaria de realizar uma orçamento. Meu nome é: *${formData?.name}*,meu e-mail: *${formData?.email}* e meu telefone: *${formData?.telefone}*!`;
    window.open(message, "_blank");
  };

  const drawerWidth = 240;
  const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== "open",
  })(({ theme, open }) => ({
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(["margin", "width"], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginRight: drawerWidth,
    }),
  }));

  const DrawerHeader = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-start",
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
    <Box sx={{ flexGrow: 1 }} style={{ width: "100vw" }}>
      <Grid container spacing={2} style={{ width: "100vw" }}>
        <Grid item xs={12}>
          <Header id="header">
            <div className="container-header">
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginLeft: "5.2rem",
                }}
              >
                <SiReact
                  className="menuToggle"
                  style={{ marginRight: "0.8rem" }}
                />
                Contructor WebSites
              </div>
              <div>
                <ul className="nav-header">
                  <li>Contact</li>
                  <li>linguas</li>
                  <li>
                    <RiMenu3Fill
                      className="menuToggle"
                      style={{ visibility: "hidden" }}
                    />
                  </li>
                </ul>
              </div>
            </div>
            <div className="containerContentHeader">
              <div className="rede-social-header">
                <div
                  className="arrows"
                  style={{ marginBottom: "2rem", marginTop: "2rem" }}
                />
                <TiSocialLinkedin className="social" />
                <TiSocialGithub className="social" />
                <TiSocialYoutube className="social" />
                <TiSocialInstagram className="social" />
                <div id="teste" className="arrows" />
              </div>
              <div className="textContent-header">
                <h1>Testando o test</h1>
                <p style={{ fontFamily: "Cyntho Next Light" }}>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Ullam eligendi molestiae quae perferendis eaque magnam quia
                  voluptatibus, ipsa dolor? Voluptate reiciendis, tenetur
                  consequuntur minus natus illo! Nihil perspiciatis eos magnam?
                </p>
                <Buttton
                  onClick={() => {
                    handleForm();
                  }}
                  id="buttonContent"
                >
                  Veja mais
                </Buttton>
              </div>
            </div>
            Nome:
            <input
              value={formData?.name}
              onChange={(e) =>
                setformData({ ...formData, name: e.target.value })
              }
              placeholder="Digite o seu nome"
              type="text"
              name="name-form"
              id="name-form"
              className="inputs-form"
            />
            E-mail:
            <input
              value={formData?.email}
              onChange={(e) =>
                setformData({ ...formData, email: e.target.value })
              }
              placeholder="Digite o seu email"
              type="text"
              name="email-form"
              id="email-form"
              className="inputs-form"
            />
            Telefone:
            <input
              value={formData?.telefone}
              onChange={(e) =>
                setformData({ ...formData, telefone: e.target.value })
              }
              placeholder="Digite o seu telefone"
              type="number"
              name="number-form"
              id="number-form"
              className="inputs-form"
            />
            <button
              onClick={handleClickOpen}
              disabled={!formData.telefone || !formData.email}
              className="enviar-btn"
            >
              ENVIAR
            </button>
            <ul>{/* <li>{DataUsers?.avatar}</li> */}</ul>
            <Card
              name={formData?.name}
              email={formData?.email}
              telefone={formData?.telefone}
              dataUsers={DataUsers}
            ></Card>
          </Header>
          {/* ////////////////////////////////////////////////// */}
          <Box sx={{ display: "flex" }}>
            <CssBaseline />
            <AppBar
              position="relative"
              open={open}
              id="toggletest"
              style={{
                backgroundColor: "rgb(00, 00, 00, 0.0)",
                width: "3rem",
                marginRight: "9.5rem",
                marginTop: "0.5rem",
                boxShadow: "none",
                color: "#d66939",
                right: "2rem",
              }}
              className="menuToggle"
            >
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="end"
                onClick={handleDrawerOpen}
                sx={{ ...(open && { display: "none" }) }}
              >
                <RiMenu3Fill className="menuToggle" />
              </IconButton>
            </AppBar>

            <Drawer
              sx={{
                width: drawerWidth,
                flexShrink: 0,
                "& .MuiDrawer-paper": {
                  width: drawerWidth,
                },
              }}
              variant="persistent"
              anchor="right"
              open={open}
            >
              <DrawerHeader>
                <IconButton onClick={handleDrawerClose}>
                  {theme.direction === "rtl" ? (
                    <ChevronLeftIcon />
                  ) : (
                    <ChevronRightIcon />
                  )}
                </IconButton>
              </DrawerHeader>
              <Divider />
              <List>
                {["Inbox", "Starred", "Send email", "Drafts"].map(
                  (text, index) => (
                    <ListItem key={text} disablePadding>
                      <ListItemButton>
                        <ListItemIcon>
                          {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                        </ListItemIcon>
                        <ListItemText primary={text} />
                      </ListItemButton>
                    </ListItem>
                  )
                )}
              </List>
              <Divider />
              <List>
                {["All mail", "Trash", "Spam"].map((text, index) => (
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
                <AiOutlineCamera className="iconContent2" />
                <SubTittle>Photo shooting</SubTittle>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Harum dignissimos laudantium magnam recusandae, amet sapiente.
                  Quidem quam dignissimos consectetur ad sunt perferendis
                  eveniet excepturi ipsa, tempora culpa minus dolores natus.
                </p>
              </div>
              <div>
                <BsCameraVideo className="iconContent2" />
                <SubTittle>Video shooting</SubTittle>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Temporibus fugiat sed at quidem, officia eligendi eos tempore
                  repudiandae, excepturi laborum corrupti et debitis qui
                  repellendus consequuntur id. Labore, possimus modi!
                </p>
              </div>
              <div>
                <HiOutlinePhotograph className="iconContent2" />
                <SubTittle>Retouch</SubTittle>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Totam, debitis maxime amet consequatur sunt aut doloribus vero
                  beatae hic enim inventore consectetur. Eum iure beatae
                  quisquam repellat eaque consectetur necessitatibus.
                </p>
              </div>
              <div>
                <GiMicrophone className="iconContent2" />
                <SubTittle>Sound recording</SubTittle>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Totam, debitis maxime amet consequatur sunt aut doloribus vero
                  beatae hic enim inventore consectetur. Eum iure beatae
                  quisquam repellat eaque consectetur necessitatibus.
                </p>
              </div>
            </ContainerFlex>
            <ContainerFlex>
              <BarColor className="content2"></BarColor>
              <Tittle>
                <h2>My lastest works</h2>
              </Tittle>
            </ContainerFlex>
          </Content2>
        </Grid>
        <Grid item xs={12}>
          <ContainerFlex>
            <img src={img1} alt="img1" className="imgsContainer3" />
            <img src={img2} alt="img2" className="imgsContainer3" />
            <img src={img3} alt="img3" className="imgsContainer3" />
          </ContainerFlex>
        </Grid>
        <Grid item xs={12}>
          <NoStyled>
            <Button className="ButtonSolitary">Sell all works</Button>
          </NoStyled>
          <ContainerFlex>
            <div className="containerPerfilContent4">
              <BarColor className="content3">.</BarColor>
              <img src={img4} alt="img4" className="imgContainer4" />
              <div className="containerContentProfile">
                <Tittle style={{ fontFamily: "Hero bold" }}>About me</Tittle>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure
                  obcaecati pariatur cum quaerat, dignissimos laborum in
                  necessitatibus iste error illum possimus qui deleniti omnis.
                  Cum amet quo commodi a expedita. Lorem ipsum dolor sit amet
                  consectetur, adipisicing elit. Illum, possimus officiis quae
                  amet quam repellat iusto deleniti nihil voluptas alias
                  reiciendis unde nostrum illo, natus asperiores! Repellendus
                  excepturi est quibusdam!
                </p>
                <SubTittle style={{ fontFamily: "Hero bold" }}>
                  My farourite thinks:
                </SubTittle>
                <ul>
                  <li>basketball</li>
                  <li>travel</li>
                  <li>camping</li>
                  <li>draw</li>
                  <li>dogs</li>
                </ul>
              </div>
            </div>
          </ContainerFlex>
        </Grid>
        <Grid item xs={12}>
          <ContainerFlex
            style={{ marginLeft: "5rem", justifyContent: "space-around" }}
          >
            <Tittle>Video presentation</Tittle>
            <BarColor className="content5">.</BarColor>
          </ContainerFlex>
        </Grid>
        <Grid item xs={12}>
          <video
            src="https://www.youtube.com/watch?v=6PpdlhZecVs"
            controls
            style={{ width: "80%", margin: "0 auto" }}
          />
        </Grid>
        <Grid item xs={12}>
          <Content3>
            <ContainerFlex className="AfterFooter">
              <Tittle style={{ color: "white" }}>Send me messege</Tittle>
              <BarColor className="barColorForm">.</BarColor>
            </ContainerFlex>
            <Box
              component="form"
              sx={{
                "& > :not(style)": { m: 1, width: "50ch" },
              }}
              noValidate
              autoComplete="off"
            >
              <ContainerFlex
                style={{
                  flexDirection: "column",
                  margin: "0 auto",
                  width: "80%",
                }}
              >
                <TextField
                  id="outlined-basic"
                  label="Outlined"
                  variant="outlined"
                  style={{ marginBottom: "1rem", width: "50%" }}
                />
                <TextareaAutosize
                  placeholder="E-mail"
                  style={{
                    marginBottom: "1rem",
                    width: "50%",
                    height: "10rem",
                    border: "1px solid rgb(00,00, 00, 0.2)",
                    backgroundColor: "rgb(00,00, 00, 0.2)",
                  }}
                />
                <Stack spacing={2} direction="row">
                  <Button
                    variant="contained"
                    style={{
                      backgroundColor: "#d66939",
                      fontFamily: "Hero Bold",
                      width: "35rem",
                    }}
                  >
                    Send message
                  </Button>
                </Stack>
              </ContainerFlex>
            </Box>
          </Content3>
        </Grid>
        <Grid item xs={12} style={{ padding: "0" }}>
          <Footer>
            <IoIosArrowDropupCircle
              className="uparrow"
              onClick={() => (window.location = "#header")}
            />
            <img
              src={iconwhats}
              alt="iconwhats"
              className="iconwhats"
              onClick={() =>
                (window.location =
                  "https://web.whatsapp.com/send?phone=5534996588120")
              }
            />

            <ContainerFlex>
              <div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginLeft: "5.2rem",
                  }}
                >
                  <SiReact style={{ marginRight: "0.8rem" }} />
                  Contructor WebSites
                </div>
              </div>
            </ContainerFlex>
            <ContainerFlex style={{ flexDirection: "column" }}>
              <div>
                <TiSocialLinkedin className="social" />
                <TiSocialGithub className="social" />
                <TiSocialYoutube className="social" />
                <TiSocialInstagram className="social" />
              </div>
              <ContainerFlex>
                <BsFillTelephoneFill />
                <a href="tel:+55349966996699" className="numberFooter">
                  ++55(34)996596955
                </a>
              </ContainerFlex>
            </ContainerFlex>
            <p>copyright © 2023</p>
            <Button className="ButtonSolitary">Hire me</Button>
          </Footer>
        </Grid>
      </Grid>
    </Box>
  );
}
export default Pothography;
