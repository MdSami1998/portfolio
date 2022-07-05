import React from 'react';
import { motion } from 'framer-motion'
import proPic from '../../../assest/profile pic/IMG_8931.jpg'

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
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img className='w-96 proPic' src={proPic} alt='' />
                    <div>
                        {/* <h1 className="text-5xl font-bold text-white">Welcome!</h1> */}
                        <h2 className="text-3xl font-bold mt-5 text-primary">I am Md. Sami Al Zaber</h2>
                        <p className="py-6 text-base text-white leading-8">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default About;