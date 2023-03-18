import { Outlet, ScrollRestoration } from "react-router-dom";
import Header from "components/Common/Header";
import Footer from "components/Common/Footer";
import BottomToTopBtn from "components/Common/BottomToTopBtn";
import { useState } from "react";

const RootLayout = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <ScrollRestoration />
      <Header isOpen={isOpen} setIsOpen={setIsOpen} />
      <main>
        <Outlet context={{ isOpen, setIsOpen }} />
      </main>
      <BottomToTopBtn />
      <Footer />
    </>
  );
};

export default RootLayout;
