import { IMAGES } from "@/assets";
import Image from "next/image";
import Container from "../Shared/Container/Container";
import Button from "../Reusable/Button/Button";

const LetsTalk = () => {
    return (
        <div className="relative font-Inter overflow-hidden">
            <Container>
                <div className="bg-neutral-50 bg-opacity-50 h-[235px] md:h-[689px] xl:h-full absolute top-0 bottom-0 z-10 rounded-xl"></div>
                <Image src={IMAGES.letsTalkBgImg} alt="MITR Consultancy" className="w-full h-[235px] md:h-[400px] xl:h-full rounded-xl" />
                <div className="flex flex-col lg:flex-row gap-10 lg:gap-0 items-center justify-center xl:justify-between w-full max-w-[1300px] px-4 xl:px-[96px] absolute top-0 bottom-0 z-20">
                    <div className="flex flex-col text-center xl:text-start gap-4 md:gap-8 w-full">
                        <h1 className="text-white text-lg md:text-[32px] font-bold w-full">Do you have a project in mind?</h1>
                        <p className="text-white max-w-full md:max-w-[475px] mx-auto xl:mx-0 text-xs md:text-lg leading-7">Welcome to Mitr Lorem ipsum dolor sit amet consectetur adipiscing elit amet diam in est pharetra porttitor libero.</p>
                    </div>
                    <Button variant="primary" title="Let’s talk" classNames="w-[200px]" />
                </div>
            </Container>
        </div>
    );
};

export default LetsTalk;