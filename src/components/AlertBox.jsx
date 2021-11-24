import React from "react";
import UserOptions from "./UserOptions";

const AlertBox = ({
  userClass,
  boxClass,
  boxMessage,
  yesClass,
  yesHandler,
  yesText,
  closeClass,
  closeHandler,
  closeText,
}) => {
  return (
    <div className={boxClass}>
      <p>{boxMessage}</p>
      {/* //!Even though we have two buttons inside this component we combine them
      as one 
      
      // !yes and close buttons are combined under the UserOptions components &
        //  the same userclassname*/}
      <UserOptions
        userClass={userClass}
        yesClass={yesClass}
        yesHandler={yesHandler}
        yesText={yesText}
        closeClass={closeClass}
        closeHandler={closeHandler}
        closeText={closeText}
      />
    </div>
  );
};

export default AlertBox;
