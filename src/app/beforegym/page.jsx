import React from "react";
import PageButton from "../components/PageButton";
import HeaderText from "../components/HeaderText";
import { getServerSession } from "next-auth";
import { options } from "../api/auth/[...nextauth]/options";

const page = async () => {
  const session = await getServerSession(options);

  return (
    <div>
      <HeaderText
        headerText={"Journey to the Gym"}
        secondHeader={""}
        paraText={`Congrats ${session?.user?.name} on taking the initiative to plan your journey to the gym. Let’s get started!`}
      />
      <div className="btn-container">
        <PageButton url={"/beforegym/workoutplan"} text={"Plan My Workout"} />
        <PageButton url={"/beforegym/maptogym"} text={"Map to the Gym"} />
        <PageButton
          url={"/beforegym/guidedaudio"}
          text={"Guided Audio Workout"}
        />
        <PageButton url={"/beforegym/listentomusic"} text={"Listen to Music"} />
      </div>
    </div>
  );
};

export default page;
