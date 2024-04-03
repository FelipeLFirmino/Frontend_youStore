import { Container, Typography,Box, Grid } from '@mui/material';
import * as React from 'react';
import Barcomponent from '../components/Barchart';
import Piecomponent from '../components/Piechart';
import Demandforecast from '../components/Demandforecast';

export default function Dashboard(){
    return(
        <Container component="main" sx={{ height: '100vh' }}>
            <Box textAlign={'left'} >
                <Typography variant='h3' fontWeight={'bold'} color={"white"} >Dashboard</Typography>
            </Box>
            <Grid container spacing={3}>
                <Grid item>  <Barcomponent></Barcomponent></Grid>
                <Grid item><Piecomponent></Piecomponent></Grid>
                <Grid item> <Demandforecast></Demandforecast> </Grid>
                
            </Grid>
        </Container>
    )
}