import "../stylesheets/app.scss";
import Navbar from "./components/Navbar";
import Providers from "./components/Providers";

export const metadata = {
  title: "BeFit",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Navbar />
          <div>{children}</div>
        </Providers>
      </body>
    </html>
  );
}
