import React, {useState} from "react";
import { useEffect } from "react";
import "./countdowntimer.css";

const CountDownTimer = (props) => {
  const [startigTimeDifference, setStartingTimeDifference] = useState({})

  const calculateTimeDiffrence = (currentDate, startingDate) => {
    let timeDifference = {
      days:"",
      hours: "",
      mins: "",
      seconds: "",
    };

    timeDifference.days = startingDate.getDate() - currentDate.getDate()
    timeDifference.seconds = 60 - currentDate.getSeconds();
    timeDifference.mins = 59 - currentDate.getMinutes();

    if (currentDate.getHours() < startingDate.getHours()) {
      timeDifference.hours = startingDate.getHours() - currentDate.getHours() - 1;
    } else {
      timeDifference.hours = 24 - 1 - currentDate.getHours() + startingDate.getHours();
    }

    return timeDifference;
  };

  const toSeconds = (time)=> {
    return time.hours * 3600 + time.mins * 60 + time.seconds
  }

  useEffect(() => {
    const countToDate = new Date(props.startingDate)
    setStartingTimeDifference(calculateTimeDiffrence(new Date(), countToDate))
    let previousTimeBetweenDates;

    function flipAllCards(time, remainingDates) {
      const seconds = time % 60;
      const minutes = Math.floor(time / 60) % 60;
      const hours = Math.floor(time / 3600);

      flip(document.querySelector("[data-dates-tens]"), Math.floor(remainingDates / 10));
      flip(document.querySelector("[data-dates-ones]"), remainingDates % 10);

      flip(document.querySelector("[data-hours-tens]"), Math.floor(hours / 10));
      flip(document.querySelector("[data-hours-ones]"), hours % 10);
      flip(
        document.querySelector("[data-minutes-tens]"),
        Math.floor(minutes / 10)
      );
      flip(document.querySelector("[data-minutes-ones]"), minutes % 10);
      flip(
        document.querySelector("[data-seconds-tens]"),
        Math.floor(seconds / 10)
      );
      flip(document.querySelector("[data-seconds-ones]"), seconds % 10);
    }

    function flip(flipCard, newNumber) {
      const topHalf = flipCard.querySelector(".top");
      const startNumber = parseInt(topHalf.textContent);
      if (newNumber === startNumber) return;

      const bottomHalf = flipCard.querySelector(".bottom");
      const topFlip = document.createElement("div");
      topFlip.classList.add("top-flip");
      const bottomFlip = document.createElement("div");
      bottomFlip.classList.add("bottom-flip");

      topHalf.textContent = startNumber;
      bottomHalf.textContent = startNumber;
      topFlip.textContent = startNumber;
      bottomFlip.textContent = newNumber;

      topFlip.addEventListener("animationstart", (e) => {
        topHalf.textContent = newNumber;
      });
      topFlip.addEventListener("animationend", (e) => {
        topFlip.remove();
      });
      bottomFlip.addEventListener("animationend", (e) => {
        bottomHalf.textContent = newNumber;
        bottomFlip.remove();
      });
      flipCard.append(topFlip, bottomFlip);
    }

    setInterval(() => {
      const currentDate = new Date();
      const remainingTime = calculateTimeDiffrence(currentDate, countToDate)
      const timeBetweenDates = toSeconds(remainingTime);
      flipAllCards(timeBetweenDates, remainingTime.days);

      previousTimeBetweenDates = timeBetweenDates;
    }, 250);
  }, []);
  return (
    <div className="countdown-container">
      <div className="rightdiv">
        <p>We are starting Soon</p>
      </div>

      <div class="container">
      <div class="container-segment">
          <div class="segment-title">Days</div>
          <div class="segment">
            <div class="flip-card" data-dates-tens>
              <div class="top">{Math.floor(startigTimeDifference.days / 10)}</div>
              <div class="bottom">{Math.floor(startigTimeDifference.days / 10)}</div>
            </div>
            <div class="flip-card" data-dates-ones>
              <div class="top">{Math.floor(startigTimeDifference.days % 10)}</div>
              <div class="bottom">{Math.floor(startigTimeDifference.days % 10)}</div>
            </div>
          </div>
        </div>

        <div class="container-segment">
          <div class="segment-title">Hours</div>
          <div class="segment">
            <div class="flip-card" data-hours-tens>
              <div class="top">{Math.floor(startigTimeDifference.hours / 10)}</div>
              <div class="bottom">{Math.floor(startigTimeDifference.hours / 10)}</div>
            </div>
            <div class="flip-card" data-hours-ones>
              <div class="top">{Math.floor(startigTimeDifference.hours % 10)}</div>
              <div class="bottom">{Math.floor(startigTimeDifference.hours % 10)}</div>
            </div>
          </div>
        </div>
        <div class="container-segment">
          <div class="segment-title">Minutes</div>
          <div class="segment">
            <div class="flip-card" data-minutes-tens>
              <div class="top">{Math.floor(startigTimeDifference.mins / 10)}</div>
              <div class="bottom">{Math.floor(startigTimeDifference.mins / 10)}</div>
            </div>
            <div class="flip-card" data-minutes-ones>
              <div class="top">{Math.floor(startigTimeDifference.mins % 10)}</div>
              <div class="bottom">{Math.floor(startigTimeDifference.mins % 10)}</div>
            </div>
          </div>
        </div>
        <div class="container-segment">
          <div class="segment-title">Seconds</div>
          <div class="segment">
            <div class="flip-card" data-seconds-tens>
              <div class="top">{Math.floor(startigTimeDifference.seconds / 10)}</div>
              <div class="bottom">{Math.floor(startigTimeDifference.seconds / 10)}</div>
            </div>
            <div class="flip-card" data-seconds-ones>
              <div class="top">{Math.floor(startigTimeDifference.seconds % 10)}</div>
              <div class="bottom">{Math.floor(startigTimeDifference.seconds % 10)}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountDownTimer;
