import * as React from 'react';
import Yellowbutton from '../components/YellowButton';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

export default function SignInSide() {

  return (

    <Grid container component="main" sx={{ height: '100vh' }}>
      <CssBaseline />
      <Grid
        item
        xs={false}
        sm={4}
        md={7}

      >
        <Typography variant="h3" component="h1" fontWeight={'bold'} color={'#FFFFFF'}>
        Tenha controle completo do seu negócio
        </Typography>
        <Typography variant="h4" component="h2" fontWeight={'bold'}color={'#FFFFFF'}>
        Faça seu login e autonomize sua vida!
        </Typography>
       <Yellowbutton content={"entrar"}></Yellowbutton>
      </Grid>
      <Grid item xs={12} sm={8} md={5} elevation={6} square>

      </Grid>
    </Grid>

  );
}