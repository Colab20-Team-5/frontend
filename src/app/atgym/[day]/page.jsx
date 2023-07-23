"use client";
import PageButton from "@/app/components/PageButton";
import { getDataLS, getNextDay } from "@/utils";
import dayjs from "dayjs";
import React from "react";

const page = ({ params }) => {
  const nextDay = getNextDay(getDataLS("week"), params.day);

  return (
    <>
      {nextDay && (
        <div className="exercise">
          <p className="day-header">
            {dayjs(nextDay).format("dddd, DD/MMMM/YYYY") === "Invalid Date"
              ? "Loading..."
              : dayjs(nextDay).format("dddd, DD/MMMM/YYYY")}
          </p>
          <div>
            <p className="muscle-header">Leg Day - Warm Up</p>
            <p className="paragraph">
              A proper warm-up is essential as it helps increase blood flow,
              raise body temperature, and prepare your muscles and joints for
              the upcoming workout, reducing the risk of injury and improving
              overall performance.
            </p>
          </div>
          <div>
            <p className="muscle-header">Let's Warm up</p>
            <p className="exercise-header">Leg Swings (1 min)</p>
            <p className="paragraph exercise-desc">
              Stand next to a wall or support and swing one leg forward and
              backward in a controlled manner. Repeat for 30 seconds on each
              leg.
            </p>
          </div>

          <div className="continue-btn">
            <PageButton
              text={"Warmup Completed"}
              arrow={"/nextarrow.svg"}
              url={"/atgym/workout"}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default page;
