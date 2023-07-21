import React from "react";
import PageButton from "../components/PageButton";
import HeaderText from "../components/HeaderText";

const page = () => {
  return (
    <div>
      <HeaderText
        headerText={"At the Gym"}
        secondHeader={"You have made it to the gym!"}
        paraText={
          "Choose your workout to begin"
        }
      />
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
