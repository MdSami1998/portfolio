import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import About from './About/About';
import Contacts from './Contacts/Contacts';
import Home from './Home/Home';
import Projects from './Projects/Projects';
import { AnimatePresence } from 'framer-motion'

const AnimatedRoute = () => {
    const location = useLocation();
    return (
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route path='/' element={<Home></Home>}></Route>
                <Route path='/home' element={<Home></Home>}></Route>
                <Route path='/about' element={<About></About>}></Route>
                <Route path='/projects' element={<Projects></Projects>}></Route>
                <Route path='/contact' element={<Contacts></Contacts>}></Route>
            </Routes>
        </AnimatePresence>
    );
};

export default AnimatedRoute;