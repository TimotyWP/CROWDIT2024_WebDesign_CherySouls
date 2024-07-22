// src/components/GetStartedPage.jsx
import React from 'react';
import Navbar from './Navbar';
import ProjectCard from './ProjectCard'; 
import styles from '../style';

const projects = [
    {
    image: 'src/assets/card/card1.jpg',
    title: 'Game Development',
    author: 'Timoty W Pakpahan, S.Kom, M.TI, Dr. Ilkom',
    authorImage: 'src/assets/profile/rev-1.png',
    },
    {
    image: 'src/assets/card/card2.jpg',
    title: 'Web Design and Developing',
    author: 'Timoty W Pakpahan, S.Kom, M.TI, Dr. Ilkom',
    authorImage: 'src/assets/profile/rev-1.png',
    },
    {
    image: 'src/assets/card/card3.jpg',
    title: 'Artificial Intellegence',
    author: 'Timoty W Pakpahan, S.Kom, M.TI, Dr. Ilkom',
    authorImage: 'src/assets/profile/rev-1.png',
    },
    {
    image: 'src/assets/card/card4.jpg',
    title: 'Mobile Programming',
    author: 'Carin Gunawan, S.SI, M.IK, Dr. T.Inf',
    authorImage: 'src/assets/profile/rev-2.png',
    },
    {
    image: 'src/assets/card/card5.jpg',
    title: 'Data Analysis',
    author: 'Carin Gunawan, S.SI, M.IK, Dr. T.Inf',
    authorImage: 'src/assets/profile/rev-2.png',
    },
    {
    image: 'src/assets/card/card6.jpg',
    title: 'Broadcasting and Multimedia',
    author: 'Carin Gunawan, S.SI, M.IK, Dr. T.Inf',
    authorImage: 'src/assets/profile/rev-2.png',
    },
    {
    image: 'src/assets/card/card7.jpg',
    title: 'Broadcasting and Multimedia',
    author: 'Jafier Andreas, S.TI, M.MI, Dr. SI',
    authorImage: 'src/assets/profile/rev-3.png',
    },
    {
    image: 'src/assets/card/card8.jpg',
    title: 'Broadcasting and Multimedia',
    author: 'Jafier Andreas, S.TI, M.MI, Dr. SI',
    authorImage: 'src/assets/profile/rev-3.png',
    },
    {
    image: 'src/assets/card/card9.jpg',
    title: 'Broadcasting and Multimedia',
    author: 'Jafier Andreas, S.TI, M.MI, Dr. SI',
    authorImage: 'src/assets/profile/rev-3.png',
    },
    {
    image: 'src/assets/card/card10.jpg',
    title: 'Broadcasting and Multimedia',
    author: 'adakozel',
    authorImage: 'path/to/author1.jpg',
    },
];

const GetStartedPage = () => {
    return (
        <div className="bg-primary w-full overflow-hidden">
        <div className={`${styles.paddingX} ${styles.flexCenter} mt-10`}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {projects.map((project, index) => (
                <ProjectCard
                key={index}
                image={project.image}
                title={project.title}
                author={project.author}
                authorImage={project.authorImage}
                />
            ))}
            </div>
        </div>
        </div>
    );
};

export default GetStartedPage;
