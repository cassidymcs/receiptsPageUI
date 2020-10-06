import React from 'react';
import { Card,CardActionArea, CardActions,Button, Typography, CardContent, 
         ExpansionPanel, ExpansionPanelDetails, ExpansionPanelSummary,
        ListItem, List, ListSubheader, Divider, ListItemText, TextareaAutosize,
        } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import logo from '../assets/Travtail.png';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


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

const data = [
    {
        id: 1,
        num_items: '3',
        date: '09/22/2020',
        items: [
            {name: 'Apples', price: '2.99'},
            {name: 'Blanket', price: '20.30'},
            {name: 'Sponge', price: '1.99'}
        ]
    },
    {
        id: 2,
        num_items: '2',
        date: '09/28/2020',
        items: [
            {name: 'Gloves', price: '4.99'},
            {name: 'DVD Player', price: '24.99'}
        ]

    }
]



export default function ReceiptView(props) {
    const classes = useStyles();
    
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
                 {data.map((list, id)=>
                  <ListItem key={id}>
                      {list.items.map((title, i) => (
                          <ListItem key={i}>
                              {title.name + "  $" + title.price}
                          </ListItem>
                      )
                      )}
                     </ListItem>
                 )}
             </List>
             <Divider/>
             <List subheader={<ListSubheader>Summary</ListSubheader>}>
                 <ListItem>
                     Tax:
                     <ListItemText className={classes.list_price}>   9.25%</ListItemText>
                     
                 </ListItem>
                 <ListItem>
                     Total:   
                 </ListItem>
             </List>
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
          </Card>

    )
}