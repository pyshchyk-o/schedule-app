import React, { useState, useEffect } from "react";
import moment from "moment";

import "./schedule.css";
import Channels from "./Channels";
import ScheduleList from "./ScheduleList";
import {
  API_URL,
  MIN_PER_HOUR,
  SCALE,
} from "./../../constants/index";
import Loader from "../Load";
import ErrorComponent from "../Error";

let isTimerStopped;
let timer;

const Schedule = () => {
  const [programs, setPrograms] = useState([]);
  const [currentTime, setCurrentTime] = useState(moment().seconds(0).format());
  const [loading, setLoading] = useState(true);
  const [errored, setErrored] = useState(false);

  useEffect(() => {
    fetch(`${API_URL}/epg`)
      .then((response) => response.json())
      .then((data) => {
        setPrograms(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err.message);
        setLoading(false);
        setErrored(true);
      });
  }, []);

  useEffect(() => {
    if (!loading) {
      scrollToCurrentSchedule();
      isTimerStopped = false;
      timer = setTimer();

      return () => {
        isTimerStopped = true;
        clearTimeout(timer);
      }
    }
  }, [loading])

  const setTimer = () => (
    setTimeout(() => {
      if (isTimerStopped) return;
      setCurrentTime(moment().seconds(0).format())
      timer = setTimer();
    }, 1000)
  );

  const getCurrentSchedule = () => {
    const timeNow = moment(currentTime);
    return (timeNow.hours() * MIN_PER_HOUR + timeNow.minutes()) * SCALE;
  }

  const scrollToCurrentSchedule = () => {
    const currentSchedule = getCurrentSchedule();
    document.getElementById("scrollable-area")
      .scrollLeft = currentSchedule - window.innerWidth / 2;
  }

  if (loading) {
    return <Loader />;
  }

  if (errored) {
    return <ErrorComponent />;
  }

  const currentSchedule = getCurrentSchedule();
  const channels = programs?.channels || [];
  const currentDate = moment().format("ddd DD.MM.")

  return (
    <>
      <div className="schedule">
        <div className="schedule-date">
          <div>{currentDate}</div>
        </div>
        <div id="scrollable-area" className="scrollable-area">
          <Channels channels={channels}/>
          <ScheduleList
            channels={channels}
            currentSchedule={currentSchedule}
            currentTime={currentTime}
          />
        </div>
        {
          channels?.length ? (
            <button
              className="now-button"
              onClick={scrollToCurrentSchedule}
            >
              NOW
            </button>
          ) : null
        }
      </div>
    </>
  );
}

export default Schedule;
