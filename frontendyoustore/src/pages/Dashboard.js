import { Container, Typography,Box } from '@mui/material';
import * as React from 'react';
import Barcomponent from '../components/Barchart';

export default function Dashboard(){
    return(
        <Container component="main" sx={{ height: '100vh' }}>
            <Box textAlign={'left'} >
                <Typography variant='h3' fontWeight={'bold'} color={"white"} >Dashboard</Typography>
            </Box>
            <Barcomponent></Barcomponent>
        </Container>
    )
}