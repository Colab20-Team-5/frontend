import HeaderImg from "../components/HeaderImg";

export default function AtGym({ children }) {
  return (
    <div>
      <HeaderImg headerImg={"/atgym.png"} />
      <div className="container">{children}</div>
    </div>
  );
}
