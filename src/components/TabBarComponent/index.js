import React from "react";
import { Dock } from "primereact/dock";

import "./tab-bar.css";

const width = "100%"
const items = [
  {
    label: "Home",
    icon: () => <i alt="Home" className="pi pi-home" width={width} />
  },
  {
    label: "Stream",
    icon: () => <i alt="stream" className="pi pi-video" width={width} />
  },
  {
    label: "Schedule",
    icon: () => <i alt="schedule" className="pi pi-calendar" width={width} />
  },
  {
    label: "History",
    icon: () => <i alt="history" className="pi pi-history" width={width} />
  }
];

const Index = () => {
  return (
    <div className="tab-bar">
      <Dock model={items} />
    </div>
  );
}

export default Index;
