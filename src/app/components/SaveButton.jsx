import Image from "next/image";
import React from "react";

const SaveButton = ({ text }) => {
  return (
    <div
      className="btn btn-save"
      style={{
        width: "fit-content",
      }}
    >
      <button
        className="btn btn--nav"
        style={{
          justifyContent: "space-between",
          width: "fit-content",
        }}
      >
        {text}
        <Image src="/nextarrow.svg" width={20} height={20} alt="" />
      </button>
    </div>
  );
};

export default SaveButton;
