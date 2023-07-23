"use client";
import React, { useEffect, useState } from "react";
import HeaderText from "../../components/HeaderText";
import PageButton from "@/app/components/PageButton";
import { getDataLS } from "@/utils";
import { useRouter } from "next/navigation";
import SaveButton from "@/app/components/SaveButton";
import { toast } from "react-hot-toast";

const page = () => {
  const [clickedDays, setClickedDays] = useState([]);
  const [text, setText] = useState(JSON.parse(getDataLS("daysPlan")));

  const handleClick = (dayId) => {
    if (clickedDays.includes(dayId)) {
      const newClickedDays = clickedDays.filter((id) => id !== dayId);
      setClickedDays(newClickedDays);
      return;
    }

    setClickedDays([...clickedDays, dayId]);
  };

  const handleChange = (e, day) => {
    const updatedText = {
      ...text,
      [day]: e.target.value,
    };
    setText(updatedText);
  };

  const [isDaySaved, setIsDaySaved] = useState({});
  const handleSubmit = (e, day) => {
    e.preventDefault();
    setIsDaySaved({ ...isDaySaved, [day]: true });
  };

  const workoutData = JSON.parse(getDataLS("workoutPlan"));
  const router = useRouter();

  useEffect(() => {
    if (!workoutData) {
      router.push("/beforegym/workoutplan");
    }
  }, [workoutData]);
  console.log(isDaySaved);

  return (
    <>
      {workoutData && (
        <div className="main-container">
          <HeaderText
            headerText={"Journey to the Gym"}
            secondHeader={"Plan My Workout"}
            paraText={`Customize your ${workoutData?.time[0]} workout.`}
          />

          <div className="customize-plan-container">
            {workoutData?.days.map((day, id) => {
              const isClicked = clickedDays.includes(id);
              return (
                <div className="day-container" key={id}>
                  <div className="day" key={id} onClick={() => handleClick(id)}>
                    <p>{day}</p>
                    <button type="submit">{isClicked ? "-" : "+"}</button>
                  </div>
                  {!isDaySaved[day] && isClicked && (
                    <form
                      onSubmit={(e) => handleSubmit(e, day)}
                      style={{ position: "relative" }}
                    >
                      <textarea
                        name=""
                        id=""
                        cols="30"
                        rows="6"
                        onChange={(e) => handleChange(e, day)}
                        value={text[day] || ""}
                      />
                      <button className="btn-enter">Enter</button>
                    </form>
                  )}
                  {isDaySaved[day] && (
                    <div className="day-data">{text[day]}</div>
                  )}
                </div>
              );
            })}
          </div>

          <div
            className="continue-btn"
            onClick={() => {
              if (Object.keys(isDaySaved).length === workoutData.days.length) {
                localStorage.setItem("daysPlan", JSON.stringify(text));
                router.push("/beforegym/maptogym");
              } else {
                toast.error("Please create your workout plan.");
              }
            }}
          >
            {/* <PageButton
              text={"Map to Gym"}
              url={"/beforegym/maptogym"}
              arrow={"/nextarrow.svg"}
            /> */}
            <SaveButton text={"Map to Gym"} />
          </div>
        </div>
      )}
    </>
  );
};

export default page;
