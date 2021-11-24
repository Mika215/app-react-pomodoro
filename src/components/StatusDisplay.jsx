import React from "react";

const StatusDisplay = ({placeHolder, status}) => {
  return (
    <div className={"status-display"}>
      <p>
        {placeHolder}:<span>{status}</span>
      </p>
    </div>
  );
};

export default StatusDisplay;
