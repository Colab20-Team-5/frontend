"use client";
import { Toaster } from "react-hot-toast";
import "../stylesheets/app.scss";
import Navbar from "./components/Navbar";
import Providers from "./components/Providers";
import { AppProgressBar as ProgressBar } from "next-nprogress-bar";

// export const metadata = {
//   title: "BeFit",
//   description: "",
// };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Toaster
            position="top-right"
            reverseOrder={false}
            toastOptions={{
              className: "",
              style: {
                fontSize: "14px",
              },
            }}
          />
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
