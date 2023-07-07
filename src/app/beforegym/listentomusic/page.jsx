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
        <HomeNavButton text={"Spotify"} url={"/"} imgUrl={"/spotify.svg"} />
        <HomeNavButton
          text={"Apple Music"}
          url={"/"}
          imgUrl={"/applemusic.svg"}
        />
        <HomeNavButton
          text={"Amazon Music"}
          url={"/"}
          imgUrl={"/amazonmusic.svg"}
        />
        <HomeNavButton
          text={"Youtube Music"}
          url={"/"}
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
