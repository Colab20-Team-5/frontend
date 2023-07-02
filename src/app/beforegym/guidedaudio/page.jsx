import Image from "next/image";
import React from "react";

const page = () => {
  return <div className="audio">
    <div className="audio__header">
      <Image
        src="/back-svgrepo-com.svg"
        alt="Back arrow"
        width={40}
        height={40}
      />
      <h3>Guided Audio Workout</h3>
      <Image
        src="/play-1001-svgrepo-com.svg"
        alt="Play arrow big"
        width={80}
        height={80}
      />
    </div>
    <div className="audio__controls">
      <audio controls>
      <source src="h" type="audio/mpeg" />

      </audio>
      <Image
        src="/previous-svgrepo-com.svg"
        alt="Prev svg"
        width={40}
        height={40}
      />
       <Image
        src="/play-1001-svgrepo-com.svg"
        alt="Prev svg"
        width={40}
        height={40}
      />
      <Image
        src="/pause-1010-svgrepo-com.svg"
        alt="Prev svg"
        width={40}
        height={40}
      />
       <Image
        src="/next-svgrepo-com.svg"
        alt="Prev svg"
        width={40}
        height={40}
      />
    </div>
    <input type="range" />
  </div>;
};

export default page;
