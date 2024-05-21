import React from "react"
import { Button,Typography } from "@mui/material"


export default function Yellowbutton(props){
    return(
        <Button color="Yellowbutton" variant="contained" >
            <Typography variant="h6" component ="h2" color={"black"} fontWeight={'bolder'} fontSize={"medium"}> {props.content} </Typography>
        </Button>
    )
}