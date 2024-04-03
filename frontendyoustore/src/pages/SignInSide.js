import * as React from 'react';
import Yellowbutton from '../components/YellowButton';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import {  Box, TextField, Container, Paper } from '@mui/material';

export default function SignInSide() {

  return (
    <Grid container alignContent={'center'} component="main" sx={{ height: '100vh' }}>
      <CssBaseline />
      <Grid
        item
        xs={false}
        sm={4}
        md={7}

      >
        <Typography variant="h2" component="h1" fontWeight={'bold'} color={'#FFFFFF'}>
          Tenha controle completo do seu negócio
        </Typography>
        <Typography variant="h4" component="h2" fontWeight={'bold'} color={'#FFFFFF'}>
          Faça seu login e autonomize sua vida!
        </Typography>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >

            <Box component="form" noValidate sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                variant='filled'
                sx={{backgroundColor:"white", borderRadius:"15px"}}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                variant='filled'
                sx={{backgroundColor:"white", borderRadius:"15px"}}
              />
             
              {/* BOTAO LOGIN */}
              <Grid container spacing={2} paddingTop={3}>
                <Grid item ><Yellowbutton content="entrar"></Yellowbutton></Grid>
                {/* BOTAO ESQUECEU A SENHA */}
                <Grid item > <Yellowbutton content="Cadastre-se"></Yellowbutton></Grid>
                <Grid item >
                  {/* BOTAO CADASTRO */}
                  <Yellowbutton content="Esqueci minha senha"></Yellowbutton></Grid>
              </Grid>
            </Box>
          </Box>

        </Container>
      </Grid>
      <Grid item xs={12} sm={8} md={5} elevation={6}>
       <Paper component='img' src='frontendyoustore\public\image.png'></Paper>
      </Grid>
    </Grid>

  );
}