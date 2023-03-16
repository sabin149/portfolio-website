import { Outlet, ScrollRestoration } from "react-router-dom";
import Header from "components/Common/Header";
import Footer from "components/Common/Footer";
const RootLayout = () => {
  return (
    <>
      <ScrollRestoration />
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default RootLayout;
