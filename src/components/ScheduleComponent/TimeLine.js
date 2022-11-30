import React from "react";

import { SCALE, MIN_PER_HOUR } from "./../../constants/index";

const TimeLine = () => {
  // Create an Array with values equal to number of hour per day
  const hours = [...Array(24).keys()];
  const itemStyles = { width: MIN_PER_HOUR * SCALE };

  return (
    <>
      <div className="time-line-container">
        {
          hours.map(item => (
            <span
              className="time"
              key={item}
              style={itemStyles}
            >
              {item}:00
            </span>
          ))
        }
      </div>
    </>
  );
}

export default TimeLine;
