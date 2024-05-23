import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Kotlin from '../../assets/png/kotlin.png';
import ReactNativeImage from '../../assets/svg/react.svg';
import ReactImage from '../../assets/svg/react-2.svg';
import Dart from '../../assets/svg/dart.svg';
import Flutter from '../../assets/svg/flutter.svg';
import Node from '../../assets/svg/nodejs.svg';
import Tailwind from '../../assets/svg/tailwind-css.svg';
import CSS from '../../assets/svg/css-3.svg';
import PostgreSQL from '../../assets/svg/postgresql.svg';
import SQLite from '../../assets/svg/sqlite.svg';
import './timeline.css';
import 'tailwindcss/tailwind.css';

const technologyLogos = {
    React: ReactImage,
    Tailwind_CSS: Tailwind,
    CSS3: CSS,
    Flutter: Flutter,
    Dart: Dart,
    Kotlin: Kotlin,
    React_Native: ReactNativeImage,
    SQLite: SQLite,
    NodeJS: Node,
    database: PostgreSQL
};

const projects = [
    {
        title: 'App Chopp House',
        description: 'Sistema multiplataforma desenvolvido com objetivo de controle de diárias dos garçõns, com a opção de cadastro e relatorio de gastos',
        repositorio: 'https://github.com/diogo-perez/app-chopp-house',
        deploy: 'https://deploy-inicio-projeto.com',
        image: 'https://via.placeholder.com/150',
        company: 'Chopp House',
        technology: ['Dart', 'Flutter', 'NodeJS', 'database']
    },
    {
        title: 'App Clinica Estetica',
        description: 'Aplicativo Android/IOS para controle de agendamento de procedimetos estéticos com controle de diárias, cadastro de procedimentos e relatorio de lucro e gasto por periodo',
        repositorio: 'https://github.com/versao-beta',
        deploy: 'https://deploy-versao-beta.com',
        image: 'https://via.placeholder.com/150',
        company: '',
        technology: ['Dart', 'Flutter', 'NodeJS', 'database']
    },
    {
        title: 'Pax Vendedor',
        description: 'Aplicativo Android publicado na Play Store para gerar de contratos de vendas de planos internos da empresa com assinatura digital de forma online e offline com sincronismo semanal. ',
        repositorio: 'https://github.com/versao-final',
        deploy: 'https://play.google.com/store/apps/details?id=com.vendas.ms',
        image: 'https://via.placeholder.com/150',
        company: 'Pax Primavera',
        technology: ['React_Native', 'SQLite', 'CSS3',]
    },
    {
        title: 'Pax Cobrador',
        description: ' ',
        repositorio: '',
        deploy: '',
        image: 'https://via.placeholder.com/150',
        company: 'Pax Primavera',
        technology: ['Kotlin']
    },
    {
        title: 'Controle de Estoque',
        description: 'Sistema web interno de empresa prestadora de serviços elétricos para controle de estoque de ferramentas e produtos.',
        repositorio: '',
        deploy: '',
        image: 'https://via.placeholder.com/150',
        company: 'Eletro Luz',
        technology: ['React', 'CSS3']
    },
    {
        title: 'Loja Online',
        description: 'Web Site para venda de produtos com carrinho de compras',
        repositorio: 'https://github.com/diogo-perez/loja-online',
        deploy: 'https://loja-online-five.vercel.app/',
        image: 'https://via.placeholder.com/150',
        company: '',
        technology: ['React', 'CSS3',]
    },
    {
        title: 'Portifolio',
        description: 'Web Site construído com objetivo de ser portifólio pessoal.',
        repositorio: 'https://github.com/diogo-perez/portifolio',
        deploy: 'https://portifolio-five-pearl.vercel.app/',
        image: 'https://via.placeholder.com/150',
        company: '',
        technology: ['React', 'Tailwind_CSS', 'CSS3']
    },
];

const getTechnologyLogo = (tech) => {
    const logoUrl = technologyLogos[tech];
    return logoUrl ?
        <img src={logoUrl} alt={tech} title={tech} className="inline-block w-8 h-8 mr-2" />
        : <span className="mr-2" title={tech}>{tech}</span>;
};

const Timeline = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    const openModal = (image) => {
        setSelectedImage(image);
    };

    const closeModal = () => {
        setSelectedImage(null);
    };

    return (
        <div className="overflow-x-auto py-4 px-2 bg-black text-white">
            <table className="w-full border-collapse table-fixed">
                <thead>
                    <tr>
                        <th className="text-center p-2 border-b border-white">Título</th>
                        <th className="text-center p-2 border-b border-white">Descrição</th>
                        <th className="text-center p-2 border-b border-white">Repositório</th>
                        <th className="text-center p-2 border-b border-white">Empresa</th>
                        <th className="text-center p-2 border-b border-white">Tecnologia</th>
                        <th className="text-center p-2 border-b border-white">Imagem</th>
                        <th className="text-center p-2 border-b border-white">Deploy</th>
                    </tr>
                </thead>
                <tbody>
                    {projects.map((project, index) => (
                        <tr key={index}>
                            <td className="text-center p-2 border-b border-white">{project.title}</td>
                            <td className="text-justify p-2 border-b border-white">{project.description}</td>
                            <td className="text-center p-2 border-b border-white">
                                <a href={project.repositorio} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">Repositório</a>
                            </td>
                            <td className="text-center p-2 border-b border-white">{project.company}</td>
                            <td className="p-2 border-b border-white text-center">
                                {project.technology.map((tech, idx) => (
                                    <span key={idx}>{getTechnologyLogo(tech)}</span>
                                ))}
                            </td>
                            <td className="p-2 border-b border-white text-center">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-24 h-24 object-cover cursor-pointer mx-auto"
                                    onClick={() => openModal(project.image)}
                                />
                            </td>
                            <td className="text-center p-2 border-b border-white">
                                <a href={project.deploy} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">Deploy</a>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {selectedImage && (
                <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50">
                    <div className="relative bg-white rounded-lg p-4">
                        <button onClick={closeModal} className="absolute top-2 right-2 text-black text-2xl font-bold">&times;</button>
                        <img src={selectedImage} alt="Modal" className="w-full h-auto rounded-lg" />
                    </div>
                </div>
            )}
        </div>
    );
};

export default Timeline;
