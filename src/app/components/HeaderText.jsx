import React from "react";

const HeaderText = ({ headerText, secondHeader, paraText }) => {
  return (
    <div>
      <h1 className="heading-primary">{headerText}</h1>
      {secondHeader && <h2 className="heading-secondary">{secondHeader}</h2>}
      <p className="paragraph">{paraText}</p>
    </div>
  );
};

export default HeaderText;
