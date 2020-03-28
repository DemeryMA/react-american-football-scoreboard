//TODO: STEP 1 - Import the useState hook.
import React, { useState, useEffect, useRef } from "react";
import "./App.css";
import BottomRow from "./BottomRow";

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
  const [home, setHomeResult] = useState(0);
  const [away, setAwayResult] = useState(0);
  const [timer, setTimer] = useState(1500);
  
  const countRef = useRef(timer);
  countRef.current = timer;
  useEffect(() => {
    let countdown = setInterval(() => {
      if (countRef.current % 100 === 0) {
        setTimer(countRef.current - 41);
      } else {
        setTimer(countRef.current - 1);
      }

      if(countRef.current===0){
        clearInterval(countdown);
      }

    }, 1000);
  }, []);

  function timerColor() {
    if (countRef.current <= 0) {
      return "redFont timer";
    } else {
      return "timer";
    }
  }

  function convertText(number) {
    if (number > 0) {
      let stringNum = number.toString();
      let length = stringNum.length;

      if (length === 4) {
        let split = stringNum.split("");

        split.splice(2, 0, ":");
        let returnString = split.join("");

        return returnString;
      } else if (length === 3) {
        let split = stringNum.split("");
        split.splice(0, 0, "0");
        split.splice(2, 0, ":");
        let returnString = split.join("");

        return returnString;
      } else if (length === 2) {
        let split = stringNum.split("");
        split.splice(0, 0, "0");
        split.splice(0, 0, "0");
        split.splice(2, 0, ":");
        let returnString = split.join("");

        return returnString;
      } else if (length === 1) {
        let split = stringNum.split("");
        split.splice(0, 0, "0");
        split.splice(0, 0, "0");
        split.splice(2, 0, ":");
        split.splice(3, 0, "0");
        let returnString = split.join("");

        return returnString;
      }
    } else {
      return "00:00";
    }
  }

  
  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">Saints</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}

            <div className="home__score">{home}</div>
          </div>
          <div className={timerColor()}>{convertText(timer)}</div>
          <div className="away">
            <h2 className="away__name">Packers</h2>
            <div className="away__score">{away}</div>
          </div>
        </div>
        <BottomRow />
      </section>
      <section className="buttons">
        <div className="homeButtons">
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          
          <button className="homeButtons__touchdown" onClick={() => setHomeResult(home + 7)}>Home Touchdown</button>
          <button className="homeButtons__fieldGoal" onClick={() => setHomeResult(home + 3)}>Home Field Goal</button>
          <button className="reset" onClick={() => setHomeResult(0)}>Reset</button> 
        </div>
        <div className="awayButtons">
          <button className="awayButtons__touchdown" onClick={() => setAwayResult(away + 7)}>Away Touchdown</button>
          <button className="awayButtons__fieldGoal" onClick={() => setAwayResult(away + 3)}>Away Field Goal</button>
          <button className="reset" onClick={() => setAwayResult(0)}>Reset</button>
        </div>
      </section>
    </div>
  );
}

export default App;


