import React,{useState} from 'react'
import {NativeSelect,FormControl} from '@material-ui/core';
import '../Styles/Dropdown.css'
import SearchIcon from '@material-ui/icons/Search';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import InputBase from '@material-ui/core/InputBase';
import { fade, makeStyles } from '@material-ui/core/styles';
import { Translate } from '@material-ui/icons';
import '../Styles/Dropdown.css';

const useStyles = makeStyles((theme) => ({
    
       
    inputRoot: {
      color: 'inherit',
    },


  }));
  


export const Dropdown = () => {

    const classes = useStyles();
const [select1, setSelect1] = useState("Hyderabad, Sindh")

const handleChange = (event) => {
    const val = event.target.value;
    setSelect1(val)

  };

    return (
        <div>

        <Grid  container>
    
    <Grid item  >
            <FormControl  className="select1" variant="outlined"  >
      <InputLabel htmlFor="selectid" className="inputLabel"  ><span><SearchIcon/></span>{select1}</InputLabel>
           
            <Select
            style={{border:"2px solid black"}}
            native
            // defaultValue="" 
            id="selectid"
            label="Hyderabad, sindh"
             value={select1}
             onChange={handleChange}               
     
            >

        <option aria-label="None" value="" />
        <option value="Global1">Karachi, sindh</option>
        <option value="Global2">Islamabad, punjab</option>
        <option value="Global3">Peshawar, kpk</option>
    {/* {fetchedCountries.map((country,i)=><option key={i} value={country}>{country}</option>)} */}
            </Select>
        </FormControl>
    
        </Grid>
                    {/* first select end */}



            <Grid item  className="Searchgrid">


            <div className="search">
            <InputBase 
            style={{width:"100%", height:"100%",fontSize:"20px" }}
              placeholder="Find Cars, Mobile phones and more..."
           
              inputProps={{ 'aria-label': 'search' }}
            />

            <div className="searchIcon">
              <SearchIcon />
            </div>
             </div>








              </Grid>



        </Grid>


        </div>
    )
}
