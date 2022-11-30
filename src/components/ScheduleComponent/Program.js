import React from "react";
import moment from "moment";
import { useNavigate } from "react-router-dom";
import { MIN_PER_HOUR, SCALE } from "./../../constants/index";

const Program = (props) => {
  const { isActive, program } = props;
  const navigate = useNavigate();

  const getProgramStyles = () => {
    const { program } = props;
    const startTime = moment(program.start);
    const endTime = moment(program.end);
    // Divide end and start time difference by 1000 milliseconds
    const durationInSeconds = endTime.diff(startTime) / 1000;

    const width = Math.floor(durationInSeconds * SCALE / MIN_PER_HOUR);
    const left = (startTime.hours() * MIN_PER_HOUR + startTime.minutes()) * SCALE;

    return { left, width };
  }

  const programDimensions = getProgramStyles();
  const startTime = moment(program.start).format("HH:mm");
  const endTime = moment(program.end).format("HH:mm");
  const programTime = `${startTime} - ${endTime}`;

  return (
    <div
      className={`program-container ${isActive ? "program-active": ""}`}
      style={programDimensions}
      onClick={() => navigate(`/program-details/${program.id}`, {
        state: { programId: program.id },
      })}
    >
      <div className="program-info">
        <div className="program-name">{program.title}</div>
        <div className="program-time">{programTime}</div>
      </div>
    </div>
  );
}

export default Program;
