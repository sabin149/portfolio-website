import { Outlet, ScrollRestoration } from "react-router-dom";
import Header from "components/Common/Header";
import Footer from "components/Common/Footer";
import BottomToTopBtn from "components/Common/BottomToTopBtn";
const RootLayout = () => {
  return (
    <>
      <ScrollRestoration />

      <Header />
      <main>
        <Outlet />
      </main>
      <BottomToTopBtn />
      <Footer />
    </>
  );
};

export default RootLayout;
