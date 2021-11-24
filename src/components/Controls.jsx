import React from "react";
import Button from "./Button";

const Controls = ({
  startClass,
  resetClass,
  startText,
  resetText,
  startHandler,
  resetHandler,
}) => {
  return (
    <div className={"controls"}>
      <Button
        myClass={startClass}
        myText={startText}
        clickHandler={startHandler}
      />
      <Button
        myClass={resetClass}
        myText={resetText}
        clickHandler={resetHandler}
      />
    </div>
  );
};

export default Controls;
