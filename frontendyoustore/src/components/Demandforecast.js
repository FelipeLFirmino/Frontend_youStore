import { Box, Container, Grid, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";

export default function Demandforecast() {
    const [previsoes, setPrevisoes] = useState(null);

    useEffect(() => {
        async function fetchPrevisoes() {
            try {
                const response = await fetch('/caminho_prever_demanda_produto/todos_produtos', {
                    method: 'GET',
                });

                if (!response.ok) {
                    throw new Error('Erro ao obter as previsões de demanda');
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
        <Container fluid maxWidth="md" sx={{ backgroundColor: "white", opacity: ".30", borderRadius: "15px" }}>
            <Typography variant="h5">Previsão de média de vendas do próximo mês</Typography>
            <Grid container direction="column">
                {previsoes && Object.entries(previsoes).map(([produto, previsao]) => (
                    <Grid item key={produto}>
                        Previsão de {produto}: {previsao}
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
}