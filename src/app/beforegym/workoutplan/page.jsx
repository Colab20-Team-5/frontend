import React from "react";
import HeaderText from "../../components/HeaderText";

const page = () => {
  return (
    <div>
      <HeaderText
        headerText={"Journey to the Gym"}
        secondHeader={"Plan My Workout"}
        paraText={
          "Answer these questions to customize your workout goals for this week."
        }
      />
    </div>
  );
};

export default page;
