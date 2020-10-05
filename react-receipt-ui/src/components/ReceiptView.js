import React from 'react';
import { Card,CardActionArea, CardActions,Button, Typography, CardContent, 
         ExpansionPanel, ExpansionPanelDetails, ExpansionPanelSummary,
        ListItem, List, ListSubheader, Divider,
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

});

export default function ReceiptView(props) {
    const classes = useStyles();
    
    return (
          <Card className={classes.card}>
           <CardActionArea>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2" >
                      Purchased 09/22/2020
                  </Typography>
                  <Typography variant="body2" color="textSecondary" >
                     Subtotal: $48.30
                  </Typography> 
                </CardContent> 
          </CardActionArea>
          <CardActions>
                  <Button size="small" color="primary">
                   See Details </Button> 
          </CardActions>
          <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>Quick View</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
             <List>
                 <ListItem>
                     Apples 
                 </ListItem>
             </List>
             <Divider/>
             <List subheader={<ListSubheader>Price</ListSubheader>}>
                 <ListItem>
                     Tax
                 </ListItem>
             </List>
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
          </Card>

    )
}