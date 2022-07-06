/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { FaArrowUp , FaFacebook, FaGithub, FaLinkedin} from 'react-icons/fa'

const Footer = () => {
    return (
        <footer className="footer footer-center p-5 bg-neutral rounded">
            <div className="grid grid-flow-col gap-4">
                <a className='underline cursor-pointer flex justify-center items-center' href="#" rel="noreferrer">Back to Top &nbsp;<FaArrowUp></FaArrowUp></a>
            </div>
            <div>
                <div className="grid grid-flow-col gap-4">
                        <a href="https://www.facebook.com/samial.zaber.7/" target='_blank' rel="noreferrer" ><FaFacebook className='text-3xl text-white hover:text-primary transition-all'></FaFacebook></a>

                        <a href="https://www.linkedin.com/in/sami-al-zaber-62625b241/" target='_blank' rel="noreferrer"><FaGithub className='text-3xl text-white hover:text-primary transition-all'></FaGithub></a>

                        <a href="https://github.com/MdSami1998" target='_blank' rel="noreferrer"><FaLinkedin className='text-3xl text-white hover:text-primary transition-all'></FaLinkedin></a>
                    </div>
                </div>
            <div>
                <p>Copyright © 2022 - All right reserved by <span className='text-primary font-black'>Developer MD. Sami Al Zaber</span></p>
            </div>
        </footer>
    );
};

export default Footer;