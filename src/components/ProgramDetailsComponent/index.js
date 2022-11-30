import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import "./program-details.css";
import CastComponent from "./CastComponent";
import ErrorComponent from "../ErrorComponent";
import Loader from "../LoadComponent";
import { API_URL } from "./../../constants/index";

const ProgramDetails = () => {
  const location = useLocation();
  const [loading, setLoading] = useState(true);
  const [errored, setErrored] = useState(false);
  const [programInfo, setProgramInfo] = useState();

  useEffect(() => {
    const { state } = location;
    fetch(`${API_URL}/program/${state.programId}`)
      .then((response) => response.json())
      .then((data) => {
        setProgramInfo(data)
        setLoading(false)
      })
      .catch((err) => {
        console.error(err.message);
        setLoading(false);
        setErrored(true);
      });
  }, []);

  if (loading) {
    return <Loader />;
  }
  if (errored || !programInfo) {
    return <ErrorComponent />;
  }

  const {
    channelTitle,
    title,
    meta,
    description,
  } = programInfo;
  const {
    cast,
    creators,
    genres,
    year,
  } = meta;

  return (
    <div className="program-details">
      <div className="program-background" />
      <div className="program-details-container">
        <div className="program-info-container">
          <div>{channelTitle}</div>
          <div className="program-title">{title}</div>
          <div>
            <span className="margin-right">{year}</span>
            {
              genres.map((genre, index) => (
                <span className="margin-right" key={`${genre}_${index}`}>
                {genre}
              </span>
              ))
            }
          </div>
        </div>
        <>
          <div className="program-description">{description}</div>
          <CastComponent
            castList={cast}
            title="Cast"
          />
          <CastComponent
            castList={creators}
            title="Creators"
          />
        </>
      </div>
    </div>
  );
};

export default ProgramDetails;
