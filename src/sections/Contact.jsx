import React, { useContext, useEffect, useRef, useState } from 'react';

import { useNavigate } from 'react-router-dom';

import { RefContext } from '../contexts/RefContext';
import { AlertContext } from '../contexts/AlertContext';

import SectionHead from '../components/commons/SectionHead'
import ContactInfo from '../components/contactComponents/ContactInfo';
import AppAlert from '../components/commons/Alert';

const sectionTitle = "Get in Touch";
const sectionDescription = "Sed arcu. Cras consequat.";
function Contact() {
    const contactRef = useRef(null);

    const { setContactRef } = useContext(RefContext);
    useEffect(() => {
        setContactRef(contactRef);
    }, [])

    const { showAlert } = useContext(AlertContext);

    // States
    const [contactCredentials, setContactCredentials] = useState({
        name: "",
        email: "",
        message: ""
    });

    const navigate = useNavigate();

    const onInvalidCredentials = () => {
        showAlert("Invalid or empty credentials", "warning");
    }

    // Handlers 
    const onContactCredentialsChange = (e) => {
        setContactCredentials({
            ...contactCredentials,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmitContactCredentials = (e) => {
        if (
            contactCredentials.name !== ""
            &&
            contactCredentials.email !== ""
            &&
            contactCredentials.message !== ""
        ) {
            const contactMessageLength = contactCredentials.message.split(" ").length;
            if (contactCredentials.name.length >= 3 && contactMessageLength >= 10) {
                sessionStorage.setItem("contactCredentials", JSON.stringify(contactCredentials, null, 2));

                if (sessionStorage.getItem("contactCredentials"))
                    navigate('/contact-response');
            }
            else {
                onInvalidCredentials();
            }
        }
        else {
            onInvalidCredentials();
        }
    }
    return (
        <section ref={contactRef} id='contact-section' className="body-font">
            <div className="py-24 mx-auto w-full flex flex-wrap justify-center">
                <SectionHead sectionTitle={sectionTitle} sectionDescription={sectionDescription} titleTextClr={"white"} paraTextClr='[#ccc]' />
                <ContactInfo />
                <form className="lg:w-2/6 md:w-1/2 w-full px-5 -mr-8 flex flex-col mt-10 md:mt-0 font-playfairDisplay">
                    <h2 className="text-white text-3xl font-medium title-font mb-[2rem] text-center">Say Hello!</h2>
                    <div className="relative mb-2.5 text-[#999999]">
                        <input
                            type="text"
                            placeholder='Name*'
                            id="full-name"
                            name="name"
                            className="w-full bg-white focus:ring-2 focus:ring-indigo-200 text-xs font-medium outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                            value={contactCredentials.name}
                            onChange={onContactCredentialsChange}
                        />
                    </div>
                    <div className="relative mb-2.5 text-[#999999]">
                        <input
                            type="email"
                            placeholder='Email*'
                            id="email"
                            name="email"
                            className="w-full bg-white focus:ring-2 focus:ring-indigo-200 text-xs font-medium outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                            value={contactCredentials.email}
                            onChange={onContactCredentialsChange}
                        />
                    </div>
                    <div className="relative mb-2.5 text-[#999999]">
                        <textarea
                            type="text"
                            placeholder='*Message*'
                            id="message"
                            name="message"
                            className="w-full bg-white focus:ring-2 focus:ring-indigo-200 text-xs font-medium outline-none py-1 px-3 h-[15vh] leading-8 transition-colors duration-200 ease-in-out"
                            value={contactCredentials.message}
                            onChange={onContactCredentialsChange}
                        />
                    </div>
                    <button
                        type='button'
                        className="text-[#999999] bg-transparent border !border-[#999999] py-[3%] mx-auto w-[50%] -mt-1.5 focus:outline-none hover:!bg-[#f4b350] rounded text-xs uppercase font-light font-rubic"
                        onClick={handleSubmitContactCredentials}
                    >
                        Send Message
                    </button>
                    <AppAlert />
                </form>
            </div>
        </section>
    )
}

export default Contact;