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
  const [inputAutocomplete, setInputAutocomplete] = useState("");

  const { products, setProducts } = useContext(ProductOfASaleContext);

  useEffect(() => {
    if (value !== 0) {
      setTotal(Number(quantity) * Number(value));
      setFormatedTotal(`R$${Number(quantity) * Number(value)}`);
    }
  }, [quantity]);

  useEffect(() => {
    clearInputs();
  }, [open]);

  useEffect(() => {
    if (selectedProduct.Name) {
      setBrand(selectedProduct.Brand);

      setValue(Number(selectedProduct.Value));
      setFormatedValue(`R$ ${selectedProduct.Value}`);

      setTotal(Number(selectedProduct.Value));
      setFormatedTotal(`R$${Number(selectedProduct.Value)}`);
    }
  }, [selectedProduct]);

  function handleChangeAutocomplete(e, valueSelected) {
    if (!valueSelected) {
      clearInputs();
      return;
    }

    setSelectedProduct(
      databaseProducts.find((product) => product.Name === valueSelected)
    );
  }

  function handleClickAddProduct() {
    const existingProduct = products.find(
      (product) => product.Id === selectedProduct.Id
    );

    if (existingProduct) {
      setProducts(
        products.map((product) => {
          if (product.Id === selectedProduct.Id) {
            return {
              ...product,
              Quantity: product.Quantity + Number(quantity),
              Total: product.Total + Number(total),
            };
          } else return product;
        })
      );
    } else {
      Object.assign(selectedProduct, {
        Quantity: Number(quantity),
        Total: Number(total),
      });

      setProducts([...products, selectedProduct]);
    }
  }

  function clearInputs() {
    setBrand("");
    setValue(0);
    setQuantity(1);
    setTotal(0);
    setFormatedTotal("");
    setFormatedValue("");
    setInputAutocomplete("");
    setSelectedProduct({});
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
              value={selectedProduct.Name}
              onChange={handleChangeAutocomplete}
              inputValue={inputAutocomplete}
              onInputChange={(event, newInputValue) =>
                setInputAutocomplete(newInputValue)
              }
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              id="outlined-disabled"
              label="Marca"
              color="primary"
              value={brand}
              onChange={() => {}}
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              id="outlined-disabled"
              label="Valor"
              color="primary"
              value={formatedValue}
              onChange={() => {}}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              id="outlined-basic"
              label="Quantidade"
              color="primary"
              value={quantity}
              onChange={(event) => setQuantity(event.target.value)}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              id="outlined-disabled"
              label="Total"
              color="primary"
              value={formatedTotal}
              onChange={() => {}}
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
