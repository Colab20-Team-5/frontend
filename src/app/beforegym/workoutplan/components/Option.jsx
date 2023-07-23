"use client";
import React, { useState } from "react";

const Option = ({ option, workoutPlan, setWorkoutPlan, type }) => {
  const [isSelected, setIsSelected] = useState(false);
  return (
    <div
      className={`option ${isSelected ? "option-selected" : ""}`}
      onClick={() => {
        setIsSelected(!isSelected);

        if (!workoutPlan[type].includes(option)) {
          setWorkoutPlan({
            ...workoutPlan,
            [type]: [...workoutPlan[type], option],
          });
        } else {
          const filterData = workoutPlan[type].filter(
            (data) => data !== option
          );
          setWorkoutPlan({
            ...workoutPlan,
            [type]: filterData,
          });
        }
      }}
    >
      {option}
    </div>
  );
};

export default Option;
