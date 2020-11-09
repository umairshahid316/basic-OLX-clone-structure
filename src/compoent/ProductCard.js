import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles({
    root:{
      maxWidth:350,
       
    },
      media: {
        height: 250,
      },
    });
    

export const ProductCard = (props) => {
    const classes = useStyles();

    return (
    <Card className={classes.root} >
      <CardActionArea>
        <CardMedia className={classes.media}          
          image={props.img}
        />
      
        <CardContent>
          <Typography gutterBottom variant="h6" component="h2">
            Price: ${props.price}
          </Typography>
          <Typography variant="body1" color="textSecondary" component="p">
          {props.name}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>

    )
}
