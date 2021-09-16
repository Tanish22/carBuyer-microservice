import React, {useState} from "react";
import { makeStyles } from '@material-ui/core/styles';
import {Container, Card, Grid, CardActions, CardActionArea, CardMedia, CardContent, Button, Typography} from '@material-ui/core';

import axios from "axios";

const useStyles1 = makeStyles((theme) => ({
  root: {
    width: "100vw",
    height: "100vh",
    paddingTop: theme.spacing(5) 
  }
}))


export default function Cards () {
  const classes = useStyles1();

  const [ specs, getSpecs ] = useState();

  return (    
    <Container className={classes.root}>
      <Grid container spacing={3}>
        <Grid item sm={3}>
          <Card variant="outlined">
            <CardActionArea>

              <CardMedia image="/evija dark.jpg" style={{ height: 200 }}/>

              <CardContent>
                <Typography variant="h5">
                  Lotus Evija 
                </Typography>   
                  
                <Typography variant="subtitle2">
                  Lotus's 2000hp Hyper EV !! FAST
                  Lorem ipsum dolor sit amet                  
                </Typography>             
              </CardContent>
            </CardActionArea>

            <CardActions>
              <Button 
                onClick={async () => {
                  try{
                    const resp = await axios.get("http://localhost:4444/api/cars/getCars");
                    console.log(resp.data);
                  }
                  catch(e){
                    console.log("error: ", e);
                  }
                }}>
                  Check Specifications..
              </Button>
            </CardActions>

          </Card>
        </Grid>


        <Grid item sm={3}>
          <Card>
            <CardActionArea>
              <CardMedia image="/mclaren p1.jpg" style={{ height: 200 }}/>

              <CardContent>
              <Typography variant="h5">
                Mclaren p1 
              </Typography> 
                
              <Typography variant="subtitle2">
                Mclaren's 900 hp Hybrid Hypercar !! FAST
                Lorem ipsum dolor sit amet                
              </Typography>             
            </CardContent>
            </CardActionArea>            

            <CardActions>
              <Button>
                Check Specifications..
              </Button>
            </CardActions>
          </Card>
        </Grid>


        <Grid item sm={3}>
          <Card>
            <CardActionArea>
              <CardMedia image="/amg one.jpg" style={{ height: 200 }}/>

              <CardContent>
                <Typography variant="h5">
                  AMG One 
                </Typography> 
                  
                <Typography variant="subtitle2">
                  Mercedes's Hybrid Hypercar !! FAST
                  Lorem ipsum dolor sit amet                
                </Typography>             
              </CardContent>
            </CardActionArea>
            
            <CardActions>
              <Button>
                Check Specifications..
              </Button>
            </CardActions>
          </Card>
        </Grid>


        <Grid item sm={3}>
          <Card>
            <CardActionArea>
              <CardMedia image="/Mclaren Speedtail.jpg" style={{ height: 200 }}/>

              <CardContent>
                <Typography variant="h5">
                  Mclaren Speedtail 
                </Typography> 
                  
                <Typography variant="subtitle2">
                  Mclaren's Hybrid HyperGT !! FAST
                  Lorem ipsum dolor sit amet                
                </Typography>             
              </CardContent>
            </CardActionArea>
            
            <CardActions>
              <Button>
                Check Specifications..
              </Button>
            </CardActions>
          </Card>
        </Grid>

      </Grid>        
    </Container>
  )
} 


