import Image from "next/image";
import Link from "next/link";
import React from "react";

const HomeNavButton = ({ text, url, imgUrl }) => {
  return (
    <Link
      href={url}
      className="btn btn--lg"
      style={{
        display: imgUrl && "flex",
        gap: imgUrl && "20px",
      }}
    >
      <div className={`${imgUrl && "img-btn-container"}`}>
        {imgUrl && <Image src={imgUrl} alt="" width={30} height={30} />}
        <div style={{ width: imgUrl && "fit-content" }}>
          <button className="btn  btn--xl">{text}</button>
        </div>
      </div>
    </Link>
  );
};

export default HomeNavButton;
