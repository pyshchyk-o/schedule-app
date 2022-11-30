import React from "react";

import ScheduleItem from "./ScheduleItem";
import TimeLine from "./TimeLine";
import { SCALE } from "./../../constants/index";

// Get min per day multiplied by scale
const containerWidth = (60 * 24) * SCALE;

const ScheduleList = (props) => {
  const { channels, currentTime, currentSchedule } = props;

  return (
    <div
      className="schedules-list-container"
      style={{ width: containerWidth }}
    >
      <div className="time-line-header">
        <TimeLine channels={channels}/>
      </div>
      <div className="schedules">
        {
          channels.map(channel => (
            <ScheduleItem
              currentTime={currentTime}
              channel={channel}
              key={channel.id}
            />
          ))
        }
      </div>
      <div
        className="current-schedule"
        style={{ left: currentSchedule }}
      />
    </div>
  );
}

export default ScheduleList;
