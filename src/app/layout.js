import "./globals.css";

export const metadata = {
  title: "FitM8",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
