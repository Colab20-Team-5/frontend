"use client";
import React, { useState } from "react";
import HeaderText from "@/app/components/HeaderText";
import PageButton from "@/app/components/PageButton";
import { weekDays } from "@/data";
import Image from "next/image";

const Accordion = () => {
  const [clickedDays, setClickedDays] = useState([]);
  const [text, setText] = useState("");

  const handleClick = (dayId) => {
    if (clickedDays.includes(dayId)) {
      const newClickedDays = clickedDays.filter((id) => id !== dayId);
      setClickedDays(newClickedDays);
      return;
    }

    setClickedDays([...clickedDays, dayId]);
  };

  const handleChange = (e, dayId) => {
    const updatedText = {
      ...text,
      [dayId]: e.target.value,
    };
    setText(updatedText);
  };

  const handleSubmit = (e, dayId) => {
    e.preventDefault();
  };

  const handleKeyDown = (e, dayId) => {
    if (e.keyCode === 13) {
      e.preventDefault();
      const updatedText = {
        ...text,
        [dayId]: (text[dayId] || "") + "\n",
      };
      setText(updatedText);
    }
  };

  return (
    <div className="main-container">
  
      <div className="customize-plan-container">
        {weekDays.map(({ id, day }) => {
          const isClicked = clickedDays.includes(id);
          return (
            <div className="day-container">
              <div className="day" key={id} onClick={() => handleClick(id)}>
                <p>{day}</p>
                <button type="submit">
                  {isClicked ? ( <Image
                    src="/previo-svgrepo-com.svg"
                    width={30}
                    height={30}
                    className="icon icon--1"
                />) : ( <Image
                    src="/previous-svgrepo-com.svg"
                    width={30}
                    height={30}
                    className="icon icon--1"
                />)}
          </button>
              </div>
              {isClicked && (
               <h1>hello</h1>
              )}
            </div>
          );
        })}
      </div>

    </div>
  );
};

export default Accordion;
