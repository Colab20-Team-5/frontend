// import "./globals.css";
import '../stylesheets/app.scss';
import Navbar from "./components/Navbar";

export const metadata = {
  title: "FitM8",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="">
        <div className="container">{children}</div>
        <Navbar />
      </body>
    </html>
  );
}
