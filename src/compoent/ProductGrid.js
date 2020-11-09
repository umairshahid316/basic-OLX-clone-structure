import React from 'react'
import Grid from '@material-ui/core/Grid';
import {ProductCard} from './ProductCard';
import {items} from '../context/Data';
import { Link } from 'react-router-dom';

export const ProductGrid = () => {
    return (
        <div>
            
            <Grid container  style={{flexGrow:"1"}} >

{Object.entries(items).map(([slug,{name,img,price}])=>(


 <Grid item key={slug} style={{padding:"0px 0px 30px 50px"}} xs={12} sm={4}>
   
    <Link to={slug} style={{textDecoration:"none"}}>
<ProductCard  name={name} img={img} price={price} />
</Link>
</Grid> 

))}


</Grid>

        </div>
    )
}
