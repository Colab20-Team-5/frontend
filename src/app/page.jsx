import AboutCard from "./components/AboutCard";
import Link from "next/link";

export default function Home() {
  return (
    <>
        <section className="section-hero">
          <div className="section-hero__text-box">
            <h1 className="heading-primary">Unleash your fitness potential</h1>
            <p className="paragraph">Get motivated plan your workouts,
                and crush your fitness goals with us</p>
    <Link
      href={'/'}
      className="btn btn--primary btn--white"
    >
      Learn more
    </Link>
          </div>
        </section>
        <AboutCard />
    </>
  );
}
