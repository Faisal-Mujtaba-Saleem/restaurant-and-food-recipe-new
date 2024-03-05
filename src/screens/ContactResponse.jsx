import React from 'react'
import { useNavigate } from 'react-router-dom';

function ContactResponse() {
    const contactCredentials = JSON.parse(
        sessionStorage.getItem("contactCredentials")
    )
    const { name, email } = contactCredentials;

    const navigate = useNavigate();

    const handleBackToHome = (e) => {
        navigate('/');
        sessionStorage.clear();
    }
    return (
        <main id="contact-response" className="bg-gray-100 min-h-screen flex flex-col justify-center items-center py-12">
            <div className="bg-white p-10 rounded-lg shadow-md max-w-md w-full">
                <h2 className="text-3xl font-bold text-gray-800 mb-6 font-playfairDisplay italic">
                    {name},
                    Thank You for Contacting Plato!
                </h2>
                <p className="text-base text-gray-600 mb-6 font-rubic">Your message has been successfully sent/saved with the email, {""}
                    <span className="font-semibold text-[#f4b350] text-lg italic">{email}</span>.
                </p>
                <div className="flex flex-col md:flex-row items-center justify-center">
                    <button
                        className="bg-[#f4b350] hover:bg-gray-300 hover:text-[#f4b350] text-[#fff] font-semibold py-2 px-4 rounded-md"
                        onClick={handleBackToHome}
                    >
                        Home
                    </button>
                </div>
            </div>
        </main>
    )
}

export default ContactResponse;