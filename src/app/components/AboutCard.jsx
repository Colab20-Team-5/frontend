import React from "react";
import Image from "next/image";
import Link from "next/link";
import { cardDetails } from "@/data";

const AboutCard = () => {
  return (
    <>
      <section className="about">
        <h2 className="about__title">ABOUT US</h2>
        <p className="about__text">
          Your personalized fitness journey, empowering you to achieve your
          fitness goals with a tailor-made workout plan and seamless tracking on
          the go.
        </p>
      </section>
      <section className="section-card">
        {cardDetails.map(({ im, title, description }, idx) => {
          return (
            <>
              <div className="card" key={idx}>
                <Image src={im} alt="home nav icon" width={100} height={100} />

                <div className="card__text-box">
                  <h3>{title}</h3>
                  <p>{description}</p>
                </div>
                {idx === 1 ? (
                  <Link href={"/atgym"} className="btn btn--sm">
                    Learn more
                  </Link>
                ) : (
                  <Link href={"/beforegym"} className="btn btn--sm">
                    Learn more
                  </Link>
                )}
              </div>
            </>
          );
        })}
      </section>
    </>
  );
};

export default AboutCard;
