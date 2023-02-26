import { Card, Grid } from '@mui/material';
import React from 'react';
import Draw from './Draw';

const DrawsPage = () => {
    return (
        <Grid container>
            <Grid item container m={2}>
                <Card variant='elevation' elevation={3} sx={{width: '100%', overflow: 'auto', display: 'flex'}}>
                    <Draw />
                </Card> 
            </Grid>
        </Grid>
        
    );
};

export default DrawsPage;