import dayjs from "dayjs";
import HomeNavButton from "./components/HomeNavButton";
import Header from "./components/Header";

export default function Home() {
  return (
    <>
      <Header
        isHomePage={true}
        headerText={"Welcome Sazed!"}
        paraText={"Ready for today’s workout?"}
      />
      <div className="font-medium text-lg mt-8 mb-10">
        {dayjs().format("dddd, MMMM DD")}.
      </div>

      <div>
        <HomeNavButton text={"Before the Gym"} url={"/beforegym"} />
        <HomeNavButton text={"At the Gym"} url={"/atgym"} />
        <HomeNavButton text={"After the Gym"} url={"/aftergym"} />
        <HomeNavButton text={"My Goals"} url={"/goals"} />
      </div>
    </>
  );
}
