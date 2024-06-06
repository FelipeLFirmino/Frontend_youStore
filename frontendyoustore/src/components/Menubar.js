import React from "react";
import { Container, Typography, Grid } from "@mui/material";
import Headerlogo from "../components/Header";

export default function Menubar() {
  return (
    <Container
      maxWidth="lg"
      sx={{
        backgroundColor: "#F5AA27",
        marginTop: "10px",
        borderRadius: "25px",
        maxHeight: "60px",
        alignContent: "center"
      }}
    >
      <Grid
        container
        direction="row"
        alignItems="center"
      >
        <Grid item md={2}>
          <Typography variant="h7" fontWeight={"bold"} color={"Black"}> INICIO</Typography>
        </Grid>
        <Grid item md={2}>
          <Typography variant="h7" fontWeight={"bold"} color={"Black"} > CONFIGURAÇÕES</Typography>
        </Grid>
        <Grid item md={4}>
          <Headerlogo></Headerlogo>
        </Grid>
        <Grid item md={2}>
          <Typography variant="h7" fontWeight={"bold"} color={"Black"}> DÚVIDA</Typography>
        </Grid>
        <Grid item md={2}>
          <Typography variant="h7" fontWeight={"bold"} color={"Black"}> CONTATO</Typography>
        </Grid>
      </Grid>
    </Container>
  );
}
