import { useState } from "react";
import {
  Typography,
  Modal,
  Grid,
  TextField,
  Autocomplete,
  Button,
} from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";

import { sxContainer, sxTitleContainer, theme } from "./styles";

export function ModalComponent({ open, toggle }) {
  const [products] = useState([
    {
      name: "Potência potente",
      brand: "Taramps",
      value: 888.9,
    },
    {
      name: "Falante que fala",
      brand: "Pionner",
      value: 888.9,
    },
    {
      name: "Radio que irradia",
      brand: "Não lembro",
      value: 888.9,
    },
    {
      name: "Fio 70mm",
      brand: "Tecnoise",
      value: 888.9,
    },
    {
      name: "Madeira",
      brand: "MDF",
      value: 888.9,
    },
  ]);
  const [brand, setBrand] = useState("");
  const [value, setValue] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [total, setTotal] = useState(0);

  function handleInputs(e, valueSelected) {
    const selectedProduct = products.find(
      (product) => product.name === valueSelected
    );
    setBrand(selectedProduct.brand);
    setValue(selectedProduct.value);
    setQuantity(1);
    setTotal(quantity * value);
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
              onChange={handleInputs}
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              id="outlined-disabled"
              label="Marca"
              color="primary"
              value={brand}
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              id="outlined-disabled"
              label="Valor"
              color="primary"
              value={value}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              id="outlined-disabled"
              label="Quantidade"
              color="primary"
              value={quantity}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              id="outlined-disabled"
              label="Total"
              color="primary"
              value={total}
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
