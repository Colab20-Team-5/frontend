"use client";
import { getDataLS } from "@/utils";
import HeaderImg from "../components/HeaderImg";
import PageButton from "../components/PageButton";

export default function AtGym({ children }) {
  return (
    <div>
      <HeaderImg headerImg={"/atgym.png"} />
      {getDataLS("week") ? (
        <div className="container">{children}</div>
      ) : (
        <div className="noplan-container">
          <div className="paragraph">
            You haven't created any workout plan, Please create a workout plan
            in Before Gym section.
          </div>
          <div className="continue-btn">
            <PageButton url={"/beforegym"} text={"Create Workout Plan"} />
          </div>
        </div>
      )}
    </div>
  );
}
