import React from "react";
import { Container, Typography } from "@mui/material";
import { PieChart } from '@mui/x-charts/PieChart';


export default function Piecomponent(){

    return(
        <Container fluid maxWidth="md" sx={{backgroundColor:"white", opacity:".30",borderRadius:"15px"}}>
        <Typography variant="h5" >Distribuiçao de vendas</Typography>
        <PieChart
      series={[
        {
          data: [
            { id: 0, value: 10, label: 'series A' },
            { id: 1, value: 15, label: 'series B' },
            { id: 2, value: 20, label: 'series C' },
          ],
        },
      ]}
      width={400}
      height={200}
    />
    </Container>


    )
}