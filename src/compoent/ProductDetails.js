import React from 'react'
import { Grid } from '@material-ui/core';
import { useParams } from 'react-router-dom';
import {items} from '../context/Data';
import '../App.css';
import Button from '@material-ui/core/Button';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Avatar from '@material-ui/core/Avatar';
import { deepOrange, deepPurple } from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/core/styles';
import { ImportantDevices } from '@material-ui/icons';
import '../Styles/ProductDetails.css';


const useStyles = makeStyles((theme) => ({
    purple: {
      color: theme.palette.getContrastText(deepPurple[500]),
      backgroundColor: deepPurple[500],
      marginTop:"20px",
      
    },
  }));
  


export const ProductDetails = () => {
    const classes = useStyles();
    
    const { productid } = useParams();

    const item = items[productid];
    if (!item) {
        return <h2>Not Found!</h2>;
      }
      const { name, img, price, details, address, seller } = item;


    return (
        <div>

<br/>
    <Grid container  >

    <Grid item   xs={12} sm={12} md={8}  >
      <img  src={img} className="mainImg"  alt={name} />
{/* start */}

<div  className="Description">
        <div style={{marginLeft:"22px"}}>

    <h2>Description</h2>
      <p >{details}</p>
   
<br/>
     
      </div>
    
      </div>

{/* end */}
      </Grid> 

     





      <Grid item  xs={12} sm={12} md={4}  >
     <div className="Sidebox" >
        <div style={{marginLeft:"22px"}}>
     <h1>Rs: {price}</h1>
      <h3>{name}</h3>
      <br/>
    <p>{address}</p>
     
      </div>

          </div>

{/*  */}

<br/>
<div className="Sidebox" >
        <div style={{marginLeft:"22px"}}>

    <p style={{fontSize:"18px"}}>Seller description</p>

   <div style={{display:"flex"}}>
    <Avatar className={classes.purple}>{seller[0]}</Avatar>
    <h2 style={{paddingLeft:"10px"}}>{seller}</h2>
   </div>
<br/>
   <Button variant="contained" className="SellerBtn"  >
        Chat with seller
      </Button>
     
     
      </div>

      <br/><br/><br/>
    
      </div>





      </Grid>

      </Grid>


      <br/><br/><br/>
     


        </div>
    )
}
