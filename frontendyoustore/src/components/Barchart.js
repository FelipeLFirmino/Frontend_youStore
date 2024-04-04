import React from "react"
import { BarChart } from '@mui/x-charts/BarChart';
import { Container, Typography } from "@mui/material";

export default function Barcomponent(){
    return (
        <Container fluid maxWidth="lg" sx={{backgroundColor:"white", opacity:".30",borderRadius:"15px"}}>
            <Typography variant="h5" >Nivel: ----</Typography>
            <BarChart
                xAxis={[{ scaleType: 'band', data: ['group A', 'group B', 'group C','group D', 'group F', 'group E',] }]}
                series={[{ data: [4, 3, 5] }, { data: [1, 6, 3] }, { data: [2, 5, 6] }]}
                width={500}
                height={300}
            />
        </Container>
    );


}

