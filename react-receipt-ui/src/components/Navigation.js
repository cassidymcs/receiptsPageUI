import React from 'react';
import SearchBar from 'material-ui-search-bar';
import { AppBar, Typography, Toolbar, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Travtail from '../assets/Travtail.png'

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
  <SearchBar/>
  </Toolbar>
</AppBar>
    )
}

