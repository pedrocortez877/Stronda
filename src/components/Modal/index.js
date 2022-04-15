import { useState } from "react";
import {
  Typography,
  Modal,
  Grid,
  TextField,
  Autocomplete,
  Button,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import { sxContainer, sxTitleContainer } from "./styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "rgba(26, 176, 76, 0.7)",
    },
  },
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          "& label": {
            color: "white",
          },
          "& input": {
            color: "grey",
          },
          "& .MuiInput-underline:after": {
            borderBottomColor: "yellow",
          },
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "green",
            },
          },
        },
      },
    },
    MuiAutocomplete: {
      styleOverrides: {
        root: {
          "& label": {
            color: "white",
          },
          "& input": {
            color: "grey",
          },
          "& .MuiInput-underline:after": {
            borderBottomColor: "yellow",
          },
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "green",
            },
          },
        },
      },
    },
  },
});

export function ModalComponent({ open, toggle }) {
  const [products] = useState([
    {
      name: "Potência potente",
      brand: "Taramps",
    },
    {
      name: "Falante que fala",
      brand: "Pionner",
    },
    {
      name: "Radio que irradia",
      brand: "Não lembro",
    },
    {
      name: "Fio 70mm",
      brand: "Tecnoise",
    },
    {
      name: "Madeira",
      brand: "MDF",
    },
  ]);
  const [brand, setBrand] = useState("");
  const [value, setValue] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [total, setTotal] = useState(0);

  function handleInputs(e) {
    console.log(e);
    setBrand("Teste");
    setValue(2);
    setQuantity(1);
    setTotal(1);
  }

  return (
    <ThemeProvider theme={theme}>
      <Modal
        open={open}
        onClose={toggle}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Grid container spacing={2} sx={sxContainer}>
          <Grid item xs={12}>
            <Typography id="modal-modal-title" sx={sxTitleContainer}>
              Adicione um produto
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Autocomplete
              id="cmb_products"
              product
              options={products.map((product) => product.name)}
              renderInput={(params) => (
                <TextField {...params} label="Produto" />
              )}
              color="primary"
              onSelect={handleInputs}
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              id="outlined-disabled"
              label="Marca"
              defaultValue={brand}
              color="primary"
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              id="outlined-disabled"
              label="Valor"
              defaultValue={value}
              color="primary"
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              id="outlined-disabled"
              label="Quantidade"
              defaultValue={quantity}
              color="primary"
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              id="outlined-disabled"
              label="Total"
              defaultValue={total}
              color="primary"
            />
          </Grid>
          <Grid item xs={4} />
          <Grid item xs={4}>
            <Button variant="outlined">Adicionar</Button>
          </Grid>
          <Grid item xs={4} />
        </Grid>
      </Modal>
    </ThemeProvider>
  );
}
