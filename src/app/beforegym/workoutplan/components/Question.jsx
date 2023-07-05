import React from "react";
import Option from "./Option";

const Question = ({ questionText, options }) => {
  return (
    <div className="paragraph question">
      <p>{questionText}</p>
      <div className="options-container">
        {options.map((option, idx) => {
          return <Option key={idx} option={option} />;
        })}
      </div>
    </div>
  );
};

export default Question;
