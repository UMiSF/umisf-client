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
          University of Moratuwa International Shuttlers’ Fest (UMISF) is the
          annual badminton tournament organized by the badminton team of
          University of Moratuwa in collaboration with the Division of Physical
          Education. The tournament will be held for the 15th time in 2024, on a
          grander scale than ever!
        </p>
        <div class={`${styles["history-row"]}`}>
          <div class={`${styles["objectives-col"]}`}>
            <h3>VISION</h3>
            <p>
              Our vision is to establish a platform for badminton enthusiasts to
              exhibit their talents and encourage a healthy sense of competition
              among players.
            </p>
          </div>
          <div class={`${styles["objectives-col"]}`}>
            <h3>MISSION</h3>
            <p>
              To achieve our vision we aspire to organize a well-managed and
              fair badminton tournament that provides an enjoyable and memorable
              experience for all participants, while promoting fitness and
              sportsmanship.
            </p>
          </div>
          <div class={`${styles["objectives-col"]}`}>
            <h3>TARGETS</h3>
            <p>
              <ul>
                <li>
                  To attract a diverse range of skilled badminton players.
                </li>
                <li>To increase the popularity and awareness of the sport.</li>
                <li>
                  To provide a safe and secure environment for players and
                  spectators.
                </li>
                <li>
                  Timely scheduling of matches and efficient resource
                  management.
                </li>
                <li>
                  To encourage social interaction and networking among
                  participants.
                </li>
                <li>
                  To promote fair play with strict adherence to rules and
                  regulations.
                </li>
              </ul>
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
          UMISF has been a long-standing event, spanning back to its inception
          in 2007. The tournament is carried out with the primary intention of
          providing a platform for badminton players to connect, compete, and
          hone their skills. Teams from India and Malaysia have participated in
          UMISF in 2011, marking a milestone in the history of university
          sports. For over a decade we were able to conduct this tournament
          successfully with the participation of 1000+ players in most of the
          years. After a two-year hiatus due to the pandemic and other
          unforeseen circumstances, the tournament has finally last year. In
          2023, we proudly expanded our horizons by introducing a corporate
          sector to the tournament, and we're confident that this year's event
          will be a huge success too.
        </p>
        <div className={`${styles["row"]}`}>
          <div className={`${styles["past-section-col"]}`}>
            <img
              className={`${styles["past-section-img"]}`}
              src={require("../../assests/images/2018.jpeg")}
              alt=""
            ></img>
            <h3>2017</h3>
          </div>
          <div className={`${styles["past-section-col"]}`}>
            <img
              className={`${styles["past-section-img"]}`}
              src={require("../../assests/images/2019.jpeg")}
              alt=""
            ></img>
            <h3>2018</h3>
          </div>
          <div className={`${styles["past-section-col"]}`}>
            <img
              className={`${styles["past-section-img"]}`}
              src={require("../../assests/images/2020.jpeg")}
              alt=""
            ></img>
            <h3>2019</h3>
          </div>
          <div className={`${styles["past-section-col"]}`}>
            <img
              className={`${styles["past-section-img"]}`}
              src={require("../../assests/images/2023.jpg")}
              alt=""
            ></img>
            <h3>2020</h3>
          </div>
        </div>
      </section>
      <section className={`${styles["testimonials"]}`}>
        <h1>Messages From The Organizing Committee</h1>
        <p>
          Badminton has always been a popular sport among the undergraduate
          community of our university. Since the inauguration of this annual
          tournament in 2007, we have expanded our horizons. It was indeed a
          success for us to reach the 1000 plus mark in the number of
          participants. UMiSF is a great platform to show out the potential of
          youngsters, university students, university staff members, as well as
          corporates. We wish the participants the best of luck for the
          tournament and hope everyone will enjoy it.
        </p>
        <div className={`${styles["row"]}`}>
          <div className={`${styles["testimanial-col"]}`}>
            <img
              src={require("../../assests/images/captain-male.jpg")}
              alt=""
            ></img>
            <div className={`${styles["testimanial-col-content"]}`}>
              <p>
                I believe that UMISF is a great opportunity, especially for
                university as well as school players to flaunt their abilities
                and engage in a friendly rivalry. It is a prestigious event, and
                we are thrilled to hold it this year. We are eagerly counting
                down the days for great tournament filled with lasting
                experiences.
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
                UMISF is not just about winning, but also about enjoying the
                game and having fun. With the intention of creating an
                atmosphere that fosters healthy competition and mutual respect
                among all players, we encourage all badminton enthusiasts to
                participate in this tournament and take advantage of this
                opportunity.
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
                This tournament will provide a window for players of all levels
                to compete against each other and showcase their skills. Whether
                you're a beginner or an experienced player, there's a place for
                you in this tournament. Let's come together and make this
                tournament a memorable one that demonstrates the true spirit of
                badminton!
              </p>
              <h3>Ruchira Wijayasena</h3>
              <h6>Vice Captain</h6>
            </div>
          </div>
          <div className={`${styles["testimanial-col"]}`}>
            <img
              src={require("../../assests/images/viceCaptain-female.jpg")}
              alt=""
            ></img>
            <div className={`${styles["testimanial-col-content"]}`}>
              <p>
                UMISF offers the chance to test yourself against the finest
                players around. Our team has put in a tremendous effort to
                ensure that this tournament is well-organized and that every
                player has an enjoyable experience. So, come prepared to give
                your best game, meet new people, and have an amazing time!
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
