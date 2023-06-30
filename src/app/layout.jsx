// import "./globals.css";
import '../stylesheet/app.scss';
import Navbar from "./components/Navbar";

export const metadata = {
  title: "FitM8",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="mb-10">
        <div className="w-11/12 mx-auto my-4">{children}</div>
        <Navbar />
      </body>
    </html>
  );
}
