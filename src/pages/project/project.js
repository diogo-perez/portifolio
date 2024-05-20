import React from 'react';
import { motion } from 'framer-motion';
import Timeline from '../../components/timeline/timeline';

const Project = () => {
    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} className="projects-container bg-black text-white p-4">
            <h1 className="text-4xl text-primary">Meus Projetos</h1>
            <p className="mt-4 text">
                Aqui você encontrará uma linha do tempo dos meus projetos.
            </p>
            <Timeline />
        </motion.div>
    );
};

export default Project;
