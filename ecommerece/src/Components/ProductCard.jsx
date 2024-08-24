import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function ProductCard({data}) {
  return (
    <Card   sx={{ maxWidth:545,height: 400 ,display:"flex",flexDirection:"column", justifyContent:"space-between",alignItems:"center"}}>
      <CardMedia
        component={'img'}
        sx={{ height: 100, width:150 , mt:3, objectFit:"contain"}}
        image={data.image}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {data.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {data.description}
        </Typography>
      </CardContent>
      <CardActions >
        <Button size="small">Add to Cart</Button>
        <Button size="small">Share</Button>
      </CardActions>
    </Card>
  );
}
