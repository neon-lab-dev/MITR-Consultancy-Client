import React from 'react';
import Container from '../Shared/Container/Container';
import Heading from '../Reusable/Heading/Heading';
import OurProjectCard from './OurProjectCard';
import { ourProjects } from './ourProjects';

const OurProjects = () => {
    return (
        <div id="portfolio" className="bg-white py-[128px]">
            <Container>
                <div>
                    <Heading
                        align="left"
                        subHeading="Projects"
                        heading="A collection of our latest works"
                        description="Explore our curated collection of top-notch projects showcasing innovation and excellence."
                    />
                    <div className=" overflow-x-auto ">
                        <div className="flex gap-6 w-max my-10">
                            {ourProjects.map((project) => (
                                <OurProjectCard key={project._id} {...project} />
                            ))}
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default OurProjects;
