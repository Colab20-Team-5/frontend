'use client'
import React, { useState } from "react";
import HeaderText from "../../components/HeaderText";
import PageButton from "@/app/components/PageButton";
import { weekDays } from "@/data";

const page = () => {

  const [clickedDays, setClickedDays] = useState([]);

  const handleClick = (dayId) => {
    if (clickedDays.includes(dayId)) {
      const newClickedDays = clickedDays.filter((id) => id !== dayId);
      setClickedDays(newClickedDays);
      return;
    }

    setClickedDays([...clickedDays, dayId]);
  }

  return (
    <div>
      <HeaderText
        headerText={"Journey to the Gym"}
        secondHeader={"Plan My Workout"}
        paraText={"Customize your 45 minute workouts. "}
      />

      <div className="customize-plan-container">
        {
          weekDays.map(({ id, day }) => {
            const isClicked = clickedDays.includes(id);
            return (
              <div className="day-container">
                <div className="day" key={id}>
                  <p>{day}</p>
                  <button type="submit" onClick = { () => handleClick(id) }>
                    {isClicked ? "-" : "+"}
                  </button>
                </div>
                { ( isClicked && <textarea name="" id="" cols="30" rows="10"></textarea>)}
              </div>
            );
          })
        }
       
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
