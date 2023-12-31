"use client";
import React, { useRef, useState } from "react";
import PageButton from "@/app/components/PageButton";
import HeaderText from "../../components/HeaderText";
import Image from "next/image";
import { usePathname } from "next/navigation";
import dayjs from "dayjs";

const page = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currTime, setCurrTime] = useState(0);
  const audioRef = useRef(null);
  const pathname = usePathname();

  const handleClick = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleTimeUpdate = () => {
    const { currentTime, duration } = audioRef.current;
    setCurrTime(currentTime);
  };

  const handleProgressChange = (e) => {
    const { duration } = audioRef.current;
    const newTime = (e.target.value / 100) * duration;
    setCurrTime(newTime);
    audioRef.current.currentTime = newTime;
  };
  return (
    <div className="audio">
      <HeaderText
        headerText={"Journey to the Gym"}
        secondHeader={"Guided Audio Workout"}
        paraText={
          "Get motivated and listen to expertly guided instruction on your workout on your way to the gym."
        }
      />
      <div className="audio-header">
        <p>{dayjs().format("dddd, DD/MMMM/YYYY")}</p>
        <h3>Pre-Workout Guide</h3>
        <p>Motivational Workout</p>
      </div>
      <div className="audio-player">
        <div className="audio-player__icons">
          <Image
            src="/previous-svgrepo-com.svg"
            width={30}
            height={30}
            className="icon icon--1"
          />
          <div className="play-pause">
            {isPlaying ? (
              <Image
                src="/pause-1010-svgrepo-com.svg"
                width={40}
                height={40}
                className="icon icon--2"
                onClick={handleClick}
              />
            ) : (
              <Image
                src="/play-1001-svgrepo-com.svg"
                width={40}
                height={40}
                className="icon icon--3"
                onClick={handleClick}
              />
            )}
          </div>
          <Image
            src="/next-svgrepo-com.svg"
            width={30}
            height={30}
            className="icon icon--4"
          />
          <input
            type="range"
            name="progress time"
            id="progress"
            className="icon icon--progress"
            min={0}
            max={100}
            value={(currTime / audioRef.current?.duration) * 100 || 0}
            onChange={handleProgressChange}
          />
        </div>
        <audio controls ref={audioRef} onTimeUpdate={handleTimeUpdate}>
          <source src="/audio.mp3" type="audio/mp3" />
        </audio>
      </div>

      <div
        className="continue-btn"
        style={{ marginTop: pathname === "/beforegym/guidedaudio" && "40px" }}
      >
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
