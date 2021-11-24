import React from "react";

const TimeDisplay = ({time, timeStatus}) => {
  return (
    <div className={"time-display"}>
      <div className="circle">
        <h1>{time}</h1>
        <p>{timeStatus}</p>
      </div>
    </div>
  );
};

export default TimeDisplay;
