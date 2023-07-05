
import '../stylesheets/app.scss';
import Footer from './components/Footer';

export const metadata = {
  title: "FitM8",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="">
        <div className="container">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
