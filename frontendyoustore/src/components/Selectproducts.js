import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function Selectproduct({ onChange }) {
  const [produto, setProduto] = React.useState('');

  const handleChange = async (event) => {
    const produtoSelecionado = event.target.value;
    setProduto(produtoSelecionado);

    try {
      let rota;
      if (produtoSelecionado === "Mesas") {
        rota = '/caminho_ler_mesas';
      } else if (produtoSelecionado === "Cadeiras") {
        rota = '/caminho_ler_cadeiras';
      } else if (produtoSelecionado === "Lixeiras") {
        rota = '/caminho_ler_lixeiras';
      } else if (produtoSelecionado === "Teclados") {
        rota = '/caminho_ler_teclados';
      } else if (produtoSelecionado === "Computadores") {
        rota = '/caminho_ler_computadores';
      }

      // Chama a função onChange passando a rota
      onChange(rota);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Produto</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={produto}
          label="Produto"
          onChange={handleChange}
        >
          <MenuItem value="Mesas">Mesa</MenuItem>
          <MenuItem value="Cadeiras">Cadeira</MenuItem>
          <MenuItem value="Lixeiras">Lixeira</MenuItem>
          <MenuItem value="Teclados">Teclado</MenuItem>
          <MenuItem value="Computadores">Computador</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}