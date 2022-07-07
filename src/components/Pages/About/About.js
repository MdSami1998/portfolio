import React from 'react';
import{Link} from 'react-router-dom'
import { motion } from 'framer-motion'
import proPic from '../../../assest/profile pic/IMG_8931.jpg'
import 'animate.css';
import { FaArrowRight } from 'react-icons/fa';

const About = () => {
    return (
        <div>
            <h1 className='text-white text-center text-2xl md:text-4xl font-black uppercase border-primary mx-auto tracking-widest my-5 relative'>About <span className='text-primary'>me</span> <span className='w-full bg_text'>About Me</span></h1>
            <motion.div className="hero bg-base-200"
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                exit={{ x: window.innerWidth, transition: { duration: 0.5 } }}

            // initial={{opacity:0}}
            // animate={{opacity:1}}
            // exit={{opacity:0}}
            >
                <div className="hero-content md:gap-32 flex-col lg:flex-row-reverse">
                    <img className='w-60 md:w-96 animate__animated animate__fadeInRightBig proPic' src={proPic} alt='' />
                    <div className='animate__animated animate__fadeInLeftBig'>
                        <h2 className="text-3xl md:text-4xl font-bold mt-5 text-primary">I am Md. Sami Al Zaber</h2>
                        <p className="py-6 md:text-lg font-thin text-white leading-8 md:leading-9">I'm studying in the Department of Computer Science and Technology at Nanjing University of Information Science and Technology in Jiangsu Province, China.</p>
                    </div>
                </div>
            </motion.div>
            
            <Link to='/projects' className='md:hidden flex justify-end items-center m-4 border-t-2 pt-2 hover:text-primary'>My Works &nbsp; <FaArrowRight></FaArrowRight></Link>
        </div>
    );
};

export default About;