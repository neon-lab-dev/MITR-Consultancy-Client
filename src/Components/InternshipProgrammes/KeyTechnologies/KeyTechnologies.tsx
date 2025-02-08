import { ICONS } from "@/assets";
import Container from "@/Components/Shared/Container/Container";
import Image from "next/image";


const KeyTechnologies = () => {
    const technologies = [
        { name: "HTML5", logo: ICONS.html5 },
        { name: "CSS3", logo: ICONS.css3 },
        { name: "JavaScript", logo: ICONS.javascript },
        { name: "Tailwind CSS", logo: ICONS.tailwind },
        // { name: "Bootstrap", logo: ICONS.bootstrap },
        { name: "React.js", logo: ICONS.reactjs },
        { name: "TypeScript", logo: ICONS.typescript },
        { name: "Next.js", logo: ICONS.nextjsIcon },
        { name: "Redux", logo: ICONS.redux },
        { name: "RTK Query", logo: ICONS.rtkQuery },
        { name: "Node.js", logo: ICONS.nodejsIcon },
        { name: "Express.js", logo: ICONS.expressjs },
        { name: "MongoDB", logo: ICONS.mongoDB },
        { name: "Zod", logo: ICONS.zod },
        { name: "Axios", logo: ICONS.axios },
        { name: "JWT", logo: ICONS.jwt }
    ];
    
    return (
        <Container>
            <div className='font-Inter py-[60px] md:py-20 xl:py-[98px] flex flex-col gap-[26px] md:gap-12 lg:gap-[72px]'>
                <h1 className="section-heading"> Key Technologies Covered</h1>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px] lg:gap-[52px]'>
                    {/* Technology card */}
                    {
                        technologies?.map(technology => 
                            <div key={technology?.name} className="border border-primary-60 rounded-lg p-4 flex items-center gap-[31px]">
                            <Image src={technology?.logo} alt={technology?.name} className="size-[66px]" />
                        <p className="text-neutral-10 text-lg font-semibold leading-6">{technology?.name}</p>
                    </div>
                        )
                    }
                </div>
            </div>
        </Container>
    );
};

export default KeyTechnologies;