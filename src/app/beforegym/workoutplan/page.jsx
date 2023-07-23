"use client";
import React, { useState } from "react";
import HeaderText from "../../components/HeaderText";
import Question from "./components/Question";
import { questionsData } from "../../../data/index";
import SaveButton from "@/app/components/SaveButton";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";
import { getDataLS, nextWeek } from "@/utils";
import PageButton from "@/app/components/PageButton";
import dayjs from "dayjs";

const page = () => {
  const router = useRouter();
  const [workoutPlan, setWorkoutPlan] = useState({
    days: [],
    time: [],
    muscles: [],
  });

  const storedWorkouts = getDataLS("workoutPlan");

  return (
    <div className="workout-plan">
      {storedWorkouts ? (
        <div style={{ marginTop: "12rem" }}>
          <p className="paragraph">
            You have already created workout plan for this week.
            <br />
            {getDataLS("week")} -{" "}
            {dayjs(getDataLS("nextweek")).format("dddd, DD/MMMM/YYYY")}
          </p>
          <div className="continue-btn">
            <PageButton
              url={"/beforegym/customizeworkoutplan"}
              text={"Continue"}
              arrow={"/nextarrow.svg"}
            />
          </div>
        </div>
      ) : (
        <>
          <HeaderText
            headerText={"Journey to the Gym"}
            secondHeader={"Plan My Workout"}
            paraText={
              "Answer these questions to customize your workout goals for this week."
            }
          />
          <div className="question-container">
            {questionsData.map(({ text, options, type }, idx) => {
              return (
                <Question
                  questionText={`${idx + 1}. ${text}`}
                  options={options}
                  setWorkoutPlan={setWorkoutPlan}
                  workoutPlan={workoutPlan}
                  type={type}
                  key={idx}
                />
              );
            })}
          </div>

          <div
            className="continue-btn"
            onClick={() => {
              if (
                workoutPlan.days.length &&
                workoutPlan.muscles.length &&
                workoutPlan.time.length
              ) {
                localStorage.setItem(
                  "workoutPlan",
                  JSON.stringify(workoutPlan)
                );
                localStorage.setItem(
                  "week",
                  dayjs().format("dddd, DD/MMMM/YYYY")
                );
                localStorage.setItem("nextweek", nextWeek());
                router.push("/beforegym/customizeworkoutplan");
              } else {
                toast.error("Please select some options.");
              }
            }}
          >
            <SaveButton text={"Continue"} />
          </div>
        </>
      )}
    </div>
  );
};

export default page;
