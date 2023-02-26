import { Button, Grid, Typography } from "@mui/material";
import { useState } from "react";
import { Bracket, Seed, SeedItem, SeedTeam } from "react-brackets";

export default function Draw(props){

  const {rounds} = props;
    const [titleIndex,setTitleIndex] = useState(0);

  const CustomSeed = ({seed, breakpoint, roundIndex, seedIndex}) => {
    // breakpoint passed to Bracket component
    // to check if mobile view is triggered or not
  
    // mobileBreakpoint is required to be passed down to a seed
    return (
      <Seed mobileBreakpoint={breakpoint} style={{ fontSize: 12 }}>
        <SeedItem>
          <div>
            <SeedTeam style={{backgroundColor: seed.winner === seed.teams[0]?.name? '#495283':'#1a1d2e'  }}>
              
              {seed.winner? (
                <Grid container>
                  <Grid item container sx={{width: '55%' , borderRightStyle: 'solid', borderColor: ' #adb3d1'}}>
                    <Typography sx={{fontSize: '11px'}}>
                      {seed.teams[0]?.name || 'NO TEAM '}
                    </Typography>
                  </Grid>
                  <Grid item container sx={{width: '15%',display:'flex', justifyContent:'center',borderRightStyle: 'solid', borderColor: ' #adb3d1'}}>
                    <Typography sx={{fontSize: '11px'}}>
                      {seed.score[0][0]}
                    </Typography >
                  </Grid>
                  <Grid item container sx={{width: '15%',display:'flex', justifyContent:'center',borderRightStyle: 'solid', borderColor: ' #adb3d1'}}>
                    <Typography sx={{fontSize: '11px'}}>
                      {seed.score[0][1]}
                    </Typography >
                  </Grid>
                  <Grid item container sx={{width: '15%',display:'flex', justifyContent:'center'}}>
                    <Typography sx={{fontSize: '11px'}}>
                      {seed.score[0][2]}
                    </Typography >
                  </Grid>
                </Grid>
              ):(
                <Grid item container sx={{width: '100%' }}>
                    <Typography sx={{fontSize: '11px'}}>
                      {seed.teams[0]?.name || 'NO TEAM '}
                    </Typography>
                  </Grid>
              )}
            </SeedTeam>

            <SeedTeam style={{backgroundColor: seed.winner === seed.teams[1]?.name? '#495283':'#1a1d2e'  }}>
              
              {seed.winner? (
                <Grid container>
                  <Grid item container sx={{width: '55%' , borderRightStyle: 'solid', borderColor: ' #adb3d1'}}>
                    <Typography sx={{fontSize: '11px'}}>
                      {seed.teams[1]?.name || 'NO TEAM '}
                    </Typography>
                  </Grid>
                  <Grid item container sx={{width: '15%',display:'flex', justifyContent:'center',borderRightStyle: 'solid', borderColor: ' #adb3d1'}}>
                    <Typography sx={{fontSize: '11px'}}>
                      {seed.score[1][0] }
                    </Typography>
                  </Grid>
                  <Grid item container sx={{width: '15%',display:'flex', justifyContent:'center',borderRightStyle: 'solid', borderColor: ' #adb3d1'}}>
                    <Typography sx={{fontSize: '11px'}}>
                      {seed.score[1][1] }
                    </Typography>
                  </Grid>
                  <Grid item container sx={{width: '15%',display:'flex', justifyContent:'center'}}>
                    <Typography sx={{fontSize: '11px'}}>
                      {seed.score[1][2] }
                    </Typography>
                  </Grid>
                </Grid>
              ):(
                <Grid item container sx={{width: '100%' }}>
                    <Typography sx={{fontSize: '11px'}}>
                      {seed.teams[1]?.name || 'NO TEAM '}
                    </Typography>
                  </Grid>
              )}
            </SeedTeam>
          </div>
        </SeedItem>
      </Seed>
    );
  };

  const titles = rounds.map((round) => round.title);

  function handleTitleChange(index){
    setTitleIndex(index)
  }
    return(
      <Grid container>

        <Grid sx={{display: {md:"none", xs:''}}} item container xs={12} justifyContent='center' mt={1}>
          {titles.map((title,index) => <Button sx={{backgroundColor: '#1a1d2e'}} variant={index === titleIndex ? "contained":"outlined" }key={index} onClick={(e) => handleTitleChange(index)}>{title}</Button>)}
        </Grid>

        <Grid item container xs={12} mt={1}>
          <Bracket rounds={rounds} renderSeedComponent={CustomSeed}  swipeableProps={{
          enableMouseEvents: true,
          animateHeight: true,
          index: titleIndex,
          onChangeIndex: setTitleIndex

        }} roundTitleComponent={(title, roundIndex) => {
                return <div style={{ textAlign: 'center' }}>{title}</div>;
            }} 
            mobileBreakpoint={900}
          />         
        </Grid>
      </Grid>
        
    )
}
