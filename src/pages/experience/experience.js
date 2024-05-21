import React, { useState, useEffect } from 'react';
import { FaCircle, FaRegCircle } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Skeleton from 'react-loading-skeleton';
import './experience.css';

const experiences = [
    {
        company: 'Pax Primavera',
        title: 'Desenvolvedor Frontend',
        startDate: 'Abril 2022',
        endDate: 'Atualmente',
        atividades: `Integrações de serviços terceiros, desenvolvimento e sustentação de
        aplicações web e mobile.
        - Sustentação de sistemas legados internos, desenvolvido em PHP.
        - Suporte técnico, treinamentos e acompanhamentos de processos
        relacionados a tecnologia da informação.
        - Projetos de infraestrutura de redes computacionais.
        - Gestão de equipe de desenvolvimento.`,
        competencias: `Microsoft SQL Server; Desenvolvimento de front-end; Firebase;
        Desenvolvimento de aplicativos móveis; Express.js; React Native; Flutter; Dart;
        Firebird; Java; React.js; CSS; Análise de requisitos; Node.js; PostgreSQL; Vue.js;
        Análise de dados ; PHP; MySQL`
    },
    {
        company: 'Include ME ',
        title: 'Desenvolvedor Frontend',
        startDate: 'Fev 2020',
        endDate: 'Dez 2020',
        atividades: `Empresa Júnior da UFGD (Universidade Federal da Grande Dourados). Desenvolvimento web e mobile.
        - Analise de requisitos e dados.`,
        competencias: `Desenvolvimento de front-end; Flutter; Dart; React.js; React Native;
        CSS; Tailwind CSS, Firebase; MongoDB; Desenvolvimento de aplicativos móveis; Análise de
        requisitos.`
    },
    {
        company: 'Eletro Luz',
        title: 'Desenvolvedor Full Stack',
        startDate: 'Mar 2018',
        endDate: 'Jan 2022',
        atividades: `Integrações de serviços terceiros, desenvolvimento e sustentação de
        aplicações web.
        - Sustentação de sistemas internos, desenvolvido em React.JS.
        - Suporte técnico, treinamentos e acompanhamentos de processos
        relacionados a tecnologia da informação.
        - Projetos de infraestrutura de redes computacionais.
        - Emissão de notas fiscais.
        - Controle de estoque.
        - Controle de diárias de funcionários`,
        competencias: `Desenvolvimento de front-end;Express.js;React.js; Tailwind CSS; CSS3; Análise de requisitos; Node.js; PostgreSQL;
        Análise de dados; REST API`
    },
    {
        company: 'IFMS',
        title: 'Estagiário',
        startDate: 'Jan 2019',
        endDate: 'Jul 2019',
        atividades: `Suporte de operações do IFMaker
        - Gestão de equipe de desenvolvimento
        - Participação de campeonato de robótica
        - Desenvolvimento de aplicativos mobile e web.`,
        competencias: `Desenvolvimento de front-end; Flutter; Dart; React.js; Ionic; CSS;
        HTML; PHP; MySQL; Desenvolvimento de aplicativos móveis; Análise de requisitos.`
    },
];

const Experience = () => {
    const [selectedExperience, setSelectedExperience] = useState(experiences[0]);
    const [loading, setLoading] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const handleClick = (experience) => {
        setLoading(true);
        setTimeout(() => {
            setSelectedExperience(experience);
            setLoading(false);
        }, 300);
    };

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div className="experience-container h-screen flex justify-center items-center bg-black text-white">
            <div className="experience-content flex flex-col md:flex-row w-full md:w-3/4 rounded-lg">
                {!isMobile && (
                    <div className={`experience-menu w-full md:w-1/4 p-4 ${menuOpen ? 'open' : ''}`}>
                        <button className="menu-toggle md:hidden" onClick={toggleMenu}>
                            {menuOpen ? 'Fechar Menu' : 'Abrir Menu'}
                        </button>
                        <div className={`menu-items ${menuOpen ? 'block' : 'hidden'} md:block`}>
                            {experiences.map((experience, index) => (
                                <div
                                    key={index}
                                    className={`p-2 mb-2 cursor-pointer border-l-4 
                                    ${selectedExperience.company === experience.company
                                            ? 'border-customGreen text-customGreen bg-gray-800'
                                            : 'hover:border-gray-500'}`}
                                    onClick={() => handleClick(experience)}
                                >
                                    {selectedExperience.company === experience.company
                                        ? <FaCircle className="inline mr-2 text-customGreen" />
                                        : <FaRegCircle className="inline mr-2" />}
                                    {experience.company}
                                </div>
                            ))}
                        </div>
                    </div>
                )}
                <div className={`experience-details w-full ${isMobile ? 'md:w-full' : 'md:w-3/4'} p-4`} style={{ minHeight: '200px' }}>
                    {loading ? (
                        <div>
                            <Skeleton height={30} width={`60%`} />
                            <Skeleton height={20} width={`40%`} style={{ marginTop: '10px' }} />
                            <Skeleton count={5} style={{ marginTop: '10px' }} />
                        </div>
                    ) : isMobile ? (
                        <motion.div
                            className="relative overflow-hidden"
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <div className="flex flex-nowrap overflow-x-scroll" style={{ scrollSnapType: 'x proximity' }}>
                                {experiences.map((experience, index) => (
                                    <motion.div
                                        key={index}
                                        className="bg-white text-black p-6 rounded-lg min-w-full max-w-full shadow-md mx-1"
                                        drag="x"
                                        dragConstraints={{ left: -100 * (experiences.length - 1), right: 0 }}
                                        dragElastic={1}
                                        style={{ scrollSnapAlign: 'center' }}
                                    >
                                        <h2 className="text-2xl font-bold">{experience.title}</h2>
                                        <p className="text-gray-500 mt-2">{experience.company}</p>
                                        <p className="mt-2">{experience.startDate} - {experience.endDate}</p>
                                        <div className="mt-4">
                                            <h3 className="font-bold">Atividades:</h3>
                                            <p>{experience.atividades}</p>
                                        </div>
                                        <div className="mt-4">
                                            <h3 className="font-bold">Competências:</h3>
                                            <p>{experience.competencias}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                            <div className="absolute inset-x-0 bottom-0 flex justify-center space-x-2 mb-4">
                                {experiences.map((_, index) => (
                                    <div
                                        key={index}
                                        className={`w-3 h-3 rounded-full ${index === 0 ? 'bg-green-500' : 'bg-gray-400'}`}
                                        onClick={() => {
                                            const cardWidth = document.querySelector('.overflow-x-scroll').scrollWidth / experiences.length;
                                            document.querySelector('.overflow-x-scroll').scrollTo({
                                                left: cardWidth * index,
                                                behavior: 'smooth',
                                            });
                                        }}
                                    ></div>
                                ))}
                            </div>
                        </motion.div>

                    ) : (
                        <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <h2 className="text-2xl font-bold">{selectedExperience.title}</h2>
                            <p className="mt-2">{selectedExperience.startDate} - {selectedExperience.endDate}</p>
                            <div className="mt-4">
                                <h3 className="font-bold">Atividades:</h3>
                                <p>{selectedExperience.atividades}</p>
                            </div>
                            <div className="mt-4">
                                <h3 className="font-bold">Competências:</h3>
                                <p>{selectedExperience.competencias}</p>
                            </div>
                        </motion.div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Experience;
