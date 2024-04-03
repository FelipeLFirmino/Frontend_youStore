import { Box,Container,Typography } from "@mui/material";
import React from "react";

export default function Demandforecast(){

    return(
        <Container fluid maxWidth="md" sx={{backgroundColor:"white", opacity:".30",borderRadius:"15px"}}>
        <Typography variant="h5" >Previsao de demanda</Typography>
            <Box>estoque vazio em: </Box>
            <Box>proximo pedido agendado para: </Box>
        </Container>
    )
}