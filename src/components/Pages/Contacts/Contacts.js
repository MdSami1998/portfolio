import React from 'react';
import { motion } from 'framer-motion'

const Contacts = () => {
    return (
        <motion.div
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            exit={{ x: window.innerWidth , transition: {duration:0.5}}}
        >
            <h1>this ic contact</h1>
        </motion.div>
    );
};

export default Contacts;