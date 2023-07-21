import React from "react";
import PageButton from "../components/PageButton";
import HeaderText from "../components/HeaderText";
import Accordion from "./accordion";
import Image from "next/image";
import Link from "next/link";

const page = () => {
  return (
    <div>
      <HeaderText
        headerText={"At the Gym"}
        secondHeader={"You have made it to the gym!"}
        paraText={
          "Choose your workout to begin"
        }
      />
      <Accordion
        heading={"Monday, June 26th, 2023"}
        contents={
          <>
          <Link href="/atgym/monday">
              <p>
              Monday, June 26th, 2023
              </p>
          </Link>
          <Link href="/atgym/monday">
            <p>
            Monday, July 3rd, 2023
            </p>
          </Link>
          <Link href="/atgym/monday">
              <p>
              Monday, July 10th, 2023
              </p>
          </Link>
          <Link href="/atgym/monday">
            <p>
              Monday, July 17th, 2023
            </p>
          </Link>
          </>
        }
        icons={<Image src="/down-arrow-backup-2-svgrepo-com.svg" width={20} height={20} />}
       />
       <div className="continue-btn">
        <PageButton
          text={"Map to Gym"}
          url={"/atgym/dayofweek"}
          arrow={"/nextarrow.svg"}
        />
      </div>
    </div>
  );
};

export default page;
