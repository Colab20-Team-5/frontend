"use client";
import "../stylesheets/app.scss";
import Navbar from "./components/Navbar";
import Providers from "./components/Providers";
import { AppProgressBar as ProgressBar } from "next-nprogress-bar";

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
          <ProgressBar
            height="6px"
            color="#4ade80"
            options={{ showSpinner: false }}
            shallowRouting
          />
        </Providers>
      </body>
    </html>
  );
}
