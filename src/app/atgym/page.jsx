import React from "react";
import PageButton from "../components/PageButton";
import HeaderText from "../components/HeaderText";
import Accordion from "./accordion";
import Image from "next/image";

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
      <Accordion
        heading={"Monday"}
        contents={"hello"}
        icons={<Image src="/nextarrow.svg" width={20} height={20} />}
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
