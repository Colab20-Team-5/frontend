"use client";
import React, { useState } from "react";
import HeaderText from "@/app/components/HeaderText";
import PageButton from "@/app/components/PageButton";
import { weekDays } from "@/data";
import Image from "next/image";

const Accordion = ({ heading, contents, icons}) => {
  const [clickedDays, setClickedDays] = useState([]);
  const [text, setText] = useState("");
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <div className="main-container">
  
      <div className="customize-plan-container">
        
            <div className="day-container">
              <div className="day" onClick={() => handleClick()}>
                <p>{heading}</p>
                <button type="submit">
                  { icons }
                </button>
              </div>
              {isClicked && (
               <div> {contents} </div>
              )}
            </div>
     
      </div>

    </div>
  );
};

export default Accordion;
