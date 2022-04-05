import {
  Typography,
  Modal,
  Grid,
  TextField,
  Autocomplete,
} from "@mui/material";
import { useState } from "react";

import { sxContainer, sxTitleContainer, sxTextInput } from "./styles";

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

  return (
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
              <TextField {...params} label="Produto" sx={sxTextInput} />
            )}
          />
        </Grid>
      </Grid>
    </Modal>
  );
}
