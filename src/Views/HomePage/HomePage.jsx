import React, { useEffect } from "react";
import Header from "./Header/Header";
import CountDownTimer from "./CountDown/CountDownTimer";
import MeetTeam from "./MeetTeam/MeetTeam";
import Footer from "./Footer/footer";
import Tshirt from "./Tshirt/tshirt";

const HomePage = () => {
  return (
    <div>
      <Header />
      <CountDownTimer />
      <MeetTeam />
      <Tshirt />
      <Footer />

      {/* University of Moratuwa International Shuttlers' Fest (UMiSF) is a badminton tournament organized by the badminton team in collaboration with the Division of Physical Education of University of Moratuwa. The tournament consists of an international inter-university event and an all island age group event and will be held for the 7th consecutive year in 2017, bigger than ever!! */}
    </div>
  );
};

export default HomePage;
