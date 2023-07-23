"use client";
import PageButton from "@/app/components/PageButton";
import React, { useState } from "react";

const page = () => {
  const [isWorkoutDone, setIsWorkoutDone] = useState(false);

  return (
    <>
      {isWorkoutDone ? (
        <div>
          <p className="workout-done">
            Congratulations, You have successfully completed your workout.
          </p>
          <div className="continue-btn" style={{ marginTop: "20px" }}>
            <PageButton url={"/"} text={"Well Done!"} color={"#22c55e"} />
          </div>
        </div>
      ) : (
        <div className="exercise">
          <p className="day-header">Monday, July 24th, 2023</p>
          <div>
            <p className="muscle-header">Leg Day - Workout</p>
            <p className="paragraph">
              Get ready to power up your legs and unleash your inner strength
              with our guided leg day workout! This session will challenge your
              muscles and push you towards new levels of fitness, helping you
              build strong and sculpted legs.
            </p>
          </div>
          <div>
            <p className="muscle-header">Let's Workout</p>
            <p className="exercise-header">Barbell Squats (1 min)</p>
            <p className="paragraph exercise-desc">
              Stand with feet shoulder-width apart, holding a barbell across
              your upper back. Bend your knees and lower your body, keeping your
              chest up and back straight, until your thighs are parallel to the
              ground. Push through your heels to return to the starting
              position.
            </p>
          </div>

          <div
            className="continue-btn"
            onClick={() => {
              setIsWorkoutDone(true);
            }}
          >
            <PageButton
              text={"Workout Completed"}
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
