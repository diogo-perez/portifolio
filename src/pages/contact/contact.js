import React, { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        contact: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const generateWhatsAppLink = () => {
        const { name, subject, message } = formData;
        const whatsappMessage = `Olá, meu nome é ${name}. Meu assunto é ${subject}. Mensagem: ${message}`;
        const encodedMessage = encodeURIComponent(whatsappMessage);
        return ` https://wa.me/5567981762618?text=${encodedMessage}`;
    };

    return (
        <div className="bg-black h-screen flex flex-col justify-center items-center text-white">
            <h1 className="text-2xl font-bold mb-1">Entre em contato</h1>
            <p className="mt-2 mb-8 text-center">Tem um projeto em mente ou apenas quer dizer oi? Sinta-se livre para me enviar uma mensagem!</p>
            <form action={generateWhatsAppLink()} className="w-full max-w-md">
                <div className="mb-4">
                    <label htmlFor="name" className="block text-sm font-medium text-white">Nome</label>
                    <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:border-green-500 text-black" required />
                </div>
                <div className="mb-4">
                    <label htmlFor="message" className="block text-sm font-medium text-white">Contato</label>
                    <input type="text" id="name" name="name" value={formData.contact} onChange={handleChange} className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:border-green-500 text-black" required />
                </div>
                <div className="mb-4">
                    <label htmlFor="subject" className="block text-sm font-medium text-white">Assunto</label>
                    <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange} className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:border-green-500 text-black" required />
                </div>
                <div className="mb-4">
                    <label htmlFor="message" className="block text-sm font-medium text-white">Mensagem</label>
                    <textarea id="message" name="message" value={formData.message} onChange={handleChange} rows="4" className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:border-green-500 text-black" required></textarea>
                </div>
                {/* <button type="submit" className="px-4 py-2 bg-customGreen text-black rounded-md hover:bg-green-600">
                    <strong>Enviar pelo WhatsApp</strong>
                </button> */}
            </form>
        </div>
    );
};

export default Contact;
