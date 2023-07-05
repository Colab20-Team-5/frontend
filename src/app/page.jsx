import dayjs from "dayjs";
import HomeNavButton from "./components/HomeNavButton";
import Header from "./components/Header";
import PageButton from "./components/PageButton";
import AboutCard from "./components/AboutCard";

export default function Home() {
  return (
    <>
      <Header
        isHomePage={true}
        headerText={"BeFit"}
      />
        <section className="section-hero">
          <div className="section-hero__text-box">
            <h1 className="heading-primary">Unleash your fitness potential</h1>
            <p className="paragraph">Get motivated plan your workouts,
                and crush your fitness goals with us</p>
            <button className="btn btn--primary btn--white">Learn more</button>
          </div>
        </section>
        <AboutCard />
    </>
  );
}
