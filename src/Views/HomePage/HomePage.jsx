import React, { useEffect, useState } from "react";
import Header from "./Header/Header";
import MeetTeam from "./MeetTeam/MeetTeam";
import Footer from "./Footer/footer";
import Sponsers from "./Sponsers/Sponsers";
import Why from "./why/why";
import Gallery from "./Gallery/gallery";
import Flyer from "./Flyer/flyer";

const HomePage = () => {
  const [starttingDate] = useState("2026-02-26T08:00:00.000");
  const [finishingDate] = useState("2026-03-02T23:59:59.000");

  const [showContent, setShowContent] = useState(false);

  const [venue] = useState(["MBA Badminton Courts, Colombo"]);
  const [registrationsDeadlines] = useState(["2026-02-14", "2026-02-19"]);
  const [teamPhoto] = useState("Team2025.jpg");
  const [gallery] = useState(["10.jpg", "11.jpg", "12.jpg", "13.jpg", "14.jpg", "15.jpg", "16.jpg", "17.jpg", "18.jpg"]);
  const [sponsers] = useState([]);

  useEffect(() => {
    let currentDate = new Date();
    if (currentDate < new Date(finishingDate)) {
      setShowContent(true);
    }
  }, [finishingDate]);

  return (
    <div>
      <Header />
      {/* {isCounterStarted && <CountDownTimer remainingTime={remainingTime} />} */}
      {showContent && (
        <Flyer
          starttingDate={starttingDate.slice(0, 10).split("-")}
          venue={venue}
          registrationsDeadlines={registrationsDeadlines}
        />
      )}
      <Sponsers sponsers={sponsers} />
      <Why />
      <MeetTeam teamPhoto={teamPhoto} />
      <Gallery gallery={gallery} />
      {/* {showContent && <CountDownTimer startingDate={starttingDate} />} */}
      <Footer />
    </div>
  );
};

export default HomePage;
