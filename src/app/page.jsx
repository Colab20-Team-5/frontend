import dayjs from "dayjs";
import HomeNavButton from "./components/HomeNavButton";
import HeaderImg from "./components/HeaderImg";

export default function Home() {
  return (
    <>
      <div className="btn-container">
        <HomeNavButton text={"Before the Gym"} url={"/beforegym"} />
        <HomeNavButton text={"At the Gym"} url={"/atgym"} />
        <HomeNavButton text={"After the Gym"} url={"/aftergym"} />
        <HomeNavButton text={"My Goals"} url={"/goals"} />
      </div>
    </>
  );
}
