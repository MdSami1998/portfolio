import React from 'react';
import './SingleProject.css'
import { FaArrowCircleRight, FaEye,FaGithub } from 'react-icons/fa';
import 'animate.css';

const singleProject = ({ project }) => {
    const { name, image, liveLink, clientLink, serverLink } = project;
    return (
        <div className='animate__animated animate__zoomIn'>
            <div className='relative singleProjectImg w-full text-center text-white'>
                <div className='cursor-pointer'>
                    <img className=' rounded-xl' src={image} alt={name} />
                </div>
                <div className='absolute top-0 left-0 singleProjectinfo flex flex-col items-center justify-center'>
                    <div className='flex justify-evenly w-72 mb-7'>
                        <p>
                            <a href={liveLink} target="_blank" rel="noreferrer"><FaEye className='hover:text-primary transition-all text-3xl'></FaEye></a>
                        </p>
                        <p>
                            <a href={clientLink} target="_blank" rel="noreferrer"><FaGithub className='hover:text-primary transition-all text-3xl'></FaGithub></a>
                        </p>
                        <p>
                            <a href={serverLink} target="_blank" rel="noreferrer"><FaGithub className='hover:text-primary transition-all text-3xl'></FaGithub></a>
                        </p>
                    </div>
                    <button className='mx-auto flex justify-center items-center absolute bottom-0 pb-5 font-semibold hover:scale-110 transition-all'>Details <FaArrowCircleRight className='w-20 -m-6 hover:text-primary'></FaArrowCircleRight></button>
                </div>
            </div>
            <h1 className='text-white text-3xl font-semibold mt-2 tracking-widest'>{name}</h1>
        </div>
    );
};

export default singleProject;