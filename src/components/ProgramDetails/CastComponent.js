import React from "react";

const CastComponent = (props) => {
  const { castList, title } = props;
  const commaSeparator = ({ index, value }) => (
    ` ${(index ? ", " : "")} ${value}`
  );

  return (
    <div className="cast-component">
      <div className="cast-component-title">{title}: </div>
      {
        castList.map((cast, index) => (
          <div key={`${cast.name}_${index}`}>
            {commaSeparator({ index, value: cast.name })}
          </div>
        ))
      }
    </div>
  );
}

export default CastComponent;
