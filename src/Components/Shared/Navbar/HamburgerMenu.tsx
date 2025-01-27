import { IMAGES } from '@/assets';
import Button from '@/Components/Reusable/Button/Button';
import Image from 'next/image';
import React from 'react';
import { navlinks } from './navlinks';

interface HamburgerMenuProps {
    isSidebarOpen: boolean;
    setIsSidebarOpen: (isOpen: boolean) => void;
    setIsContactUsModalOpen: (isOpen: boolean) => void;
}

const HamburgerMenu: React.FC<HamburgerMenuProps> = ({ isSidebarOpen, setIsSidebarOpen, setIsContactUsModalOpen }) => {
    return (
        <div
            className={`fixed top-0 right-0 h-full w-2/3 max-w-[250px] bg-neutral-40 bg-opacity-75 text-white z-50 shadow-lg transition-transform transform duration-500 ${isSidebarOpen ? "translate-x-0" : "translate-x-full"
                }`}
        >
            <div className="flex flex-col h-full">
                <div className="flex justify-between items-center p-4">
                    <Image
                        src={IMAGES.MITRConsoltancyLogo}
                        alt="MITR Consultancy"
                        className="h-[36px] w-[72px]"
                    />
                    <button
                        onClick={() => setIsSidebarOpen(false)}
                        className="text-white text-2xl"
                    >
                        &times;
                    </button>
                </div>
                <div className="flex flex-col gap-4 p-4">
    {navlinks.map((link, index) => (
        <button
            key={index}
            onClick={() => {
                if (link.action) { // Ensure action is defined before invoking it
                    link.action();
                }
                setIsSidebarOpen(false);
            }}
            className="text-lg font-medium hover:text-primary-10 transition duration-300"
        >
            {link.label}
        </button>
    ))}
</div>

                <div className="mt-auto p-4">
                    <Button
                        handleClick={() => {
                            setIsContactUsModalOpen(true);
                            setIsSidebarOpen(false);
                        }}
                        variant="primary"
                        title="Contact Us"
                        classNames="md:h-[46px] h-[36px] text-sm md:text-lg w-full flex item-center justify-center"
                    />
                </div>
            </div>
        </div>
    );
};

export default HamburgerMenu;