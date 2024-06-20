import React, { useState, useEffect } from "react";
import { Container, Typography, Box } from "@mui/material";
import { PieChart } from '@mui/x-charts/PieChart';

export default function PieComponent(){

    const [data, setData] = useState([]);
    const [totalVendas, setTotalVendas] = useState(0);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('/quantidade_vendas_mes11');
                if (!response.ok) {
                    throw new Error('Erro ao buscar dados');
                }
                const jsonData = await response.json();
                setData(jsonData);

                // Calcula o total de vendas do mês somando as vendas de todos os produtos
                const total = Object.values(jsonData).reduce((acc, curr) => acc + curr, 0);
                setTotalVendas(total);
            } catch (error) {
                console.error('Erro ao buscar dados:', error);
            }
        };

        fetchData();
    }, []);

    const pieChartData = Object.keys(data).map((nome, index) => ({
        id: index,
        label: nome, // Usamos o nome do produto como rótulo
        value: data[nome]
    }));

    return (
        <Container fluid maxWidth="md" sx={{ backgroundColor: "rgba(255, 255, 255, 0.3)", borderRadius: "15px", padding: "20px", marginTop: "20px" }}>
            <Typography variant="h5" fontWeight={"bolder"} color={"white"}>Distribuição de vendas</Typography>
            <PieChart 
                series={[
                    {
                        data: pieChartData,
                    },
                ]}
                width={400}
                height={200}
                labelKey="label" // Define a chave dos rótulos (labels) como "label"
            />
            <Container mt={2}>
                <Typography variant="h6" fontWeight={"bold"} color={"white"}>
                    Total de vendas do mês: <Typography variant="h6" fontWeight={"bold"} color={"#F5AA27"}>{totalVendas} </Typography>
                </Typography>
            </Container>
        </Container>
    );
}