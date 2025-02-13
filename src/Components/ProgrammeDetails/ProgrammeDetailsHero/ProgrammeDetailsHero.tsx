import { IMAGES } from "@/assets";
import Container from "@/Components/Shared/Container/Container";
import Image from "next/image";
import DetailsCard from "./DetailsCard";
import TrainingCard from "./TrainingCard";
import DetailsCardSm from "./DetailsCardSm";

type TProgrammeDetailsHero = {
    _id: string;
    poster: {
        url : string;
    };
    lessons: string;
    courseName: string;
    title: string;
    description: string;
    price: number;
    duration: string;
    totalEnrolled: number;
    rating: string;
  };
const ProgrammeDetailsHero : React.FC<TProgrammeDetailsHero> = ({_id, poster, lessons, courseName, title, description, price, duration, totalEnrolled, rating}) => {
    return (
        <div className="font-Inter mt-20">
            {/* Background Image */}
            <div className="relative w-full h-[470px]">
                <Image
                    src={IMAGES.frontendDevelopmentBgImg}
                    alt="MITR Consultancy"
                    layout="fill"
                    objectFit="cover"
                    priority
                    className=""
                />
                <div className="absolute inset-0 bg-neutral-50 bg-opacity-50"></div>
            </div>
            {/* Content */}
            <Container>
                <div className="absolute top-0 bottom-0 left-0 right-0 flex items-center xl:items-start justify-center flex-col text-center xl:text-start py-10 md:py-16 xl:py-5 w-full max-w-full xl:max-w-[1300px] mx-auto h-[470px] xl:h-fit px-5 md:px-7 2xl:px-0">
                    <div className="flex flex-col xl:flex-row items-center justify-between w-fit xl:w-full">
                        <div className="relative w-full">
                            <h1 className="text-white text-xl md:text-[36px] font-bold max-w-[344px] md:max-w-full lg:max-w-[900px] mx-auto xl:mx-0 xl:max-w-[660px] leading-normal text-center xl:text-start">
                                <span className="text-secondary-15">{courseName}</span>  : {title}
                            </h1>
                            <p className="text-white text-sm max-w-[344px] md:max-w-full lg:max-w-[900px] xl:max-w-[660px] leading-normal mt-3 xl:mt-6 text-center xl:text-start">
                                {description}
                            </p>
                            <TrainingCard rating={rating} totalEnrolled={totalEnrolled} />
                        </div>
                        <DetailsCard id={_id} name={courseName} image={poster?.url} rating={rating} price={price} duration={duration} lessons={lessons} totalEnrolled={totalEnrolled} />
                    </div>
                </div>
            </Container>
            <div className="px-5 md:px-7s">
            <DetailsCardSm id={_id} name={courseName} image={poster?.url} rating={rating} price={price} duration={duration} lessons={lessons} totalEnrolled={totalEnrolled} />
            </div>
        </div>
    );
};

export default ProgrammeDetailsHero;
