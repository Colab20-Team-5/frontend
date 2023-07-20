"use client";
import React, { useState } from "react";

const Option = ({ option }) => {
  const [isSelected, setIsSelected] = useState(false);
  return (
    <div
      className={`option ${isSelected ? "option-selected" : ""}`}
      onClick={() => {
        setIsSelected(!isSelected);
      }}
    >
      {option}
    </div>
  );
};

export default Option;
