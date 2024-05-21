import React from 'react';
import { motion } from 'framer-motion';
import perfil from '../../assets/jpg/perfil.jpg';
import './home.css';

const Home = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="home-container bg-black text-white p-10 flex flex-col md:flex-row items-center min-h-screen"
        >
            <div className="md:w-3/5 p-4">
                <h1 className="text-2xl md:text-3xl text-green-custom text-center font-press-start">Olá, Bem-vindo(a)</h1>
                <p className="mt-3 text-base font-sans text-justify">
                    Em 2017, aos 16 anos, entrei para o mundo da tecnologia com o objetivo de construir sistemas interativos.
                    Possuo formação técnica em informática pelo IFMS (Instituto Federal do Mato Grosso do Sul).
                    Tenho experiência em desenvolvimento web/mobile/desktop, análise de dados e infraestrutura de redes,
                    e atualmente ocupo a vaga de desenvolvedor pleno no setor de tecnologia da Pax Primavera.
                    Meu principal objetivo como programador, além de resolver problemas do cotidiano das pessoas,
                    é trazer boas experiências para os usuários com sistemas e/ou apps interativos, ágeis,
                    escaláveis e para os meus colegas de trabalho. Gosto de trabalhar principalmente com soluções de gestão.
                    Saber que estou fazendo algo que pode ter um impacto positivo na vida de alguém me deixa feliz.
                    Sou criativo, motivado e fascinado por novas tecnologias.
                    Estou sempre em busca de novos desafios e experiências que possam expandir minhas áreas de conhecimento.
                    Gosto de trabalhar em equipe, seja remotamente ou presencialmente,
                    e valorizo a experiência de trabalhar com pessoas descontraídas.
                    Meu objetivo é construir uma carreira de atuação específica.
                </p>
            </div>
            <div className="md:w-2/5 p-4 flex justify-center md:justify-end">
                <img src={perfil} alt="perfil" className="w-80 h-90 rounded-full bg-black p-2" />
            </div>
        </motion.div>
    );
};

export default Home;
