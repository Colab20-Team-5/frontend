import "../stylesheets/app.scss";
import Navbar from "./components/Navbar";

export const metadata = {
  title: "BeFit",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="">
        <Navbar />
        <div>{children}</div>
      </body>
    </html>
  );
}
