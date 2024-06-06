import { Container, Grid, Typography, Paper } from "@mui/material";
import React, { useState, useEffect } from "react";

export default function Demandforecast() {
  const [previsoes, setPrevisoes] = useState(null);

  useEffect(() => {
    async function fetchPrevisoes() {
      try {
        const response = await fetch(
          "/caminho_prever_demanda_produto/todos_produtos",
          {
            method: "GET",
          }
        );

        if (!response.ok) {
          throw new Error("Erro ao obter as previsões de demanda");
        }

        const data = await response.json();
        setPrevisoes(data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchPrevisoes();
  }, []);

  return (
    <Container
      fluid
      maxWidth="sm"
      sx={{ backgroundColor: "rgba(255, 255, 255, 0.3)", borderRadius: "15px" }}
    >
      <Typography variant="h5" fontWeight={"bolder"} color={"white"} marginTop={"15px"} marginBottom={"15px"}>
        Previsão de média de vendas do próximo mês
      </Typography>
      <Grid container direction="column">
        {previsoes &&
          Object.entries(previsoes).map(([produto, previsao]) => (
            <Grid item marginBottom={"10px"} key={produto}>
              <Paper sx={{ backgroundColor: "rgba(130, 0, 0, 0.7)", borderRadius:"15px" }}>
                <Typography variant="h6" fontWeight={"bold"} color={"white"}>
                  Previsão do produto {produto}:{" "}
                  <Typography  variant="h6" fontWeight={"bold"} color={"#F5AA27"}>{previsao}</Typography>
                </Typography>
              </Paper>
            </Grid>
          ))}
      </Grid>
    </Container>
  );
}
