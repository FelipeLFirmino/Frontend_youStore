import { Container, Typography,Box, Grid } from '@mui/material';
import * as React from 'react';
import Barcomponent from '../components/Barchart';
import Piecomponent from '../components/Piechart';
import Demandforecast from '../components/Demandforecast';
import Headerlogo from '../components/Header';



export default function Dashboard(){
    return(
        <Container component="main"  sx={{ height: '100vh' }}>
            <Headerlogo></Headerlogo>
            <Box textAlign={'left'} >
                <Typography variant='h3' fontWeight={'bold'} color={"white"} >Dashboard</Typography>
            </Box>
            <Grid container spacing={3}>
                <Grid item lg={7} >  <Barcomponent></Barcomponent></Grid>
                <Grid item lg={5}><Piecomponent></Piecomponent></Grid>
                <Grid item> <Demandforecast></Demandforecast> </Grid>
                
            </Grid>
        </Container>
    )
}