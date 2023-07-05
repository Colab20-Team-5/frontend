import dayjs from "dayjs";
import HomeNavButton from "./components/HomeNavButton";
import Header from "./components/Header";
import PageButton from "./components/PageButton";

export default function Home() {
  return (
    <>
      <Header
        isHomePage={true}
        headerText={"BeFit"}
      />
      <div>
        <section className="section-hero">
          <h2>Unleash your fitness potential</h2>
          <p>Get motivated plan your workouts,
              and crush your fitness goals with us</p>
          <PageButton text={"learn more"} url={"/beforegym"}/>
        </section>
      </div>
    </>
  );
}
