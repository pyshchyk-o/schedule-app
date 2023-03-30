import React from "react";
import { ProgressSpinner } from "primereact/progressspinner";

import "./load-component.css";

const LoadComponent = () => (
  <div className="loader-container">
    <ProgressSpinner/>
  </div>
);

export default LoadComponent;
