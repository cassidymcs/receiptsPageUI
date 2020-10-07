import React , {Component, useState, useEffect}from 'react';
import { Card,CardActionArea, CardActions,Button, Typography, CardContent, 
         ExpansionPanel, ExpansionPanelDetails, ExpansionPanelSummary,
        ListItem, List, ListSubheader, Divider, ListItemText, TextareaAutosize,
        } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import logo from '../assets/Travtail.png';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import axios from 'axios';

const useStyles = makeStyles({
   root: {
       background: 'linear-gradient(45,deg, #FE6B8B 30%, #FF8E53 90%)',
   },
       card: { 
               marginLeft: '5%',
               width: '90%', 
               marginTop: '5%',
               
   },
      list_price:  {
            marginLeft: '70%',
      },
 


});


export default function ReceiptView(props) {
    const classes = useStyles();
    

    const [data, setData] = useState({ results: [] });
   
    useEffect(() => {
      const fetchData = async () => {
        const result = await axios(
         "https://localhost:4000/products"
        );
        setData({ results: result.data.results});
        console.log(result.data.results);
      };
      fetchData();
    }, []);

    //used mysql local db: this is what the data logs :
/*
{"results":[{"product_id":1,"product_name":"DVD player","product_price":36},
{"product_id":2,"product_name":"Toilet Paper","product_price":7},
{"product_id":3,"product_name":"Pillow Case set(2)","product_price":9},
{"product_id":4,"product_name":"Flower Vase","product_price":7}]}
*/ 

    return (
         
          <Card className={classes.card}>
           <CardActionArea>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2" >
    {props.num_items} Items Purchased on {props.date}
                  </Typography>
                  <Typography variant="body2" color="textSecondary" >
    Subtotal: ${props.total_price}
                  </Typography> 
                </CardContent> 
          </CardActionArea>
          <CardActions>
                  <Button size="small" color="primary">
                  SEE DETAILS </Button> 
          </CardActions>
          <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>Quick View</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
             <List> 
                        {data.results.map(Products=> ( <ListItem key={Products.product_id}>{Products.product_name} <ListItemText classes={classes.list_price}>{"$" + Products.product_price}</ListItemText>  </ListItem>
                         ))}
             </List>
             <Divider/>
             <List subheader={<ListSubheader>Summary</ListSubheader>}>
                 <ListItem>
                     Tax:
                     <ListItemText className={classes.list_price}>   9.25%</ListItemText>
                     
                 </ListItem>
                 <ListItem>
                     Total:  
                     <ListItemText className={classes.list_price}>   $28.35</ListItemText> 
                 </ListItem>
             </List>
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
          </Card>

    )
}