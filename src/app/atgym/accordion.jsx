"use client";
import React, { useState } from "react";
import HeaderText from "@/app/components/HeaderText";
import PageButton from "@/app/components/PageButton";
import { weekDays } from "@/data";
import Image from "next/image";

const Accordion = () => {
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
                <p>Monday June 26th 2023</p>
                <button type="submit">
                  <Image
                    src="/down-arrow-backup-2-svgrepo-com.svg"
                    width={30}
                    height={30}
                    className="icon icon--1"
                />
          </button>
              </div>
              {isClicked && (
               <h1>hello</h1>
              )}
            </div>
     
      </div>

    </div>
  );
};

export default Accordion;
