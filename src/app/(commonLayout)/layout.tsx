import PageTransitionWrapper from "@/Components/PageTransitionWrapper";
import Footer from "@/Components/Shared/Footer/Footer";
import Navbar from "@/Components/Shared/Navbar/Navbar";
import { ReactNode } from "react";


const CommonLayout = ({ children }: { children: ReactNode }) => {
    return (
        <div>
            <Navbar />
            <div className="overflow-x-hidden">
                <PageTransitionWrapper>
                {children}
            </PageTransitionWrapper>
            </div>
            <Footer />
        </div>
    );
};

export default CommonLayout;