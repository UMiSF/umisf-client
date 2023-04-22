import React, { useEffect, useState } from "react";
import Header from "./Header/Header";
import CountDownTimer from "./CountDown/CountDownTimer";
import MeetTeam from "./MeetTeam/MeetTeam";
import Footer from "./Footer/footer";
import Why from "./why/why";
import Gallery from "./Gallery/gallery";
import Flyer from "./Flyer/flyer";

const HomePage = () => {
  const [starttingDate, setStartingDate] = useState("2023-05-21T08:00:00.000");
  const [finishingDate, setFinishingDate] = useState("2023-05-28T00:00:00.000");

  const [showContent, setShowContent] = useState(false)

  const [venue, setVenue] = useState(["University gymnasium", "St. Thomas' College, Mount Lavinia"]);
  const [registrationsDeadlines, setRegistrationsDealines] = useState(["2023-04-17", "2023-04-30"]);
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
  const [tShirtBack, setTShirtBack] = useState("tshirt-back.png");

  useEffect((()=>{
    let currentDate = new Date()
    if (currentDate < new Date(finishingDate)){
      setShowContent(true)
    }

  }),[])

  return (
    <div>
      <Header />
      {/* {isCounterStarted && <CountDownTimer remainingTime={remainingTime} />} */}
      {showContent &&<Flyer
        starttingDate={starttingDate.slice(0, 10).split("-")}
        venue={venue}
        registrationsDeadlines={registrationsDeadlines}
      />}
      <Why />
      <MeetTeam teamPhoto={teamPhoto} />
      <Gallery gallery={gallery} />
      {showContent && <CountDownTimer startingDate={starttingDate} />}
      <Footer />
    </div>
  );
};

export default HomePage;
