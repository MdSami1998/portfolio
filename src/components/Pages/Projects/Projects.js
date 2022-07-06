import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import './Projects.css'
import { motion } from 'framer-motion'
import SingleProject from './SingleProject';
import AOS from 'aos';
import 'aos/dist/aos.css';
import html from '../../../assest/Icon/html.png'
import css from '../../../assest/Icon/css.png'
import js from '../../../assest/Icon/js.png'
import bootstrap from '../../../assest/Icon/bootstrap.png'
import tailwind from '../../../assest/Icon/tailwind.png'
import node from '../../../assest/Icon/node.png'
import mongoDb from '../../../assest/Icon/mongodb.png'
import react from '../../../assest/Icon/react.png'
import { FaArrowRight } from 'react-icons/fa';

const Projects = () => {
    AOS.init({
        disable: window.innerWidth > 680
    });
    const [projects, setProjects] = useState([]);
    useEffect(() => {
        fetch('/projects.json')
            .then(res => res.json())
            .then(data => setProjects(data))
    }, [])
    return (
        <motion.div className='mt-7 md:mt-12'
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            exit={{ x: window.innerWidth, transition: { duration: 0.5 } }}
        >
            <h1 className='text-primary text-center text-2xl md:text-4xl font-black uppercase border-primary mx-auto tracking-widest my-5 relative'>Projects <span className='w-full bg_text'>My Works</span></h1>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-10 px-3 md:px-20 mt-10 w-full'>
                {projects.map(project => <SingleProject key={project._id} project={project}></SingleProject>)}
            </div>

            <div>
                <h1 className='text-white text-center text-2xl md:text-4xl font-black uppercase border-primary mx-auto tracking-widest mt-20 relative'>My <span className='text-primary '>Skills</span> <span className='w-full bg_text'> Good At</span></h1>

                <div className='grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-20 px-5 md:px-20 py-10 w-full'>
                    <div data-aos="flip-left"
                        data-aos-duration="1500"
                        className='bg-accent p-8 rounded-3xl HTML'>
                        <img className='w-24 mx-auto flex justify-center items-center' src={html} alt="" />
                        <h3 className='uppercase text-center pt-4 font-semibold text-sm md:text-lg tracking-widest'>Html</h3>
                    </div>
                    <div data-aos="flip-right"
                        data-aos-duration="1500"
                        className='bg-accent p-8 rounded-3xl CSS'>
                        <img className='w-24 mx-auto flex justify-center items-center' src={css} alt="" />
                        <h3 className='uppercase text-center pt-4 font-semibold text-sm md:text-lg tracking-widest'>css</h3>
                    </div>
                    <div data-aos="flip-left"
                        data-aos-duration="1500"
                        className='bg-accent p-8 rounded-3xl JS'>
                        <img className='w-24 mx-auto flex justify-center items-center' src={js} alt="" />
                        <h3 className='uppercase text-center pt-4 font-semibold text-sm md:text-lg tracking-widest'>javascript</h3>
                    </div>
                    <div data-aos="flip-right"
                        data-aos-duration="1500"
                        className='bg-accent p-8 rounded-3xl REACT'>
                        <img className='w-24 mx-auto flex justify-center items-center' src={react} alt="" />
                        <h3 className='uppercase text-center pt-4 font-semibold text-sm md:text-lg tracking-widest'>react</h3>
                    </div>
                    <div data-aos="flip-left"
                        data-aos-duration="1500"
                        className='bg-accent p-8 rounded-3xl BOOTSTRAP'>
                        <img className='w-24 mx-auto flex justify-center items-center' src={bootstrap} alt="" />
                        <h3 className='uppercase text-center pt-4 font-semibold text-sm md:text-lg tracking-widest'>bootstrap</h3>
                    </div>
                    <div data-aos="flip-right"
                        data-aos-duration="1500"
                        className='bg-accent p-8 rounded-3xl TAILWIND'>
                        <img className='w-24 mx-auto flex justify-center items-center' src={tailwind} alt="" />
                        <h3 className='uppercase text-center pt-4 font-semibold text-sm md:text-lg tracking-widest'>Tailwind css</h3>
                    </div>
                    <div
                        data-aos="flip-left"
                        data-aos-duration="1500"
                        className='bg-accent p-8 rounded-3xl flex flex-col justify-center items-center NODE'>
                        <img className='w-24 mx-auto' src={node} alt="" />
                        <h3 className='uppercase text-center pt-4 font-semibold text-sm md:text-lg tracking-widest'>node</h3>
                    </div>
                    <div
                        data-aos="flip-right"
                        data-aos-duration="1500"
                        className='bg-accent p-8 rounded-3xl flex flex-col justify-center items-center MONGODB'>
                        <img className='w-24 mx-auto' src={mongoDb} alt="" />
                        <h3 className='uppercase text-center pt-4 font-semibold text-sm md:text-lg tracking-widest'>mongodb</h3>
                    </div>
                </div>
            </div>

            <Link to='/contact' className='md:hidden flex justify-end items-center m-4 hover:text-primary border-t-2 pt-2'>Hire Now &nbsp; <FaArrowRight></FaArrowRight></Link>
        </motion.div>
    );
};

export default Projects;