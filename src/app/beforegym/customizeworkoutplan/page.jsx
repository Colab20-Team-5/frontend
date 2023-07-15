'use client'
import React, { useState } from "react";
import HeaderText from "../../components/HeaderText";
import PageButton from "@/app/components/PageButton";
import { weekDays } from "@/data";

const page = () => {

  const [clickedDays, setClickedDays] = useState([]);
  const [text, setText] = useState("");


  const handleClick = (dayId) => {
    if (clickedDays.includes(dayId)) {
      const newClickedDays = clickedDays.filter((id) => id !== dayId);
      setClickedDays(newClickedDays);
      return;
    }

    setClickedDays([...clickedDays, dayId]);
  }

  const handleChange = (e, dayId) => {
    const updatedText = {
      ...text,
      [dayId]: e.target.value
    }
    setText(updatedText);
  }

  const handleSubmit = (e, dayId) => {
    e.preventDefault();

  }

  const handleKeyDown = (e, dayId) => {
    if (e.keyCode === 13) {
      e.preventDefault();
      const updatedText = {
        ...text,
        [dayId]: (text[dayId] || "") + "\n"
      }
      setText(updatedText);
    }
  }
  



  return (
    <div className="main-container">
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
                { ( isClicked && 
                  <form onSubmit = { (e) => handleSubmit(e, id) }>
                  <textarea name=""
                   id="" cols="36" 
                   rows="6" 
                   onChange = { (e) => handleChange(e, id) }
                  value = { text[id] || "" }
                  onKeyDown={(e) => handleKeyDown(e, id)}
                    />
                  </form>
                )}
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
