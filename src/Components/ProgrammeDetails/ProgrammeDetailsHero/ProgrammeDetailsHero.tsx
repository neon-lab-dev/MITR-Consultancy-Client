import { IMAGES } from "@/assets";
import Container from "@/Components/Shared/Container/Container";
import Image from "next/image";
import DetailsCard from "./DetailsCard";
import TrainingCard from "./TrainingCard";

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
                />
                <div className="absolute inset-0 bg-neutral-50 bg-opacity-50"></div>
            </div>
            {/* Content */}
            <Container>
                <div className="absolute top-0 bottom-0 flex items-center xl:items-start justify-center flex-col text-center xl:text-start py-10 md:py-16 xl:py-24 w-full max-w-[1300px] mx-auto">
                    <div className="flex items-center justify-between w-full">
                        <div className="relative">
                            <h1 className="text-white text-xl md:text-[36px] font-bold max-w-[344px] md:max-w-[550px] xl:max-w-[660px] leading-normal">
                                <span className="text-secondary-15">{courseName}</span>  : {title}
                            </h1>
                            <p className="text-white text-sm max-w-[344px] md:max-w-[550px] xl:max-w-[660px] leading-normal mt-3 xl:mt-6">
                                {description}
                            </p>
                            <TrainingCard rating={rating} totalEnrolled={totalEnrolled} />
                        </div>
                        <DetailsCard id={_id} name={courseName} image={poster?.url} rating={rating} price={price} duration={duration} lessons={lessons} totalEnrolled={totalEnrolled} />
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default ProgrammeDetailsHero;
