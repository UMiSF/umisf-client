import React from "react";
import { useLocation } from 'react-router-dom';
import FinishedMatchSingle from "./FinishedMatchSingle";
import FinishedMatchDouble from "./FinishedMatchDouble";


const FinishedMatchCard = () => {

    let location = useLocation();
    let {obj} = location.state;
   

  return (
    <>
    {(obj.matchCategory === 'Single') ?<FinishedMatchSingle obj={obj}/>: <FinishedMatchDouble obj={obj}/> } 
    
    </>
  );
};

export default FinishedMatchCard;
