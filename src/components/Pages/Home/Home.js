import React from 'react';
import './Home.css'
// import proPic from '../../../assest/profile pic/IMG_8931.jpg'
import proPic from '../../../assest/profile pic/IMG_20210321_160619.jpg'
import { motion } from 'framer-motion'
import { FaDownload } from 'react-icons/fa'
import 'animate.css';

const Home = () => {
    return (
        <motion.div className="hero md:min-h-screen bg-base-200"
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            exit={{ x: window.innerWidth, transition: { duration: 0.5 } }}

        // initial={{opacity:0}}
        // animate={{opacity:1}}
        // exit={{opacity:0}}
        >
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img className='w-72 md:w-96 proPic animate__animated animate__fadeInRightBig' src={proPic} alt='' />
                <div className='animate__animated animate__fadeInLeftBig'>
                    <h1 className="text-3xl md:text-5xl font-bold text-white">Welcome!</h1>
                    <h2 className="text-xl mt-5 text-primary">This is <span className='tracking-wider font-black text-2xl md:text-3xl'>Md. Sami Al Zaber</span></h2>
                    <p className="py-6 text-base text-white leading-8">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>

                    <a href="https://drive.google.com/file/d/1syGektim5ydAwg4YBnMKw97qClUHPksB/view?usp=sharing" target="_blank" rel="noreferrer" ><button className="btn btn-primary btn-sm hover:bg-transparent hover:text-white hover:scale-110 transition-all  px-8 tracking-widest">Resume &nbsp; <FaDownload></FaDownload></button></a>
                </div>
            </div>
        </motion.div>
    );
};

export default Home;