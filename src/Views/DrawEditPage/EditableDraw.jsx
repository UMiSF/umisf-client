import { closestCenter, DndContext, PointerSensor, rectIntersection, useSensor, useSensors } from "@dnd-kit/core";
import { restrictToWindowEdges } from "@dnd-kit/modifiers";
import { Button, CardContent, CardMedia, Grid, Popover, ToggleButton, Typography } from "@mui/material";
import { useState } from "react";
import { Bracket, Seed, SeedItem, SeedTeam } from "react-brackets";
import Draggable from "./Draggable";
import Droppable from "./Droppable";
import AspectRatioIcon from '@mui/icons-material/AspectRatio';
import { Card } from "react-bootstrap";

export default function EditableDraw(props){

  const {rounds,players,setRounds,setPlayers, addedPlayers, setAddedPlayers} = props;
    const [selectedIndex,setSelectedIndex] = useState();
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClose = () => {
        setAnchorEl(null);
        setSelectedIndex(null);
    };

  function playerCard(player){
    return(
        <Draggable id={player.id} key={player.id}>
            <Grid onClick={(event) => {setSelectedIndex(player.id); setAnchorEl(event.currentTarget);}} item container sx={{width: '100%', height:'100%', justifyContent:'center', alignItems:'center', backgroundColor: '#1a1d2e', color: 'white' }}>
                <Typography sx={{fontSize: '11px'}}>
                    {player.name || 'NO TEAM '}
                </Typography>
            </Grid>
            <Popover
                id={player.id}
                open={selectedIndex === player.id}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
                }}
            >
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        sx={{ height: 140 }}
                        image="https://scontent-xsp1-2.xx.fbcdn.net/v/t1.6435-9/52179359_118841869237133_4952473278020059136_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=5kdD9hxwsL4AX8L49_k&_nc_ht=scontent-xsp1-2.xx&oh=00_AfAE5Fel50alX1h6yYHCbk6lDApfjE7OgVACa5dEPWEC6A&oe=6422DF61"
                        title="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                        Player Profile - {player.name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                        {'Poornage profile component eka metanata danna :-)'}
                        </Typography>
                    </CardContent>
                </Card>
            </Popover>
        </Draggable>
    );
    
  }  

  const CustomSeed = ({seed, breakpoint, roundIndex, seedIndex}) => {
    // breakpoint passed to Bracket component
    // to check if mobile view is triggered or not
  
    // mobileBreakpoint is required to be passed down to a seed
    return (
      <Seed mobileBreakpoint={breakpoint} style={{ fontSize: 12 }}>
        <SeedItem>
          <div>
          <Droppable id={seed.id*2}>  
                <SeedTeam style={{backgroundColor: '#1a1d2e'  }}>
                
                
                    <Grid item container sx={{width: '100%' }}>
                        <Typography sx={{fontSize: '11px'}}>
                        {seed.teams[0]?.name || 'NO TEAM '}
                        </Typography>
                    </Grid>
                </SeedTeam>
            </Droppable>

            <Droppable id={seed.id*2 + 1}>
                <SeedTeam style={{backgroundColor:'#1a1d2e'  }}>
                
                
                    <Grid item container sx={{width: '100%' }}>
                    <Typography sx={{fontSize: '11px'}}>
                        {seed.teams[1]?.name || 'NO TEAM '}
                    </Typography>
                    </Grid>
                </SeedTeam>
            </Droppable>
            
          </div>
        </SeedItem>
      </Seed>
    );
  };

  function onDragEnd({over,active}){
    const matchId = parseInt(over.id/2);
    const teamId = over.id - matchId*2;
    const newTeam = players.filter(p => p.id === active.id)[0];
    const newPlayers = players.filter(p => p.id !== active.id);
    const oldTeamId = rounds[0].seeds[matchId].teamId[teamId];
    const newAddedTeams = addedPlayers.filter(p => p.id !== oldTeamId);
    newAddedTeams.push(newTeam);
    if(oldTeamId !== null){
        const oldTeam = addedPlayers.filter(p => p.id === oldTeamId)[0];
        newPlayers.push(oldTeam);   
    }
    
    const newRounds = rounds.filter(r => true);
    newRounds[0].seeds[matchId].teams[teamId].name = newTeam.name ;
    newRounds[0].seeds[matchId].teamId[teamId] = newTeam.id;
    setPlayers(newPlayers);
    setRounds(newRounds);
    setAddedPlayers(newAddedTeams);
  }

  const pointerSensor = useSensors(useSensor(PointerSensor, {
    activationConstraint: {
        delay: '300',
        tolerance: '5',
    },
  }));


    return(
      <Grid container mt={2} justifyContent='center'>
        <DndContext sensors={pointerSensor} onDragEnd={onDragEnd} collisionDetection={rectIntersection} modifiers={[restrictToWindowEdges]}>
            <Grid item container xs={12} md={3} >
                {players.map((player) => playerCard(player))}
            </Grid>

            <Grid item container xs={12} md={9}>
            <Bracket rounds={rounds} renderSeedComponent={CustomSeed}  roundTitleComponent={(title, roundIndex) => {
                    return <div style={{ textAlign: 'center' }}>{title}</div>;
                }} 
                mobileBreakpoint={900}
            />         
            </Grid>
        </DndContext> 
      </Grid>
        
    )
}
