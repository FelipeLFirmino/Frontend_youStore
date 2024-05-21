import React from "react";
import { Container, Typography } from "@mui/material";

export default function Headerlogo(){

    return(
        <Container maxWidth='xs' sx={{backgroundColor:"#820000", padding:"10px",marginBottom:'10px', borderBottomLeftRadius:"15px", borderBottomRightRadius:"15px"}} >
        <Typography variant='h3' fontWeight={'bold'} color={"white"} >Youstore</Typography>
        </Container>
   
    )
}