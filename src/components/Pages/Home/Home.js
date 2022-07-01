import React from 'react';
import './Home.css'
import proPic from '../../../assest/profile pic/IMG_8931.jpg'
import { motion } from 'framer-motion'

const Home = () => {
    return (
        <motion.div class="hero bg-base-200"
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            exit={{ x: window.innerWidth , transition: {duration:0.4}}}

        // initial={{opacity:0}}
        // animate={{opacity:1}}
        // exit={{opacity:0}}
        >
            <div class="hero-content flex-col lg:flex-row-reverse">
                <img className='w-96 proPic' src={proPic} alt='' />
                <div>
                    <h1 class="text-5xl font-bold">Box Office News!</h1>
                    <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button class="btn btn-primary">Get Started</button>
                </div>
            </div>
        </motion.div>
    );
};

export default Home;