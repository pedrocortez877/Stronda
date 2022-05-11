/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";

import {
  Typography,
  Modal,
  Grid,
  TextField,
  Autocomplete,
  Button,
  InputAdornment,
  OutlinedInput,
} from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";

// import NumberFormat from "react-number-format";

import { sxContainer, sxTitleContainer, theme } from "./styles";

//import ProductOfASaleContext from "../../contexts/ProductOfASaleContext";

export function ModalComponent({ open, toggle }) {
  const [databaseProducts] = useState([
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
  const [selectedProduct, setSelectedProduct] = useState({});
  // const { products, setProducts } = useContext(ProductOfASaleContext);

  useEffect(() => {
    clearInputs();
  }, []);

  useEffect(() => {
    if (value !== 0) {
      setTotal(quantity * value);
    }
  }, [quantity]);

  function handleChangeAutocomplete(e, valueSelected) {
    if (!valueSelected) {
      clearInputs();
    }

    const selectedAutocompleteProduct = databaseProducts.find(
      (product) => product.name === valueSelected
    );

    setSelectedProduct(selectedAutocompleteProduct);
    setBrand(selectedAutocompleteProduct.brand);
    setValue(selectedAutocompleteProduct.value);

    Object.assign(selectedAutocompleteProduct, {
      quantity: quantity,
    });

    setTotal(
      Number(selectedAutocompleteProduct.quantity) *
        Number(selectedAutocompleteProduct.value)
    );
    console.log(selectedProduct);
  }

  const handleChangeQuantity = (event) => {
    setQuantity(event.target.value);
  };

  function clearInputs() {
    setBrand("");
    setValue(0);
    setQuantity(1);
    setTotal(0);
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
              options={databaseProducts.map((product) => product.name)}
              renderInput={(params) => (
                <TextField {...params} label="Produto" />
              )}
              color="primary"
              onChange={handleChangeAutocomplete}
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
            <OutlinedInput
              id="outlined-disabled"
              label="Valor"
              color="primary"
              value={value}
              startAdornment={
                <InputAdornment position="start">R$</InputAdornment>
              }
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              id="outlined-basic"
              label="Quantidade"
              color="primary"
              value={quantity}
              onChange={handleChangeQuantity}
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
