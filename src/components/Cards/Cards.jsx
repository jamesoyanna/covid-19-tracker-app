import React from 'react';
import {Card, CardContent, Typography, Grid} from "@material-ui/core";
import CountUp from 'react-countup';
import styles from './Cards.module.css'; 

const Cards = ({data: {confirmed, recovered, deaths, lastUpdate}})=>{
    if(!confirmed){
        return 'loading...'
    }
    console.log(confirmed);
    return(
       <div className={styles.container}>
           <Grid container spacing={3} justify="center">
             <Grid item component={Card}>
                 <CardContent>
                     <Typography color="textSecondary" gutterBottom>Infected</Typography>
                     <Typography variant="h5">
                         <CountUp
                         start={0}
                         end={confirmed.value}
                         duration={2.5}
                         seperator=","
                         /></Typography>
                     <Typography color="textSecondary">REAL DATE</Typography>
                     <Typography variant="body2">Number of active cases of covid-19</Typography>
                 </CardContent>
                 </Grid>
                <Grid item component={Card}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Recovered</Typography>
                        <Typography variant="h5">REAL DATA</Typography>
                        <Typography color="textSecondary">REAL DATE</Typography>
                        <Typography variant="body2">Number of recovered cases from covid-19</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Deaths</Typography>
                        <Typography variant="h5">REAL DATA</Typography>
                        <Typography color="textSecondary">REAL DATE</Typography>
                        <Typography variant="body2">Number of deaths recorded from covid-19</Typography>
                    </CardContent>
                </Grid>               
           </Grid>
       </div>
    )
}
 export default Cards; 