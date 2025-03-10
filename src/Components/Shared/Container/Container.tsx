import { ReactNode } from "react";


const Container = ({children} : {children:ReactNode}) => {
    return (
        <div className="max-w-[1300px] mx-auto px-5 md:px-7 2xl:px-0">
            {children}
        </div>
    );
};

export default Container;