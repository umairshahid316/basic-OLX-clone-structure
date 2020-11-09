import React, {useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import olxLogo from '../images/olxLogo.png';
import { red } from '@material-ui/core/colors';
import {Dropdown} from './Dropdown'
import '../Styles/Header.css';

import firebase from 'firebase'
// import provider and auth that we exported from src/client.js
import { provider, auth } from '../context/Firebase';
import { Avatar } from '@material-ui/core';
import { deepOrange, deepPurple } from '@material-ui/core/colors';

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
    purple: {
      color: theme.palette.getContrastText(deepPurple[500]),
      backgroundColor: deepPurple[500],
      marginTop:"10px",
      
    },
  }));

export const Header = () => {
    const classes = useStyles();
const [user, setuser] = useState(false);
const [userName, setuserName] = useState("");

let loginBtn = ()=>{

  
  auth().signInWithPopup(provider)
  .then(({ user }) => {

              
        setuser(true);
        setuserName(user.displayName);

  })



  
}

    return (
<div className={classes.root}>
    
      <AppBar position="fixed" className="appBr">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
           <img src={olxLogo} className="logo" alt="olx Logo" />
          </IconButton>

                <Dropdown/>

            <div className="btn">

         
           {user ? 
           <div style={{ float:"left", paddingRight:"10px"}}>
            <Avatar className={classes.purple}>{userName[0]}</Avatar> 
            
            </div>
             :
            <Button color="inherit" onClick={loginBtn} style={{textDecorationLine:"underline", fontWeight:"bold", fontSize:"17px"}}>Login</Button> }
         

           <Button color="inherit" variant="contained" className="btnSell">Sell item</Button>
         
          </div>


        </Toolbar>
      </AppBar>
    </div>
    
    
    )
}
