import React from 'react';
import { motion } from 'framer-motion';
import Timeline from '../../components/timeline/timeline';

const Project = () => {
    return (
        <motion.div className="projects-container bg-black text-white p-4">
            <Timeline />
        </motion.div>
    );
};

export default Project;
