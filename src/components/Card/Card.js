import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Barchart from "../Charts/Barchart"
import { shadows } from '@mui/system';
export default function ActionAreaCard() {
  return (
    <Card sx={{ maxWidth: 350 ,marginRight : "12rem",height : "21rem","box-shadows" : "1px 1px 1px black"}}>
      <CardActionArea>
      <Barchart/>
        <CardContent>
         
          <Typography variant="body2" color="text.secondary">
           A weekly chart shows the data of faang companies manage thier work and get the input from their work .
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card> 
  );
}