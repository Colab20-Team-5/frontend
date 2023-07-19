import HomeNavButton from "@/app/components/HomeNavButton";
import HeaderText from "../../components/HeaderText";
import React from "react";
import PageButton from "@/app/components/PageButton";

const page = () => {
  return (
    <div>
      <HeaderText
        headerText={"Journey to the Gym"}
        secondHeader={"Listen to your Music"}
        paraText={"Integrate your music with your journey."}
      />

      <div className="btn-container">
        <HomeNavButton
          text={"Spotify"}
          url={"https://open.spotify.com/"}
          imgUrl={"/spotify.svg"}
        />
        <HomeNavButton
          text={"Apple Music"}
          url={"https://music.apple.com/us/browse"}
          imgUrl={"/applemusic.svg"}
        />
        <HomeNavButton
          text={"Amazon Music"}
          url={"https://music.amazon.com/"}
          imgUrl={"/amazonmusic.svg"}
        />
        <HomeNavButton
          text={"Youtube Music"}
          url={"https://music.youtube.com/"}
          imgUrl={"/youtubemusic.svg"}
        />
      </div>

      <div className="continue-btn">
        <PageButton text={"Finish"} url={"/"} />
      </div>
    </div>
  );
};

export default page;
