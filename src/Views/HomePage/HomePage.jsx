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
  const [starttingDate, setStartingDate] = useState("2023-05-21");
  const [venue, setVenue] = useState(["University gymnasium","S. Thomas' College, Mount Lavinia"]);
  const [registrationsDeadlines, setRegistrationsDealines] = useState(["2023-04-13", "2023-04-30"]);
  const [teamPhoto, setTeamPhoto] = useState("team-image.jpeg");

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
      <Flyer starttingDate={starttingDate.split("-")} venue={venue} registrationsDeadlines={registrationsDeadlines}/>
      <Why />
      <MeetTeam teamPhoto={teamPhoto}/>
      <Gallery gallery={gallery}/>
      <Tshirt tShirtFront={tShirtFront} tShirtBack={tShirtBack}/>
      <Footer />
    </div>
  );
};

export default HomePage;
