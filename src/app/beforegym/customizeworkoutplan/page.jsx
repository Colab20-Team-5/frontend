import React from "react";
import HeaderText from "../../components/HeaderText";
import PageButton from "@/app/components/PageButton";

const page = () => {
  return (
    <div>
      <HeaderText
        headerText={"Journey to the Gym"}
        secondHeader={"Plan My Workout"}
        paraText={"Customize your 45 minute workouts. "}
      />

      <div className="customize-plan-container">
        <div className="day">
          <p>Monday</p>
          <p>+</p>
        </div>
        <div className="day">
          <p>Tuesday</p>
          <p>+</p>
        </div>
        <div className="day">
          <p>Thursday</p>
          <p>+</p>
        </div>
        <div className="day">
          <p>Friday</p>
          <p>+</p>
        </div>
      </div>

      <div className="continue-btn">
        <PageButton
          text={"Map to Gym"}
          url={"/beforegym/maptogym"}
          arrow={"/nextarrow.svg"}
        />
      </div>
    </div>
  );
};

export default page;
