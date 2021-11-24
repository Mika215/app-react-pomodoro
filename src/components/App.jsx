import React, {useState, useEffect} from "react";
import {formatTime} from "../time-handler";
import StatusDisplay from "./StatusDisplay";
import TimeDisplay from "./TimeDisplay";
import PlusMinus from "./PlusMinus";
import Controls from "./Controls";
import AlertBox from "./AlertBox";

const App = () => {
  let WORK_TIME = 1500;
  let BREAK_TIME = 300;
  const [time, setTime] = useState(WORK_TIME);
  const [intervalControl, setIntervalControl] = useState(0);
  const [status, setStatus] = useState("Working");
  //const maxTime = WORK_TIME

  const [formatedTime, setFormatedTime] = useState(formatTime(WORK_TIME));
  const [alertBox, setAlertBox] = useState(false);
  const decrement = () => {
    if (time <= 0) return;
    setTime((time) => time - 1);
  };
  const increment = () => {
    setTime((time) => time + 1);
  };

  const startTimer = () => {
    if (time === 0) return;
    coreTime = time;
    setIntervalControl(
      setInterval(() => {
        decrement();
        // console.log(intervalControl);
      }, 1000)
    );
  };

  const pauseTimer = () => {
    clearInterval(intervalControl);
    setIntervalControl(0); // what is the logic behind when i remove this line the time cant sart agin after once stoped
    // console.log("time paused");
  };
  //The alertBox and switch status has some bug and should be done agin (its not done yet though)
  const resetTimer = () => {
    if (status === "Working") {
      setTime(WORK_TIME);
    } else {
      setTime(BREAK_TIME);
    }

    clearInterval(intervalControl);
    //stoping the time from running behind this automatically turns the pause button to start button
    setIntervalControl(0);
    setAlertBox(false);
    // console.log(time + " time reset");
  };

  const switchStatus = () => {
    if (status === "Working") {
      setStatus("Break");
    } else {
      setStatus("Working");
    }
  };

  const switchToBreak = () => {
    switchStatus();
    setTime(BREAK_TIME);
    setAlertBox(false);
  };

  const switchToWorking = () => {
    switchStatus();
    setTime(WORK_TIME);
    setAlertBox(false);
  };

  const closeAlertBox = () => {
    //returning the time to its default
    if (status === "Working") {
      setTime(WORK_TIME);
    } else {
      setTime(BREAK_TIME);
    }
    //disabling the alert box
    setAlertBox(false);
  };
  useEffect(() => {
    setFormatedTime(formatTime(time));
  }, [time]);

  useEffect(() => {
    //make sure that the timer stops @ zero => Negative time doesn't exist
    if (time > 0) return;
    pauseTimer();
    setAlertBox(true);
  }, [time]);
  // console.log(time)
  //!Trying to get progress in percents
  let whichTime;
  const timeFilter = () => {
    if (status === "Working") {
      whichTime = WORK_TIME;
    } else {
      whichTime = BREAK_TIME;
    }
    return whichTime;
  };

  // const userAddedTime=()=>{

  //   if(status === "Working" && time<= WORK_TIME){
  //     whichTime = WORK_TIME;
  //   }
  //   else  if (status === "Break" && time<= BREAK_TIME) {

  //   } else {
  //     whichTime = time;
  //   }
  //   console.log(whichTime)
  //   return whichTime;
  // }
  let currentTime = time;
  let coreTime = timeFilter(); // userAddedTime();
  let progress = 0;

  const descendingProgress = () => {
    while (currentTime <= coreTime) {
      progress = Math.floor((currentTime / coreTime) * 100);

      return `${progress}%`;
    }
  };
  //!reverting the progress percent to count upward
  let ascending = 100;
  const ascendingProgress = () => {
    while (currentTime <= coreTime) {
      progress = Math.floor((currentTime / coreTime) * 100);
      ascending += -progress;
      return `${ascending}%`; //TODO: this will be used for the progres bar
    }
  };

  return (
    <React.Fragment>
      <div className={"container"}>
        <StatusDisplay placeHolder={"Current status"} status={status} />
        <TimeDisplay
          time={formatedTime}
          timeStatus={
            intervalControl ? `${ascendingProgress()} Running` : "Paused"
          }
        />

        {/* //!Something Went Wrong with the plus minus buttons //!with the
        previous(check sand-box.js) code it was balanced style but with the new one the plus
        button is shrinking.  
        */}

        <PlusMinus
          minusClass={intervalControl ? "hide" : "plus-minus-minus"}
          plusClass={intervalControl ? "hide" : "plus-minus-plus"}
          minusHandler={decrement}
          plusHandler={increment}
          minusText={"-"}
          plusText={"+"}
          classControl={"plus-minus"}
        />
        <Controls
          startClass={intervalControl ? "pause-btn" : "start-btn"}
          startHandler={intervalControl ? pauseTimer : startTimer}
          startText={intervalControl ? "Pause" : "Start"}
          resetClass={"reset-btn"}
          resetHandler={resetTimer}
          resetText={"Reset"}
        />
      </div>
      <AlertBox
        boxClass={alertBox ? "alert-box" : "hide"}
        boxMessage={status === "Working" ? "Take a Break?" : "Keep Working?"}
        userClass={"user-options"}
        yesClass={"btn yes"}
        yesHandler={status === "Working" ? switchToBreak : switchToWorking}
        yesText={"Yes"}
        closeClass={"btn close"}
        closeHandler={closeAlertBox}
        closeText={"Close"}
      />
    </React.Fragment>
  );
};
export default App;
