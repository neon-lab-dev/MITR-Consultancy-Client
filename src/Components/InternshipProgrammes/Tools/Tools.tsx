import { ICONS } from "@/assets";
import Container from "@/Components/Shared/Container/Container";
import Image from "next/image";

const Tools = () => {
    const tools = [
        { name: "VS Code", logo: ICONS.vscode },
        { name: "Figma", logo: ICONS.figma },
        { name: "Vercel", logo: ICONS.vercel },
        { name: "Netlify", logo: ICONS.netlify },
        { name: "Git", logo: ICONS.git },
        { name: "GitHub", logo: ICONS.github },
        { name: "Postman", logo: ICONS.postman },
        { name: "MongoDB Compass", logo: ICONS.mongodbCompass },
    ];

    return (
        <Container>
            <div className='font-Inter py-[60px] md:py-20 xl:py-[98px] flex flex-col gap-[26px] md:gap-12 lg:gap-[72px]'>
                <h1 className="section-heading"> Essential Development Tools</h1>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px] lg:gap-[52px]'>
                    {/* Tool card */}
                    {
                        tools?.map((tool) =>
                            <div key={tool?.name} className="border border-primary-60 rounded-lg p-4 flex items-center gap-[31px]">
                                <Image src={tool?.logo} alt={tool?.name} className="size-[66px]" />
                                <p className="text-neutral-10 text-lg font-semibold leading-6">{tool?.name}</p>
                            </div>
                        )
                    }
                </div>
            </div>
        </Container>
    );
};

export default Tools;