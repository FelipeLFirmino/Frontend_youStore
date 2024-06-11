import React from "react";
import { Container, Typography } from "@mui/material";
import { PieChart } from '@mui/x-charts/PieChart';


export default function Piecomponent(){

    return(
        <Container fluid maxWidth="md" sx={{ backgroundColor: "rgba(255, 255, 255, 0.3)", borderRadius: "15px"}}>
        <Typography variant="h5" fontWeight={"bolder"} color={"white"}>Distribuição de vendas</Typography>
        <PieChart 
      series={[
        {
          data: [
            { id: 0, value: 10 },
            { id: 1, value: 15 },
            { id: 2, value: 20 },
            { id: 2, value: 20 },
            { id: 2, value: 20 },
            { id: 2, value: 20 },
          ],
        },
      ]}
      width={400}
      height={200}
    />
    </Container>


    )
}