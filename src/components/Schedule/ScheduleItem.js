import React from "react";
import moment from "moment";
import Program from "./Program";

const ScheduleItem = (props) => {

  const isProgramActive = (program) => {
    const { currentTime } = props;
    const startTime = moment(program.start);
    const endTime = moment(program.end);
    const today = moment(currentTime);

    return today.isBetween(startTime, endTime, null, "[)");
  };

  const renderPrograms = () => {
    const { channel } = props;
    const programs = channel?.schedules;

    return programs.map((program, index) => {
      const isActive = isProgramActive(program);
      return <Program program={program} isActive={isActive} key={index}/>;
    });
  };

  return (
    <div className="schedules-row">
      {renderPrograms()}
    </div>
  );
}

export default ScheduleItem;
