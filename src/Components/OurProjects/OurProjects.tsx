import React from 'react';
import Container from '../Shared/Container/Container';
import Heading from '../Reusable/Heading/Heading';
import { IMAGES } from '@/assets';
import OurProjectCard from './OurProjectCard';

const OurProjects = () => {
    const ourProjects = [
        {
            _id: "1",
            img: IMAGES.project1,
            title: "Medlife Easy",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lectus mattis nunc aliquam tincidunt est non. Viverra nec eu."
        },
        {
            _id: "2",
            img: IMAGES.project2,
            title: "Student Tiffin",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lectus mattis nunc aliquam tincidunt est non. Viverra nec eu."
        },
        {
            _id: "4",
            img: IMAGES.project3,
            title: "Agriculture",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lectus mattis nunc aliquam tincidunt est non. Viverra nec eu."
        },
    ];
    return (
        <div className="bg-white py-[128px]">
            <Container>
                <div>
                    <Heading
                        align='left'
                        subHeading='Projects'
                        heading='A collection of our latest works'
                        description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lectus mattis nunc aliquam tincidunt est non. Viverra nec eu.'
                    />

                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-[54px]'>
                        {
                            ourProjects.map((project) => (
                                <OurProjectCard key={project?._id} {...project} />
                            ))
                        }
                    </div>
                </div>
            </Container>

        </div>
    );
};

export default OurProjects;