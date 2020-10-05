import React from 'react';
import SearchBar from 'material-ui-search-bar';
import { AppBar, IconButton, Toolbar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Travtail from '../assets/Travtail.png'
import KeyboardArrowDownSharpIcon from '@material-ui/icons/KeyboardArrowDownSharp';

const useStyles = makeStyles({
   root: {
       background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
   },

});

export default function Appbar(props) {
    const classes = useStyles();
    
    return (
<AppBar position="static" className={classes.root}>
  <Toolbar >
      <IconButton aria-label="Filter"> 
       Filter <KeyboardArrowDownSharpIcon/>
      </IconButton>
  <SearchBar placeholder="Search Orders"/>
  </Toolbar>
</AppBar>
    )
}

