import PageTransitionWrapper from "@/Components/PageTransitionWrapper";
import Footer from "@/Components/Shared/Footer/Footer";
import Navbar from "@/Components/Shared/Navbar/Navbar";
import { ReactNode } from "react";


const CommonLayout = ({ children }: { children: ReactNode }) => {
    return (
        <div>
            <Navbar />
            <PageTransitionWrapper>
                {children}
            </PageTransitionWrapper>
            <Footer />
        </div>
    );
};

export default CommonLayout;