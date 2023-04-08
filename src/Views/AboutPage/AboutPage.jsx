import React, { useEffect, useState } from "react";
import Footer from "../HomePage/Footer/footer";
import Gallery from "../HomePage/Gallery/gallery";
import HeaderPage from "../HeaderPage/HeaderPage";
import styles from "./aboutPage.module.css";

const AboutPage = () => {
  return (
    <div>
      <div className={`${styles["headerDiv1"]}`}>
        <HeaderPage />
        <div className={`${styles["about-container"]}`}>
          <h1>About Us</h1>
        </div>
      </div>
      {/* mission vission section */}
      <section class={`${styles["objectives"]}`}>
        <p>
          University of Moratuwa International Shuttlers' Fest (UMiSF) is a
          badminton tournament organized by the badminton team in collaboration
          with the Division of Physical Education of University of Moratuwa. The
          tournament consists of an international inter-university event and an
          all island age group event and will be held for the 14th time in 2023,
          bigger than ever!!
        </p>
        <div class={`${styles["history-row"]}`}>
          <div class={`${styles["objectives-col"]}`}>
            <h3>VISION</h3>
            <p>
              Our vision is to make the UMISF Badminton Tournament a premier
              sporting event that celebrates the spirit of competition,
              excellence, and camaraderie among university and school students.
              We strive to create an unforgettable experience for all
              participants and spectators, and inspire the next generation of
              badminton champions.
            </p>
          </div>
          <div class={`${styles["objectives-col"]}`}>
            <h3>MISSION</h3>
            <p>
              Our mission is to create a tournament that embodies the highest
              standards of excellence, fairness, and sportsmanship and inspires
              players to reach their full potential both on and off the court.
            </p>
          </div>
          <div class={`${styles["objectives-col"]}`}>
            <h3>TARGETS</h3>
            <p>
              Our target for the UMISF is to attract a diverse group of
              university and school players who are passionate about badminton
              and looking to compete at a high level.
            </p>
          </div>
        </div>
      </section>
      <section className={`${styles["past-section"]}`}>
        <h1>
          Our{" "}
          <p
            style={{
              display: "inline-block",
              color: "#0984E3",
              fontFamily: "Hind",
            }}
          >
            History
          </p>
        </h1>
        <p>
        UMISF has been held every year since 2007, providing a platform for badminton players to connect, compete, and hone their skills. After a two-year hiatus due to the pandemic and other unforeseen circumstances, the tournament has finally returned, and we're confident that this year's event will be a huge success too.
        </p>
        <div className={`${styles["row"]}`}>
          <div className={`${styles["past-section-col"]}`}>
            <img
              className={`${styles["past-section-img"]}`}
              src={require("../../assests/images/2017.jpeg")}
              alt=""
            ></img>
            <h3>2017</h3>
            <p>
              Lorem ipsum is placeholder text commonly used in the graphic,
              print, and publishing industries for previewing layouts and visual
              mockups. LOREM IPSUM GENERATOR
            </p>
          </div>
          <div className={`${styles["past-section-col"]}`}>
            <img
              className={`${styles["past-section-img"]}`}
              src={require("../../assests/images/2018.jpeg")}
              alt=""
            ></img>
            <h3>2018</h3>
            <p>
              Lorem ipsum is placeholder text commonly used in the graphic,
              print, and publishing industries for previewing layouts and visual
              mockups. LOREM IPSUM GENERATOR
            </p>
          </div>
          <div className={`${styles["past-section-col"]}`}>
            <img
              className={`${styles["past-section-img"]}`}
              src={require("../../assests/images/2019.jpeg")}
              alt=""
            ></img>
            <h3>2019</h3>
            <p>
              Lorem ipsum is placeholder text commonly used in the graphic,
              print, and publishing industries for previewing layouts and visual
              mockups. LOREM IPSUM GENERATOR
            </p>
          </div>
          <div className={`${styles["past-section-col"]}`}>
            <img
              className={`${styles["past-section-img"]}`}
              src={require("../../assests/images/2020.jpeg")}
              alt=""
            ></img>
            <h3>2020</h3>
            <p>
              Lorem ipsum is placeholder text commonly used in the graphic,
              print, and publishing industries for previewing layouts and visual
              mockups. LOREM IPSUM GENERATOR
            </p>
          </div>
        </div>
      </section>
      <section className={`${styles["testimonials"]}`}>
        <h1>Masseges From The Organizing Committee</h1>
        <p>
          Badminton has always been a popular sport among the undergraduate
          community of our university. Since the inauguration of annual
          tournament by Mora in 2007, we have expanded our horizons. It is
          indeed a success for us to reach the 1000 plus mark in the number of
          participants. UMiSF is a stage to show out the potential of
          youngsters, university students and university staff members. I wish
          the participants the best of luck for the tournament and hope you will
          enjoy the talents unfolding in front of you in this tournament.
        </p>
        <div className={`${styles["row"]}`}>
          <div className={`${styles["testimanial-col"]}`}>
            <img
              src={require("../../assests/images/captain-male.jpg")}
              alt=""
            ></img>
            <div className={`${styles["testimanial-col-content"]}`}>
              <p>
                This is a great opportunity for university teams and school
                players to showcase their skills and compete against each other
                in a friendly and competitive environment. We are honored to be
                a part of this event, and we are excited to meet and compete
                against other talented athletes. We hope that everyone will have
                a great time, make new friends, and create lasting memories.
                Good luck to all the teams, and let the games begin!
              </p>
              <h3>Bhagya Ranasinghe</h3>
              <h6>Captain</h6>
            </div>
          </div>
          <div className={`${styles["testimanial-col"]}`}>
            <img
              src={require("../../assests/images/captain-female.jpg")}
              alt=""
            ></img>
            <div className={`${styles["testimanial-col-content"]}`}>
              <p>
                The UMISF is an incredible opportunity for us to showcase our
                skills and compete against some of the best players around. As
                captain of the women's team, I am proud of the hard work that
                our team has put in, and I know that you are ready to play at
                your best. I hope that this tournament will be a fun and
                rewarding experience for all the participants and that we can
                show what it means to play with passion and determination.
              </p>
              <h3>Nethmi Jayakody</h3>
              <h6>Captain</h6>
            </div>
          </div>
        </div>
        <div className={`${styles["row"]}`}>
          <div className={`${styles["testimanial-col"]}`}>
            <img
              src={require("../../assests/images/viceCaptain-male.jpg")}
              alt=""
            ></img>
            <div className={`${styles["testimanial-col-content"]}`}>
              <p>
                I would want to express our pleasure and enthusiasm for this
                competition as the vice captain of the men's team. We are
                honored to be playing against such talented opponents since we
                are aware that everyone has worked so hard and dedicated
                themselves to getting to this stage. We anticipate that everyone
                who takes part in this tournament will have a positive and
                memorable experience. Let's compete fiercely, fairly, and most
                importantly, let's enjoy ourselves!
              </p>
              <h3>Ruchira Wijayasena</h3>
              <h6>Vice Captain</h6>
            </div>
          </div>
          <div className={`${styles["testimanial-col"]}`}>
            <img
              src={require("../../assests/images/viceCaptain-female.jpeg")}
              alt=""
            ></img>
            <div className={`${styles["testimanial-col-content"]}`}>
              <p>
                This is a wonderful opportunity for us to come together and
                showcase our love for this sport. I hope that we can all play
                our best and I want to remind everyone that badminton is more
                than just a game - it's a way to connect with others, to
                challenge ourselves, and to learn valuable life skills like
                teamwork, dedication, and perseverance. Let's all remember to
                play with good sportsmanship and respect for each other, and
                let's make this tournament an experience that we will all
                remember for years to come.
              </p>
              <h3>Pamodya Kodithuwakku</h3>
              <h6>Vice Captain</h6>
            </div>
          </div>
        </div>
      </section>
      <Footer></Footer>
    </div>
  );
};

export default AboutPage;
