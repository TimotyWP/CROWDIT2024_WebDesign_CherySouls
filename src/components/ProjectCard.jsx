// src/components/ProjectCard.jsx
import React from 'react';

const ProjectCard = ({ image, title, author, authorImage }) => {
    return (
        <div className="bg-black text-white rounded-lg overflow-hidden shadow-lg w-full md:w-[350px] lg:w-[400px]">
        <img src={image} alt={title} className="w-full h-48 object-cover" />
        <div className="p-4">
            <h3 className="text-lg font-semibold">{title}</h3>
            <div className="flex items-center mt-2">
            <img src={authorImage} alt={author} className="w-8 h-8 rounded-full mr-2" />
            <span>{author}</span>   
            </div>
        </div>
        </div>  
    );
};

export default ProjectCard;