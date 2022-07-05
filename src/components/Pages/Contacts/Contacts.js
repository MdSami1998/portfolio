import React from 'react';
import { motion } from 'framer-motion'
import concatcUs from '../../../assest/Icon/contactUs.png'
import { FaPhone, FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa'
import 'animate.css';

const Contacts = () => {
    return (
        <motion.div
            className='min-h-screen'
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            exit={{ x: window.innerWidth, transition: { duration: 0.5 } }}
        >
            <h1 className='text-primary text-center text-2xl md:text-4xl font-black uppercase border-primary mx-auto tracking-widest my-5 relative'>Contact <span className='w-full bg_text'>Hire Me</span></h1>

            <div className='grid grid-cols-2 mt-12'>
                <div className='flex'>
                    <div className='flex flex-col justify-between h-56 m-auto'>
                        <FaFacebook className='text-4xl text-white hover:text-primary transition-all'></FaFacebook>
                        <FaGithub className='text-4xl text-white hover:text-primary transition-all'></FaGithub>
                        <FaLinkedin className='text-4xl text-white hover:text-primary transition-all'></FaLinkedin>
                    </div>

                    <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-accent mx-auto my-auto animate__animated animate__zoomIn">
                        <div class="card-body">
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text text-white">Name</span>
                                </label>
                                <input type="text" placeholder="Your Name" class="input input-bordered text-white bg-transparent" required />
                            </div>
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text text-white">Email</span>
                                </label>
                                <input type="email" placeholder="Email" class="input input-bordered  text-white bg-transparent" required />
                            </div>
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text text-white">Your Message</span>
                                </label>
                                <textarea className='border border-gray-600 rounded-md p-2 bg-transparent text-white' name='textarea' rows="3" placeholder='message' required></textarea>
                            </div>
                            <div class="form-control mt-6">
                                <button class="btn btn-primary hover:bg-transparent hover:text-white hover:scale-110 transition-all tracking-widest">Send Message</button>
                            </div>
                        </div>
                    </div>
                    {/* <h2 className='mt-8 text-center text-xl tracking-widest text-white'>** Social Media **</h2> */}

                </div>

                <div>
                    <img className='w-4/6 rounded animate__animated animate__fadeInDown' src={concatcUs} alt="" />
                    <div className='border-2 border-secondary p-5 rounded-xl mt-5 text-white w-4/6 bg-accent  animate__animated animate__fadeInUp'>
                        <h3 className='text-4xl lg:text-3xl font-bold leading-tight text-primary'>Contact Details :</h3>
                        <div className='text-left text-xl font-thin pt-5'>
                            <p className='font-bold'>Md. Sami Al Zaber</p>
                            <p className='my-2 text-lg'><span className='underline'>Address</span> : Tomsom Bridge, Laksham Road, Cumilla, Bangladesh</p>
                            <p className='my-2 text-lg'>Email : <span className='text-blue-500'>samizaber822@gmail.com</span></p>
                            <a href="tel:+8801775968038" rel='noreferrer' className='btn btn-primary btn-sm w-40 text-black tracking-widest flex items-center gap-2 border border-secondary  hover:bg-transparent hover:text-white transition-all hover:scale-110'> Call Now <FaPhone></FaPhone></a>
                        </div>
                    </div>
                </div>

            </div>
        </motion.div>
    );
};

export default Contacts;