import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import useSmoothScroll from "../../hooks/useSmoothScroll";

const MainLayout = ({ children }: { children: ReactNode }) => {
  useSmoothScroll();

  return (
    <>
      <Header />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>{children}</main>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default MainLayout;
