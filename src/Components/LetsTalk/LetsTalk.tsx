import { IMAGES } from "@/assets";
import Image from "next/image";
import Container from "../Shared/Container/Container";
import Button from "../Reusable/Button/Button";

const LetsTalk = () => {
    return (
        <div className="relative font-Inter overflow-hidden">
            <Container>
                <div className="bg-neutral-50 bg-opacity-50 h-full absolute top-0 bottom-0 z-10 rounded-xl"></div>
                <Image src={IMAGES.letsTalkBgImg} alt="MITR Consultancy" className="w-full h-full rounded-xl" />
                <div className="flex flex-col lg:flex-row gap-10 lg:gap-0 items-center justify-between w-full px-[96px] absolute top-0 bottom-0 z-20">
                    <div className="">
                        <h1 className="text-white text-[32px] font-bold">Do you have a project in mind?</h1>
                        <p className="text-white max-w-[475px] text-lg leading-7 mt-8">Welcome to Mitr Lorem ipsum dolor sit amet consectetur adipiscing elit amet diam in est pharetra porttitor libero.</p>
                    </div>
                    <Button variant="primary" title="Let’s talk" classNames="w-[200px]" />
                </div>
            </Container>
        </div>
    );
};

export default LetsTalk;