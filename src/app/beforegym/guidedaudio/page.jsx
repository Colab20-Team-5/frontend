import PageButton from "@/app/components/PageButton";
import HeaderText from "../../components/HeaderText";
import React from "react";
import Image from "next/image";

const page = () => {
  return (
    <div className="audio">
      <HeaderText
        headerText={"Journey to the Gym"}
        secondHeader={"Guided Audio Workout"}
        paraText = {
          "Get motivated and listen to expertly guided instruction on your workout on your way to the gym."
        }
      />
      <div className="audio-header">
        <p>5 July 2023</p>
        <h3>Pre-Workout Guide</h3>
        <p>Motivational Workout</p>
      </div>
      <div className="audio-player">
        <div className="audio-player--icons">
          <Image src="/play-1001-svgrepo-com.svg" width={130} height={130} />
        </div>
        <audio controls>
          <source src="/audio.mp3" type="audio/mp3" />
        </audio>
      </div>

      <div className="continue-btn">
        <PageButton
          text={"Listen to Music"}
          url={"/beforegym/listentomusic"}
          arrow={"/nextarrow.svg"}
        />
      </div>
    </div>
  );
};

export default page;
