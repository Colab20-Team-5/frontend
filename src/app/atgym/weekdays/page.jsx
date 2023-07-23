import HeaderText from "@/app/components/HeaderText";
import PageButton from "@/app/components/PageButton";
import React from "react";

const page = () => {
  return (
    <div>
      <HeaderText
        headerText={"At the Gym"}
        paraText={"Choose the day of your week to workout"}
      />
      <p className="paragraph">Monday, July 24th, 2023</p>
      <div className="btn-container">
        <PageButton text={"Monday"} url={"/atgym/warmup"} />
        <PageButton text={"Tuesday"} url={"/atgym/weekday"} />
        <PageButton text={"Thursday"} url={"/atgym/weekday"} />
        <PageButton text={"Friday"} url={"/atgym/weekday"} />
      </div>
    </div>
  );
};

export default page;
