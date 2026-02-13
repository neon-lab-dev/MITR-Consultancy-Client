import Footer from "@/Components/Shared/Footer/Footer";
import Navbar from "@/Components/Shared/Navbar/Navbar";
import SmoothScroll from "@/Components/SmoothScroll";
import { ReactNode } from "react";

const CommonLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="bg-neutral-185">
      <SmoothScroll>
      <Navbar />
      {children}
      <Footer />
      </SmoothScroll>
    </div>
  );
};

export default CommonLayout;
