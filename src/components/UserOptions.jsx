import React from "react";
import Button from "./Button";

const UserOptions = ({
  userClass,
  yesClass,
  yesHandler,
  yesText,
  closeClass,
  closeHandler,
  closeText,
}) => {
  return (
    <div className={userClass}>
      <Button myClass={yesClass} clickHandler={yesHandler} myText={yesText} />

      <Button
        myClass={closeClass}
        clickHandler={closeHandler}
        myText={closeText}
      />
    </div>
  );
};

export default UserOptions;
