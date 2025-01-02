import { IMAGES } from "@/assets";
import Button from "@/Components/Reusable/Button/Button";
import Container from "@/Components/Shared/Container/Container";
import Image from "next/image";

const Hero = () => {
    return (
        <div className="font-Inter relative">
            <div className="bg-neutral-50 bg-opacity-50 w-full h-full absolute top-0 bottom-0 z-10"></div>
            <Image src={IMAGES.heroImg} alt="MITR Consultancy" className="w-full h-full" />
            <Container>
                <div className="flex items-center justify-center absolute top-0 bottom-0 flex-col z-20">
                    <div className="">
                        <h1 className="text-white leading-6 md:leading-[40px] xl:leading-[80px] text-xl xl:text-[68px] font-bold max-w-[1071px]">Bring your thoughts to reality with <span className="text-primary-20">Mitr Consultancy</span></h1>
                        <p className="text-white text-lg leading-7 max-w-[1071px] mt-6">Welcome to Mitr Welcome to Mitr Consulting – where innovation and excellence converge. We provide tailored digital solutions designed to bring your ideas to life and drive your business success.</p>
                        <div className="flex items-center justify-start gap-9 mt-[62px]">
                            <Button variant="primary" title="Start a Project" />
                            <Button variant="secondary" title="Learn More" />
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Hero;