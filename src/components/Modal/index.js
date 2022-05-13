/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState, useContext } from "react";

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

import ProductOfASaleContext from "../../contexts/ProductOfASaleContext";

export function ModalComponent({ open, toggle }) {
  const [databaseProducts] = useState([
    {
      Id: 1,
      Name: "Potência potente",
      Brand: "Taramps",
      Value: 888.9,
    },
    {
      Id: 2,
      Name: "Falante que fala",
      Brand: "Pionner",
      Value: 888.9,
    },
    {
      Id: 3,
      Name: "Radio que irradia",
      Brand: "Não lembro",
      Value: 888.9,
    },
    {
      Id: 4,
      Name: "Fio 70mm",
      Brand: "Tecnoise",
      Value: 888.9,
    },
    {
      Id: 5,
      Name: "Madeira",
      Brand: "MDF",
      Value: 888.9,
    },
  ]);
  const [brand, setBrand] = useState("");
  const [value, setValue] = useState(0);
  const [formatedValue, setFormatedValue] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [total, setTotal] = useState(0);
  const [formatedTotal, setFormatedTotal] = useState("");
  const [selectedProduct, setSelectedProduct] = useState({});

  const { products, setProducts } = useContext(ProductOfASaleContext);

  useEffect(() => {
    clearInputs();
  }, []);

  useEffect(() => {
    if (value !== 0) {
      setTotal(quantity * value);
      setFormatedTotal(`R$${quantity * value}`);
    }
  }, [quantity]);

  useEffect(() => {
    clearInputs();
  }, [open]);

  function handleChangeAutocomplete(e, valueSelected) {
    if (!valueSelected) {
      clearInputs();
      return;
    }

    const selectedAutocompleteProduct = databaseProducts.find(
      (product) => product.Name === valueSelected
    );

    setSelectedProduct(selectedAutocompleteProduct);
    setBrand(selectedAutocompleteProduct.Brand);
    setValue(selectedAutocompleteProduct.Value);
    setFormatedValue(`R$ ${selectedAutocompleteProduct.Value}`);

    Object.assign(selectedAutocompleteProduct, {
      Quantity: quantity,
    });

    setTotal(
      Number(selectedAutocompleteProduct.Quantity) *
        Number(selectedAutocompleteProduct.Value)
    );
    setFormatedTotal(
      `R$${
        Number(selectedAutocompleteProduct.Quantity) *
        Number(selectedAutocompleteProduct.Value)
      }`
    );
  }

  const handleChangeQuantity = (event) => {
    setQuantity(event.target.value);
  };

  function handleClickAddProduct() {
    Object.assign(selectedProduct, {
      Quantity: quantity,
      Total: total,
    });

    console.log(selectedProduct);

    setProducts([...products, selectedProduct]);

    console.log("Depois de inserir", products);
  }

  function clearInputs() {
    setBrand("");
    setValue(0);
    setQuantity(1);
    setTotal(0);
    setFormatedTotal("");
    setFormatedValue("");
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
              options={databaseProducts.map((product) => product.Name)}
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
            <TextField
              id="outlined-disabled"
              label="Valor"
              color="primary"
              value={formatedValue}
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
              value={formatedTotal}
            />
          </Grid>
          <Grid item xs={4} />
          <Grid item xs={4}>
            <Button variant="outlined" onClick={handleClickAddProduct}>
              Adicionar
            </Button>
          </Grid>
          <Grid item xs={4} />
        </Grid>
      </Modal>
    </ThemeProvider>
  );
}
