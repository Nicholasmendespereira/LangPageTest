import api from "../../api/api";
import "./style.js";
import { Header, Main, Form, Agendado, SubAgendado } from "./style.js";
import { useState } from "react";
import moment from "moment";
import { formatShift, formatProcess } from "../../utilits";
import { toast } from "react-toastify";
import logo from "../../assets/logosemfundo.png";

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
import { useEffect } from "react";

function FashionMen() {
  const [formData, setFormData] = useState({});

  // name: formData?.name,
  // process: formData?.process,
  // hour: formData?.hour,
  const HandleSumit = async () => {
    try {
      const resp = await api({
        method: "POST",
        url: "/new-user",
        data: {
          name: formData?.name,
          process: formData?.process,
          hour: formData?.hour,
          day: formData?.day,
          shift: formData?.shift,
        },
        headers: {
          "Content-Type": "application/json",
        },
        json: true,
      });
      toast.success({
        position: toast.POSITION.TOP_RIGHT,
        theme: "colored",
      });
    } catch (e) {
      toast.error({
        position: toast.POSITION.TOP_RIGHT,
        theme: "colored",
      });
    }
  };
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
      </Main>

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
            style={{ width: "45.5%" }}
            id="standard-basic"
            label="Nome"
            variant="standard"
            className="input"
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
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
            style={{ width: "45.5%" }}
            id="standard-basic"
            label="Horário"
            placeholder="horas"
            variant="standard"
            className="input"
            onChange={(e) => setFormData({ ...formData, hour: e.target.value })}
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
            {/* // day: moment(e.target.value).format("DD/MM/YYYY"), */}
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker 
                onChange={(e) => setFormData({...formData, day: e.target.value})}
              />
            </LocalizationProvider>
          </div>
          {console.log(formData?.day)}
          <h2>{formData?.day}</h2>
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
            }}
          >
            Agendar
          </Button>
        </Box>
      </Form>
      <Agendado>
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
              {formData?.hour} <small>horas</small>, <br />
              <small>Dia</small>: {formData?.day} <br />
              <small>{formatShift(formData?.shift)?.label}</small> <br />
            </SubAgendado>
          </span>
        </h3>
      </Agendado>
    </>
  );
}
export default FashionMen;
