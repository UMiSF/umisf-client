import { Card, Grid } from '@mui/material';
import React from 'react';
import Draw from './Draw';

const DrawsPage = () => {

    const rounds = [
        {
          title: 'Round one',
          seeds: [
            {
              id: 1,
              date: new Date().toDateString(),
              teams: [{ name: 'Team A' }, { name: 'Team B' }],
              score: [[12,23,23],[23,5,21]],
              winner: 'Team A'
    
            },
            {
              id: 2,
              date: new Date().toDateString(),
              teams: [{ name: 'Team C' }, { name: 'Team D' }],
              score: [[15,23,13],[23,5,23]],
              winner: 'Team D'
            },
            {
              id: 3,
              date: new Date().toDateString(),
              teams: [{ name: 'Team E' }, { name: 'Team F' }],
              score: [['','',''],['','','']]
            },
            {
              id: 4,
              date: new Date().toDateString(),
              teams: [{ name: 'Team G' }, { name: 'Team H' }],
              score: [['','',''],['','','']]
            },
          ],
        },
        {
          title: 'Round two',
          seeds: [
            {
              id: 5,
              date: new Date().toDateString(),
              teams: [{ name: 'Team A' }, { name: 'Team D' }],
              score: [['','',''],['','','']]
            },
            {
              id: 6,
              date: new Date().toDateString(),
              teams: [{ name: 'TBD' }, { name: 'TBD' }],
              score: [['','',''],['','','']]
            }
          ],
        },
        {
          title: 'Round three',
          seeds: [
            {
              id: 7,
              date: new Date().toDateString(),
              teams: [{ name: 'TBD' }, { name: 'TBD' }],
              score: [['','',''],['','','']]
            }
          ],
        }
      ];


    return (
        <Grid container>
            <Grid item container m={2} justifyContent='center'>
                <Card variant='elevation' elevation={3} sx={{ overflow: 'auto', display: 'flex'}}>
                    <Draw rounds={rounds} />
                </Card> 
            </Grid>
        </Grid>
        
    );
};

export default DrawsPage;