import Image from "next/image";
import React from "react";

const HeaderImg = ({ headerImg }) => {
  return (
    <div className="header-img">
      <Image
        src={headerImg}
        alt="user avatar logo"
        fill={true}
        className="imgstyle"
      />
    </div>
  );
};

export default HeaderImg;
