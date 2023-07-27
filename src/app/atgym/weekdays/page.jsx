"use client";
import HeaderText from "@/app/components/HeaderText";
import PageButton from "@/app/components/PageButton";
import { getDataLS } from "@/utils";
import React from "react";

const page = () => {
  const workoutDays = JSON.parse(getDataLS("workoutPlan")).days;
  const week = getDataLS("week");

  return (
    <div>
      <HeaderText
        headerText={"At the Gym"}
        paraText={"Choose the day of your week to workout"}
      />
      <p className="paragraph">{week}</p>
      <div className="btn-container">
        {workoutDays?.map((day) => {
          return <PageButton text={day} url={`/atgym/warmup/${day}`} />;
        })}
        {/* <PageButton text={"Tuesday"} url={"/atgym/weekday"} />
        <PageButton text={"Thursday"} url={"/atgym/weekday"} />
        <PageButton text={"Friday"} url={"/atgym/weekday"} /> */}
      </div>
    </div>
  );
};

export default page;
