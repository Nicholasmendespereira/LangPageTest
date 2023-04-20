import api from "../../api/api";
import "./style.js";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

import {
  Tittle,
  SubTittle,
  Header,
  Main,
  Form,
  Agendado,
  SubAgendado,
  Carousel,
  DetailsProcess,
  Card,
  ContainerCard,
  InCardImage
} from "./style.js";
import {
  LightBrown,
  MediumBrown,
  HardBrown,
  Black,
  GreenLigth,
} from "../../styles/colorProvider.js";
import { useState } from "react";
import moment from "moment";
import { formatShift, formatProcess } from "../../utilits";
import { toast } from "react-toastify";

import {
  AiOutlineSearch,
  AiOutlineStar,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { CgProfile } from "react-icons/cg";

import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

import logo from "../../assets/logosemfundo.png";
import img01 from "../../assets/img4.jpg";
import img03 from "../../assets/paper03.jpg";
import img04 from "../../assets/paper04.jpg";
import img05 from "../../assets/paper05.jpg";
import img06 from "../../assets/paper06.jpg";
import img07 from "../../assets/paper07.jpg";
import img08 from "../../assets/paper08.jpg";
import img09 from "../../assets/paper09.jpg";
import img10 from "../../assets/paper10.jpg";

function FashionMen() {
  const carouselRef = useRef();
  const images = [
    img03,
    img04,
    img05,
    img06,
    img07,
    // img08,
    // img09,
    // img10,
  ];
  const steps = [
    {
      label: "Oque é Hidratação capilar?",
      description: `A hidratação capilar é responsável por repor a água e os nutrientes que os fios perdem diariamente. Com a exposição ao sol e frio, uso de secador e chapinha, além de química no cabelo, deixam os fios ressecados e opacos..`,
    },
    {
      label: "Oque é Selagem capilar?",
      description:
        "É um procedimento que fecha as cutículas do cabelo, reduz volume e deixa os fios alinhados. A selagem capilar é uma ótima opção principalmente para quem tem cabelo liso natural e quer diminuir o volume das madeixas. Também faz toda a diferença para quem alisa os fios e quer prolongar o efeito da escova.",
    },
    {
      label: "Oque é Progressiva capilar?",
      description: `A progressiva tem como objetivo o alisamento dos fios, por isso, ela também é identificada como um químico alisante. Os alisantes são produtos desenvolvidos para modificar a estrutura interna do fio, chegando até camadas profundas e alterando quimicamente sua estrutura.`,
    },
    {
      label: "O que é uma escova capilar?",
      description: `A escova progressiva é uma das técnicas mais usadas pelas mulheres que querem alisar o cabelo e deixar os fios bem alinhados. Ela é muito popular e pode ser usada em cabelos ondulados, cacheados e crespos, o que faz com que seja um tratamento muito versáti.`,
    },
    {
      label: "O que e um corte de cabelo?",
      description: `O Corte de cabelo é o que define o estilo visual dos cabelos e consequentemente, o estilo visual da pessoa. Acompanhar o design do corte, com a personalidade da pessoa, torna a mesma mais autentica e única, pois ela será representada por si mesma.`,
    },
  ];
  const [width, setWidth] = useState(0);
  const [img, setImg] = useState(0);
  const [image, setImage] = useState(images[img]);
  const [formData, setFormData] = useState({});
  const [openDialog, setOpenDialog] = useState(false);
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setImg((img) => img + 1)
    setImage(images[img]);
  };
  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
    setImg((img) => img - 1);
    setImage(images[img]);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  useEffect(() => {
    setWidth(
      carouselRef.current?.scrollWidth - carouselRef.current?.scrollWidth
    );
  }, []);
  const handleClickOpen = () => {
    setOpenDialog(true);
  };

  const handleClose = () => {
    setOpenDialog(false);
  };

  const HandleSumit = (e) => {
    // e.preventDefault();
    // setOpen(true);
    const message = `https://api.whatsapp.com/send?phone=5534996442120&text=Olá! Gostaria de marcar um horário. Meu nome é: *${formData?.name
      }*,quero fazer: *${formatProcess(formData?.process)?.label}*, as: *${formData?.hour
      }* da *${formatShift(formData?.shift)?.label}*, no dia: *${formData?.day
      }*!`;
    window.open(message, "_blank");
    toast.success({
      position: toast.POSITION.TOP_RIGHT,
      theme: "colored",
    });
  };
  // carrousel

  // const HandleSumit = async () => {
  //   try {
  //     const resp = await api({
  //       method: "POST",
  //       url: "/new-user",
  //       data: {
  //         name: formData?.name,
  //         process: formData?.process,
  //         hour: formData?.hour,
  //         day: formData?.day,
  //         shift: formData?.shift,
  //       },
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       json: true,
  //     });
  //     toast.success({
  //       position: toast.POSITION.TOP_RIGHT,
  //       theme: "colored",
  //     });
  //   } catch (e) {
  //     toast.error({
  //       position: toast.POSITION.TOP_RIGHT,
  //       theme: "colored",
  //     });
  //   }
  // };

  return (
    <>
      <Main>
        <Header>
          <img src={logo} alt="logo" className="logo" />
          <div className="barVertical">.</div>
          <ul className="nav2">
            <li className="iconsHeader2">
              <AiOutlineSearch />
            </li>
            <li className="iconsHeader2">
              <AiOutlineStar />
            </li>
            <li className="iconsHeader2">
              <CgProfile />
            </li>
            <li className="iconsHeader2">
              <AiOutlineShoppingCart />
            </li>
          </ul>
        </Header>
        <Tittle color={HardBrown}>Sua barbearia como nunca!</Tittle>
        <SubTittle color={MediumBrown}>Experimente!</SubTittle>
      </Main>
      <ContainerCard>
        <Card>oi</Card>
        <Card>oi</Card>
        <Card>oi</Card>
        <Card>oi</Card>
      </ContainerCard>
      {/* <Carousel>
        <motion.div
          ref={carouselRef}
          className="carousel"
          whileTap={{ cursor: "grabbing" }}
        >
          <motion.div
            className="inner"
            drag="x"
            dragConstraints={{ right: 0, left: -width }}
            initial={{ x: 500 }}
            animate={{ x: 2 }}
            transition={{ duration: 10 }}
          >
            {images.map((image) => (
              <motion.div className="item">
                <img src={image} alt="text-alt" />
                <Button
                  onClick={() => {
                    setImage(image);
                  }}
                  style={{ borderRadius: "50%", width: "10px" }}
                >
                  O
                </Button>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </Carousel> */}

      <Button
        variant="outlined"
        onClick={handleClickOpen}
        style={{
          border: "1px solid rgba(170,118,74, 0.5)",
          color: "rgb(170,118,74)",
          width: "15rem",
          margin: "2rem 0",
        }}
      >
        Agendar
      </Button>
      <Dialog
        open={openDialog}
        onClose={handleClose}
        style={{ background: "rgba(170,118,74, 0.5)" }}
      >
        <DialogTitle style={{ textAlign: "center", color: "gray " }}>
          {"Vamos marcar um horário?"}
        </DialogTitle>
        <div style={{ width: "35rem" }}>
          <Form>
            <Box
              component="form"
              sx={{
                "& > :not(style)": { m: 1, width: "25ch" },
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
              noValidate
              autoComplete="off"
            >
              <TextField
                style={{ width: "67%" }}
                id="standard-basic"
                label="Nome"
                variant="standard"
                className="input"
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
              <br />
              <FormControl variant="standard" sx={{ m: 1, minWidth: 260 }}>
                <InputLabel id="demo-simple-select-standard-label">
                  Procedimento
                </InputLabel>
                <Select
                  labelId="demo-simple-select-standard-label"
                  id="demo-simple-select-standard"
                  value={formData?.process}
                  onChange={(e) =>
                    setFormData({ ...formData, process: e.target.value })
                  }
                  label="Procedimentos"
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value="brush">Escova</MenuItem>
                  <MenuItem value="cut">Corte</MenuItem>
                  <MenuItem value="progressive">Progressiva</MenuItem>
                </Select>
              </FormControl>
              <TextField
                style={{ width: "67%" }}
                id="standard-basic"
                label="Horário"
                placeholder="horas"
                variant="standard"
                className="input"
                onChange={(e) =>
                  setFormData({ ...formData, hour: e.target.value })
                }
              />
              <FormControl
                variant="standard"
                sx={{ m: 1, minWidth: 260 }}
                style={{ marginTop: "2rem", marginBottom: "2.5rem" }}
              >
                <InputLabel id="demo-simple-select-standard-label">
                  Manhã, Tarde ou Noite
                </InputLabel>
                <Select
                  labelId="demo-simple-select-standard-label"
                  id="demo-simple-select-standard"
                  value={formData?.shift}
                  onChange={(e) =>
                    setFormData({ ...formData, shift: e.target.value })
                  }
                  label="Manhã, Tarde ou Noite"
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value="morning">Manhã</MenuItem>
                  <MenuItem value="afternoon">Tarde</MenuItem>
                  <MenuItem value="night">Noite</MenuItem>
                </Select>
              </FormControl>
              <div
                style={{
                  display: "flex",
                  width: "100%",
                  marginTop: "3rem",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto",
                }}
              >
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    format="DD/MM/YYYY"
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        day: e.format("DD/MM/YYYY"),
                      })
                    }
                  />
                </LocalizationProvider>
              </div>
              <Button
                style={{
                  marginTop: "2.5rem",
                  border: "1px solid rgba(170,118,74, 0.5)",
                  color: "rgb(170,118,74)",
                }}
                // disabled={}
                variant="outlined"
                onClick={() => {
                  HandleSumit();
                  handleClose();
                }}
              >
                Agendar
              </Button>
            </Box>
          </Form>
        </div>
        <Button onClick={handleClose} autoFocus style={{ color: "gray" }}>
          Sair
        </Button>
      </Dialog>
      <Agendado onClick={handleClickOpen}>
        <h3>
          Cliente: <br />
          <span>{formData?.name}</span>
        </h3>
        <h3>
          Procedimento: <br />
          <span>{formatProcess(formData?.process)?.label}</span>
        </h3>
        <h3>
          Agendamento: <br />
          <span>
            <SubAgendado>
              {formData?.hour} <small>horas,da</small>{" "}
              <small>{formatShift(formData?.shift)?.label}</small> <br />
              <br />
              <small>Dia</small>: {formData?.day} <br />
            </SubAgendado>
          </span>
        </h3>
      </Agendado>

      <DetailsProcess>
        <Box sx={{ maxWidth: 400 }}>
          <Stepper activeStep={activeStep} orientation="vertical">
            {steps.map((step, index) => (
              <Step key={step.label} style={{ textAlign: "start" }}>
                <StepLabel
                  optional={
                    index === 4 ? (
                      <Typography variant="caption">Última</Typography>
                    ) : null
                  }
                >
                  {step.label}
                </StepLabel>
                <StepContent>
                  <Typography>{step.description}</Typography>
                  <Box sx={{ mb: 2 }}>
                    <div>
                      <Button
                        variant="contained"
                        onClick={handleNext}
                        sx={{ mt: 1, mr: 1 }}
                      >
                        {index === steps.length - 1 ? "Final" : "Próxim."}
                      </Button>
                      <Button
                        disabled={index === 0}
                        onClick={handleBack}
                        sx={{ mt: 1, mr: 1 }}
                      >
                        Voltar
                      </Button>
                    </div>
                  </Box>
                </StepContent>
              </Step>
            ))}
          </Stepper>
          {activeStep === steps.length && (
            <Paper square elevation={0} sx={{ p: 3 }}>
              <Typography>
                Algumas das perguntas frenquentes - <br />{" "}
                <span
                  onClick={() => alert("Consulte nosso blog")}
                  style={{ color: "rgb(170, 118, 74)", cursor: "pointer" }}
                >
                  Quer saber mais?
                </span>
              </Typography>
              <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
                Recomeçar
              </Button>
            </Paper>
          )}
        </Box>
        <img src={image} alt="alt text" style={{ width: "30%", borderRadius: "20px" }} />
      </DetailsProcess>
    </>
  );
}
export default FashionMen;
