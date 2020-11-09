import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import { Grid } from '@material-ui/core';
import '../Styles/Footer.css';


const useStyles = makeStyles({
    root: {
      width: "100%",
      backgroundColor:"black",
      height:"50px",
      color :"white"
    },
  });

export const Footer = () => {
  const classes = useStyles();
 
  return (

  <Grid container>

<Grid item xs={12}>

    <div className={classes.root}>


<div style={{ display:"flex",width:"100%"}}>

<div className="footerText1">
Other Countries India - South Africa - Indonesia
</div>
<div className="footerText2">
Free Classifieds in Pakistan. © 2006-2020 OLX
</div>

</div>



    </div>


    </Grid>
    </Grid>
  );
}
