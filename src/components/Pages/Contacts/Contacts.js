import React from 'react';
import { motion } from 'framer-motion'
import concatcUs from '../../../assest/Icon/contactUs.png'
import { FaPhone, FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa'
import 'animate.css';

const Contacts = () => {
    return (
        <motion.div
            className='min-h-screen px-3 md:px-0'
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            exit={{ x: window.innerWidth, transition: { duration: 0.5 } }}
        >
            <h1 className='text-primary text-center text-2xl md:text-4xl font-black uppercase border-primary mx-auto tracking-widest my-5 relative'>Contact <span className='w-full bg_text'>Hire Me</span></h1>

            <div className='grid grid-cols-1 md:grid-cols-2 mt-12'>
                <div className='md:flex'>
                    <div className='flex md:flex-col justify-center gap-20 md:gap-0 md:justify-between md:h-56 m-auto pb-5'>
                        <a href="https://www.facebook.com/samial.zaber.7/" target='_blank' rel="noreferrer" ><FaFacebook className='text-4xl text-white hover:text-primary transition-all'></FaFacebook></a>

                        <a href="https://www.linkedin.com/in/sami-al-zaber-62625b241/" target='_blank' rel="noreferrer"><FaGithub className='text-4xl text-white hover:text-primary transition-all'></FaGithub></a>

                        <a href="https://github.com/MdSami1998" target='_blank' rel="noreferrer"><FaLinkedin className='text-4xl text-white hover:text-primary transition-all'></FaLinkedin></a>
                    </div>

                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-accent mx-auto my-auto animate__animated animate__zoomIn">
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white">Name</span>
                                </label>
                                <input type="text" placeholder="Your Name" className="input input-bordered text-white bg-transparent" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white">Email</span>
                                </label>
                                <input type="email" placeholder="Email" className="input input-bordered  text-white bg-transparent" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white">Your Message</span>
                                </label>
                                <textarea className='border border-gray-600 rounded-lg p-2 bg-transparent text-white' name='textarea' rows="3" placeholder='message' required></textarea>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary hover:bg-transparent hover:text-white hover:scale-110 transition-all tracking-widest">Send Message</button>
                            </div>
                        </div>
                    </div>

                </div>

                <div className='mb-5 md:mb-0'>
                    <img className='w-full md:w-4/6 mt-5 md:mt-0 rounded animate__animated animate__fadeInDown' src={concatcUs} alt="" />
                    <div className='border-2 border-secondary p-5 rounded-xl mt-5 text-white bg-accent w-full md:w-4/6 animate__animated animate__fadeInUp'>
                        <h3 className='text-2xl lg:text-3xl font-bold leading-tight text-primary'>Contact Details :</h3>
                        <div className='text-left text-lg md:text-xl font-thin pt-5'>
                            <p className='font-bold'>Md. Sami Al Zaber</p>
                            <p className='my-2 text-base md:text-lg'><span className='underline'>Address</span> : Tomsom Bridge, Laksham Road, Cumilla, Bangladesh</p>
                            <p className='my-2 text-base md:text-lg'>Email : <span className='text-blue-500'>samizaber822@gmail.com</span></p>
                            <a href="tel:+8801775968038" rel='noreferrer' className='btn btn-primary btn-sm w-40 text-black tracking-widest flex items-center gap-2 border border-secondary  hover:bg-transparent hover:text-white transition-all hover:scale-110'> Call Now <FaPhone></FaPhone></a>
                        </div>
                    </div>
                </div>

            </div>
        </motion.div>
    );
};

export default Contacts;