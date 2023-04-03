import React, { useEffect, useState } from "react";
import Header from "./Header/Header";
import CountDownTimer from "./CountDown/CountDownTimer";
import MeetTeam from "./MeetTeam/MeetTeam";
import Footer from "./Footer/footer";
import Tshirt from "./Tshirt/tshirt";
import Why from "./why/why";
import Gallery from "./Gallery/gallery";
import Flyer from "./Flyer/flyer";

const HomePage = () => {
  const [isCounterStarted, setIsCounterStarted] = useState(false)
  const [starttingDate, setStartingDate] = useState("2023-05-31");
  const [venue, setVenue] = useState("University gymnasium");
  const [registrationsClosingDate, setRegistrationsClosingDate] = useState("2023-05-23");
  const [teamPhoto, setTeamPhoto] = useState("team-image.jpeg");

  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

  const [gallery, setGallery] = useState([
    "2017.jpeg",
    "2.jpg",
    "3.jpg",
    "4.jpg",
    "6.jpg",
    "7.jpg",
    "8.jpg",
    "9.jpg",
    "10.jpg",
  ]);

  const [tShirtFront, setTShirtFront] = useState("tshirt-front.png");
  const [tShirtBack, setTShirtBack] = useState("tshirt-back.png");

  const formatDate = (date) =>{
    let dayList = date.slice(0,10).split("-")
    let month = months[parseInt(dayList[1]) - 1];
    return [dayList[0],month,dayList[2]]
  }

  useEffect((()=>{
    let currentDate = new Date().toJSON().slice(0, 10);
    if (starttingDate.startsWith(currentDate.slice(0,9)) && parseInt(starttingDate.slice(8,10)) - currentDate.slice(8,10) == 1){
      setIsCounterStarted(true)
    }
  }),[])

  return (
    <div>
      <Header />
      {isCounterStarted && <CountDownTimer />}
      <Flyer starttingDate={starttingDate.split("-")} venue={venue} registrationsClosingDate={()=>formatDate(registrationsClosingDate)}/>
      <Why />
      <MeetTeam teamPhoto={teamPhoto}/>
      <Gallery gallery={gallery}/>
      <Tshirt tShirtFront={tShirtFront} tShirtBack={tShirtBack}/>
      <Footer />
    </div>
  );
};

export default HomePage;
