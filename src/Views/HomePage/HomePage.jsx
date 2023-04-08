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
  const [isCounterStarted, setIsCounterStarted] = useState(false);
  // const [starttingDate, setStartingDate] = useState("2023-05-21T08:00:00.000");
  const [starttingDate, setStartingDate] = useState("2023-05-21T08:00:00.000");
  const [remainingTime, setRemainingTime] = useState("");
  const [venue, setVenue] = useState(["University gymnasium", "S. Thomas' College, Mount Lavinia"]);
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

  const calculateTimeDiffrence = (currentDate, startingDate) => {
    let timeDifference = {
      hours: "",
      mins: "",
      seconds: "",
    };

    console.log()
    timeDifference.seconds = 60 - currentDate.getSeconds();
    timeDifference.mins = 59 - currentDate.getMinutes();

    if (currentDate.getHours() < startingDate.getHours()) {
      timeDifference.hours = startingDate.getHours() - currentDate.getHours() - 1;
    } else {
      timeDifference.hours = 25 - currentDate.getHours() + startingDate.getHours();
    }

    return timeDifference;
  };

  useEffect(() => {
    let currentDate = new Date();
    let startingDate = new Date(starttingDate);
    if (
      (startingDate.getDate() - currentDate.getDate() == 1 &&
        currentDate.getHours() >= startingDate.getHours()) ||
      (startingDate.getDate() == currentDate.getDate() &&
        currentDate.getHours() <= startingDate.getHours())
    ) {
      setIsCounterStarted(true);
      setRemainingTime(calculateTimeDiffrence(currentDate, startingDate));
      console.log(calculateTimeDiffrence(currentDate, startingDate));
    }
  }, []);

  return (
    <div>
      <Header />
      {isCounterStarted && <CountDownTimer remainingTime={remainingTime} />}
      <Flyer
        starttingDate={starttingDate.slice(0, 10).split("-")}
        venue={venue}
        registrationsDeadlines={registrationsDeadlines}
      />
      <Why />
      <MeetTeam teamPhoto={teamPhoto} />
      <Gallery gallery={gallery} />
      <Tshirt tShirtFront={tShirtFront} tShirtBack={tShirtBack} />
      <Footer />
    </div>
  );
};

export default HomePage;
