import Image from "next/image";
import React from "react";

const page = () => {
  return <div>
    <div className="audio-title">
      <Image
        src="/back-svgrepo-com.svg"
        alt="Back arrow"
        width={40}
        height={40}
      />
      <h3>Guided Audio Workout</h3>
    </div>
    <Image 
      src="/previous-svgrepo-com.svg"
      alt="Prev svg"
      width={40}
      height={40}
    />
     <Image 
      src="/previous-svgrepo-com.svg"
      alt="Prev svg"
      width={40}
      height={40}
    />
     <Image 
      src="/previous-svgrepo-com.svg"
      alt="Prev svg"
      width={40}
      height={40}
    />
  </div>;
};

export default page;
