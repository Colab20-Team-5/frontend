import React from "react";

const HeaderText = ({ headerText, paraText }) => {
  return (
    <div className="header-text">
      <h1 className="heading-primary">{headerText}</h1>
      <p className="paragraph">{paraText}</p>
    </div>
  );
};

export default HeaderText;
