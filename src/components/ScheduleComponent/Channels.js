import React from "react";

import defaultLogo from "./../../public/default_logo.png";

const Channels = (props) => {
  const { channels } = props;

  const captionsElements = channels.map(channel => {
    const { images, id } = channel;
    return (
      <div key={id} className="channel-container">
        <img
          className="channel-logo"
          src={images?.logo}
          onError={({ currentTarget }) => {
            currentTarget.onerror = null;
            currentTarget.src = defaultLogo;
          }}
        />
      </div>
    );
  });

  return <div className="channels">{captionsElements}</div>;
}

export default React.memo(Channels);
