import React from "react";

const Button = ({myClass, myText, clickHandler}) => {
  return (
    <div>
      <button type={"button"} className={myClass} onClick={clickHandler}>
        {myText}
      </button>
    </div>
  );
};

export default Button;
