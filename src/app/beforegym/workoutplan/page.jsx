import React from "react";
import HeaderText from "../../components/HeaderText";
import Question from "./components/Question";
import { questionsData } from "../../../data/index";
import PageButton from "@/app/components/PageButton";

const page = () => {
  return (
    <div>
      <HeaderText
        headerText={"Journey to the Gym"}
        secondHeader={"Plan My Workout"}
        paraText={
          "Answer these questions to customize your workout goals for this week."
        }
      />
      <div className="question-container">
        {questionsData.map(({ text, options }, idx) => {
          return (
            <Question
              questionText={`${idx + 1}. ${text}`}
              options={options}
              key={idx}
            />
          );
        })}
      </div>

      <div className="continue-btn">
        <PageButton
          text={"Continue"}
          url={"/beforegym/customizeworkoutplan"}
          arrow={"/nextarrow.svg"}
        />
      </div>
    </div>
  );
};

export default page;
