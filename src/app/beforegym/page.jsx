import React from "react";
import Header from "../components/Header";
import PageButton from "../components/PageButton";

const page = () => {
  return (
    <div>
      <Header
        headerText={"Before the Gym"}
        paraText={"Let’s get ready to go to the gym"}
      />

      <div className="h-[70vh] flex items-center justify-center testing">
        <h1>Before heading</h1>
        <ul>
          <li>Hallowe</li>
          <li>Hallowe</li>
          <li>Hallowe</li>
        </ul>
        <div className="w-full">
          <PageButton url={"/beforegym/workoutplan"} text={"Plan My Workout"} />
          <PageButton url={"/beforegym/maptogym"} text={"Map to the Gym"} />
          <PageButton
            url={"/beforegym/guidedaudio"}
            text={"Guided Audio Workout"}
          />
          <PageButton
            url={"/beforegym/listentomusic"}
            text={"Listen to Music"}
          />
        </div>
      </div>
    </div>
  );
};

export default page;
