import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import '../Styles/Navbar.css';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  
}));

export const Navbar = () => {
    const classes = useStyles();

    return (
    <div className={classes.root}>
      <AppBar position="static" className="customnav" >
        <Toolbar>
          
          <p  className="Catfontsize">
          ALL CATEGORIES:  
          </p>
          

            <div className="navBtn">
           <Button color="inherit">Mobile Phones</Button>
          <Button color="inherit">Cars</Button>
          <Button color="inherit">Motorcycles</Button>
          <Button color="inherit">Houses</Button>
          <Button color="inherit">TV - Video - Audio</Button>
          <Button color="inherit">Tablets</Button>
          <Button color="inherit">Land & Plots</Button>
          
          </div>
        </Toolbar>
      </AppBar>
    </div>
    
    
    )
}
