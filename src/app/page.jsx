import dayjs from "dayjs";
import Image from "next/image";
import HomeNavButton from "./components/HomeNavButton";

export default function Home() {
  return (
    <>
      <header className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl">Welcome, Fódla!</h1>
          <p className="text-sm">Ready for today’s workout?</p>
        </div>
        <div>
          <Image
            src="/user.png"
            alt="user avatar logo"
            width={70}
            height={70}
          />
        </div>
      </header>

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
