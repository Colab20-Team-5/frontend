import "../stylesheets/app.scss";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

export const metadata = {
  title: "BeFit",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <div>{children}</div>
      </body>
    </html>
  );
}
