/* eslint-disable react/no-unescaped-entities */
"use client"
import { IMAGES } from "@/assets";
import Image from "next/image";
import ContactUsForm from "./ContactUsForm";

type TContactUs = {
    isContactUsModalOpen: boolean;
    setIsContactUsModalOpen: (value: boolean) => void
}

const ContactUs: React.FC<TContactUs> = ({ isContactUsModalOpen, setIsContactUsModalOpen }) => {

    return (
        <>
            <div onClick={(e) => e.stopPropagation()} className="">
                <div
                    onClick={() => setIsContactUsModalOpen(false)}
                    className={`${isContactUsModalOpen ? "visible" : "invisible"
                        } w-full h-screen fixed top-0 left-0 z-50 bg-[#0000002a] transition-all duration-300 flex items-center justify-center`}>
                    <div
                        onClick={(e) => e.stopPropagation()}
                        className={`${isContactUsModalOpen ? "section scale-[1] opacity-100" : "scale-[0] opacity-0"
                            } w-full max-w-[1060px] h-full max-h-[90%] xl:max-h-[580px] bg-white rounded-2xl transition-all duration-300 mx-auto p-5 flex flex-col-reverse md:flex-row items-center gap-9 font-Inter ${isContactUsModalOpen ? "overflow-y-auto md:overflow-hidden" : "overflow-hidden"
                            } scrollbar-thin scrollbar-thumb-[#03253B] scrollbar-track-transparent`}
                    >
                        <div className="relative h-full w-full xl:w-[45%] flex flex-col items-center justify-center">
                            <Image src={IMAGES.contactUsBgImg} alt="MITR Consultancy" className="rounded-xl h-full w-full" />
                            <div className="flex flex-col items-center justify-center w-full absolute top-0 bottom-0 right-0 left-0 z-20">
                                <Image src={IMAGES.MITRConsoltancyLogo} alt="MITR Consultancy" className="w-[164px] h-[64px]" />
                                <h1 className="text-white text-[25px] xl:text-[42px] text-center font-bold mt-8 uppercase">Crafting Digital Excellence</h1>
                                <p className="text-white text-[10px] text-center md:text-base leading-7 mt-4">Have questions or want to discuss your next big idea?</p>
                                <p className="text-white text-[10px] text-center md:text-base leading-7 mt-[6px]">We're here to help you bring your digital vision to life.</p>
                            </div>
                        </div>

                        <ContactUsForm setIsContactUsModalOpen={setIsContactUsModalOpen} />
                    </div>
                </div>
            </div>
        </>
    );
};

export default ContactUs;