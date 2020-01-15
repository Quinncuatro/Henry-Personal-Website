import React, { useEffect, useState } from "react"
import Typed from "react-typed"

const resumeTerminal = () => {
  let days = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
  let months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
  
  function zerosAreHard(n) {
    if (n < 10) {
      n = "0" + n;
    }
    return n;
  }
  
  let now = new Date();
  let day = days[ now.getDay() ];
  let month = months[ now.getMonth() ];
  let date = now.getDate();
  let hours = zerosAreHard(now.getHours());
  let minutes = zerosAreHard(now.getMinutes());
  let seconds = zerosAreHard(now.getSeconds());
  let year = now.getFullYear();
  
  let currentLogin = "Current login: " + day + " " + month + " " + date + " " + hours +
  ":" + minutes + ":" + seconds + " " + year;
  
  const setHiddenClass = useState("hideTerminal");
  useEffect(() => {
    // const timeout = setTimeout(() => setHiddenClass("unhideTerminal"), 2000);
    const timeout = setTimeout(() => console.log("whatever"), 2000);
    return () => clearTimeout(timeout);
  }, []);
  
  return ( 
    <div>
      <span >{ currentLogin }<br />
      Welcome to HenryNeeds.coffee!</span>
      <br /><br />
      <span>
        [hquinn@HenryNeeds ~]$ <span><Typed strings={['whoami']}
        typeSpeed={60}
        cursorChar={''}
        loop={false}
        onComplete="doTheThing()"
        /></span>
      </span>
    </div>
  );
};

export default resumeTerminal;