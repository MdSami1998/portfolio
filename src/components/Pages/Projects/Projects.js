import React, { useEffect, useState } from 'react';
import './Projects.css'
import SingleProject from './SingleProject';
import html from '../../../assest/html.png'
import css from '../../../assest/css.png'
import js from '../../../assest/js.png'
import bootstrap from '../../../assest/bootstrap.png'
import tailwind from '../../../assest/tailwind.png'
import node from '../../../assest/node.png'
import mongoDb from '../../../assest/mongodb.png'
import react from '../../../assest/react.png'

const Projects = () => {
    const [projects, setProjects] = useState([]);
    useEffect(() => {
        fetch('/projects.json')
            .then(res => res.json())
            .then(data => setProjects(data))
    }, [])
    return (
        <div>
            <h1 className='text-primary text-center text-3xl uppercase border-b-2 w-48 mx-auto tracking-widest my-5'>Projects</h1>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-10 px-3 md:px-20 mt-10 w-full'>
                {projects.map(project => <SingleProject project={project}></SingleProject>)}
            </div>

            <div>
                <h2 className='text-primary text-center text-3xl font-semibold mt-20 border-b-2 w-24 mx-auto tracking-widest'>Skills </h2>
                <div className='grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-20 px-5 md:px-20 py-10 w-full'>
                    <div className='bg-accent p-8 rounded-3xl HTML'>
                        <img className='w-24 mx-auto flex justify-center items-center' src={html} alt="" />
                        <h3 className='uppercase text-center pt-4 font-semibold text-sm md:text-lg tracking-widest'>Html</h3>
                    </div>
                    <div className='bg-accent p-8 rounded-3xl CSS'>
                        <img className='w-24 mx-auto flex justify-center items-center' src={css} alt="" />
                        <h3 className='uppercase text-center pt-4 font-semibold text-sm md:text-lg tracking-widest'>css</h3>
                    </div>
                    <div className='bg-accent p-8 rounded-3xl JS'>
                        <img className='w-24 mx-auto flex justify-center items-center' src={js} alt="" />
                        <h3 className='uppercase text-center pt-4 font-semibold text-sm md:text-lg tracking-widest'>javascript</h3>
                    </div>
                    <div className='bg-accent p-8 rounded-3xl REACT'>
                        <img className='w-24 mx-auto flex justify-center items-center' src={react} alt="" />
                        <h3 className='uppercase text-center pt-4 font-semibold text-sm md:text-lg tracking-widest'>react</h3>
                    </div>
                    <div className='bg-accent p-8 rounded-3xl BOOTSTRAP'>
                        <img className='w-24 mx-auto flex justify-center items-center' src={bootstrap} alt="" />
                        <h3 className='uppercase text-center pt-4 font-semibold text-sm md:text-lg tracking-widest'>bootstrap</h3>
                    </div>
                    <div className='bg-accent p-8 rounded-3xl TAILWIND'>
                        <img className='w-24 mx-auto flex justify-center items-center' src={tailwind} alt="" />
                        <h3 className='uppercase text-center pt-4 font-semibold text-sm md:text-lg tracking-widest'>Tailwind css</h3>
                    </div>
                    <div className='bg-accent p-8 rounded-3xl flex flex-col justify-center items-center NODE'>
                        <img className='w-24 mx-auto' src={node} alt="" />
                        <h3 className='uppercase text-center pt-4 font-semibold text-sm md:text-lg tracking-widest'>node</h3>
                    </div>
                    <div className='bg-accent p-8 rounded-3xl flex flex-col justify-center items-center MONGODB'>
                        <img className='w-24 mx-auto' src={mongoDb} alt="" />
                        <h3 className='uppercase text-center pt-4 font-semibold text-sm md:text-lg tracking-widest'>mongodb</h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;