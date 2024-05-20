import React from 'react';
import { motion } from 'framer-motion';
import 'tailwindcss/tailwind.css';

const events = [
    {
        title: 'Início do Projeto',
        startDate: '01/01/2020',
        endDate: '31/01/2020',
        description: 'Início do desenvolvimento do projeto. Aqui está uma descrição mais longa para testar como o texto se ajusta dentro do card.',
        image: 'https://via.placeholder.com/150'
    },
    {
        title: 'Lançamento da Versão Beta',
        startDate: '01/02/2020',
        endDate: '29/02/2020',
        description: 'Lançamento da versão beta do projeto.',
        image: 'https://via.placeholder.com/150'
    },
    {
        title: 'Versão Final',
        startDate: '01/03/2020',
        endDate: '31/03/2020',
        description: 'Lançamento da versão final do projeto.',
        image: 'https://via.placeholder.com/150'
    }
];

const Timeline = () => {
    return (
        <div className="overflow-x-auto whitespace-nowrap py-4 px-2 bg-black text-white">
            <div className="inline-flex space-x-4">
                {events.map((event, index) => (
                    <motion.div
                        key={index}
                        className="flex-none w-64 bg-gray-800 rounded-lg shadow-lg p-4"
                        whileHover={{ scale: 1.05 }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                    >
                        <img src={event.image} alt={event.title} className="w-full h-32 object-cover rounded-t-lg" />
                        <h3 className="text-xl font-bold mt-2">{event.title}</h3>
                        <p className="text-sm text-gray-400">{event.startDate} - {event.endDate}</p>
                        <p className="mt-2 text-sm line-clamp-3 overflow-hidden">{event.description}</p>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Timeline;
