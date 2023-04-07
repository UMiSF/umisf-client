import React, { useState } from "react";
import styles from "./developers.module.css";
import HeaderPage from "../HeaderPage/HeaderPage";
import Footer from "../HomePage/Footer/footer";
import { LinkedinOutlined, GithubOutlined, FacebookOutlined } from "@ant-design/icons";

function DevelopersPage() {
  const [developers, setDevelopers] = useState([
    {
      name: "Nethmi Jayakody",
      working_place: "Trainee Software engineer@ WealthOS",
      image: "nethmi.JPG",
      position: "Team Lead| Full Stack Developer",
      linkedin: 'https://www.linkedin.com/in/nethmi-jayakody/',
      facebook:'https://web.facebook.com/nethmi.jayakody.52',
      github: 'neth99-coder'
    },
    {
      name: "Supun Dasanayaka",
      working_place: "Trainee Software engineer@ Insighture",
      image: "supun.jpeg",
      position: "Full Stack Developer",
      linkedin: 'https://www.linkedin.com/in/supun-dhananjaya/',
      facebook:'https://web.facebook.com/supun.dhananjaya.5817',
      github: 'SupunDhananjaya'
    },
    {
      name: "Harshani Bandara",
      working_place: "Trainee Software engineer@ Dialog Axiata",
      image: "harshani.jpeg",
      position: "Full Stack Developer",
      linkedin: 'https://www.linkedin.com/in/harshanibandara/',
      facebook:'https://web.facebook.com/harshani.bandara.1232',
      github: 'HarshaniBandara'
    },
    {
      name: "Vinul Fernando",
      working_place: "Trainee Software engineer@ GTN",
      image: "vinul.jpg",
      position: "Full Stack Developer",
      linkedin: 'https://www.linkedin.com/in/vinul-fernando-1239761a0/',
      facebook:'https://web.facebook.com/vinul.fernando.7',
      github: 'Vinuhans'
    },
    
    {
      name: "Kumuthu Athukorala",
      working_place: "Trainee Software engineer@ Codegen",
      image: "harshani.jpeg",
      position: "Full Stack Developer",
      linkedin: 'https://www.linkedin.com/in/kumuthu-athukorala/',
      facebook:'https://web.facebook.com/kumuthu.athukorala',
      github: 'KumuthuA'
    },
    {
      name: "Yasira Punsith",
      working_place: "CSE undergraduate@ UOM",
      image: "harshani.jpeg",
      position: "Full Stack Developer",
      linkedin: 'https://www.linkedin.com/in/yasira-punsith-839121266/',
      facebook:'https://web.facebook.com/profile.php?id=100006817725111',
      github: 'yasira2000'
    },
    {
      name: "Poorna Cooray",
      working_place: "Trainee Software engineer@ H2O.ai",
      image: "poorna.jpg",
      position: "Full Stack Developer",
      linkedin: 'https://www.linkedin.com/in/poorna-cooray-64430721b/',
      facebook:'https://web.facebook.com/prn.savindi',
      github: 'poornaSavindi'
    },
    
  ]);
  return (
    <div>
      <HeaderPage />

      <div className={`${styles["developer-container"]}`}>
        <div className={`${styles["developer-title"]}`}>
          MEET OUR CREATIVE <br />
          DEVELOPERS
        </div>
      </div>

      <div className={`${styles["developers-all"]}`}>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. A facere eligendi esse explicabo
          laborum repudiandae corporis praesentium et ducimus quod Lorem ipsum, dolor sit amet
          consectetur adipisicing elit. A facere eligendi esse explicabo laborum repudiandae
          corporis praesentium et ducimus quod
        </p>
        <div className={`${styles["developers"]}`}>
          {developers.map((developer, index) => (
            <div className={`${styles["developer"]}`}>
              <img src={require(`../../assests/images/${developer.image}`)} />
              <div className={`${styles["overlay"]}`}>
                <a href={`${developer.linkedin}`} target='_blank'><img src={require(`../../assests/images/linkedin.png`)} style={{ width: "35px" }} /></a>
                <a href={`https://github.com/${developer.github}`} target='_blank'><img src={require(`../../assests/images/github.png`)} style={{ width: "45px" }} /></a>
                <a href={`${developer.facebook}`} target='_blank'><img src={require(`../../assests/images/facebook.png`)} style={{ width: "35px" }} /></a>
              </div>
              <div className={`${styles["details"]}`}>
                <p style={{ fontWeight: "bold" }}>{developer.name}</p>
                <p>{developer.working_place}</p>
                <p>{developer.position}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default DevelopersPage;
