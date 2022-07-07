import React from 'react';
import './Home.css'
import{Link} from 'react-router-dom'
import proPic from '../../../assest/profile pic/IMG_20210321_160619.jpg'
import { motion } from 'framer-motion'
import { FaDownload, FaArrowRight } from 'react-icons/fa'
import 'animate.css';

const Home = () => {
    return (
        <div>
            <motion.div className="hero md:min-h-screen bg-base-200"
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                exit={{ x: window.innerWidth, transition: { duration: 0.5 } }}

            // initial={{opacity:0}}
            // animate={{opacity:1}}
            // exit={{opacity:0}}
            >
                <div className="hero-content lg:gap-60 flex-col lg:flex-row-reverse">
                    <img className='w-72 md:w-96 proPic animate__animated animate__fadeInRightBig' src={proPic} alt='' />
                    <div className='animate__animated animate__fadeInLeftBig'>
                        <h1 className="text-3xl md:text-6xl font-bold text-white">Welcome!</h1>
                        <h2 className="text-2xl mt-5 text-primary">This is <span className='tracking-wider font-black text-2xl md:text-4xl'>Md. Sami Al Zaber</span></h2>
                        <p className="py-6 md:text-xl font-thin text-white leading-8">I'm a front-end developer. I love to build interactive and user-friendly websites that run across platforms & devices.</p>

                        <a href="https://drive.google.com/file/d/1w6nlK6Do3DBOINaYQ5uA3JOmqTzPyr9R/view?usp=sharing" target="_blank" rel="noreferrer" ><button className="btn btn-primary btn-sm hover:bg-transparent hover:text-white hover:scale-110 transition-all  px-8 tracking-widest">Resume &nbsp; <FaDownload></FaDownload></button></a>
                    </div>
                </div>
            </motion.div>
            <Link to='/about' className='md:hidden flex justify-end items-center text-md m-4 border-t-2 pt-2 hover:text-primary'>About Me &nbsp; <FaArrowRight></FaArrowRight></Link>
        </div>
    );
};

export default Home;