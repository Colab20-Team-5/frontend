import HeaderImg from "../components/HeaderImg";

export default function BeforeGymLayout({ children }) {
  return (
    <div>
      <HeaderImg headerImg={"/beforegymheader.png"} />
      <div className="container">{children}</div>
    </div>
  );
}
