"use client";
import HeaderText from "@/app/components/HeaderText";
import PageButton from "@/app/components/PageButton";
import { getDataLS } from "@/utils";
import React from "react";

const page = () => {
  const workoutDays = JSON.parse(getDataLS("workoutPlan")).days;

  return (
    <div>
      <HeaderText
        headerText={"At the Gym"}
        paraText={"Choose the day of your week to workout"}
      />
      <p className="paragraph">Monday, July 24th, 2023</p>
      <div className="btn-container">
        {workoutDays?.map((day) => {
          return <PageButton text={day} url={`/atgym/${day}`} />;
        })}
        {/* <PageButton text={"Tuesday"} url={"/atgym/weekday"} />
        <PageButton text={"Thursday"} url={"/atgym/weekday"} />
        <PageButton text={"Friday"} url={"/atgym/weekday"} /> */}
      </div>
    </div>
  );
};

export default page;
