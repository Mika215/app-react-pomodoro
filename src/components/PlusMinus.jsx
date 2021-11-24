import React from "react";
import Button from "./Button";

const PlusMinus = ({
  classControl,
  minusClass,
  plusClass,
  plusHandler,
  minusHandler,
  plusText,
  minusText,
}) => {
  return (
    <div className={classControl}>
      <Button
        myClass={minusClass}
        clickHandler={minusHandler}
        myText={minusText}
      />
      <Button
        myClass={plusClass}
        clickHandler={plusHandler}
        myText={plusText}
      />
    </div>
  );
};

export default PlusMinus;
