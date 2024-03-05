import React from 'react'

function Directions() {
    return (
        <section className="body-font w-screen relative">
            <div className='absolute w-full h-full bg-black opacity-60'></div>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115791.8241457757!2d67.0061909574235!3d24.915218560824307!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33f2de9c1eeed%3A0x5096d91eec355ce2!2sAl%20Aqsa%20Library!5e0!3m2!1sen!2s!4v1708238815344!5m2!1sen!2s"
                width="600"
                height="450"
                style={{ border: 0, width: "100%", paddingRight: "1.5%" }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
        </section>
    )
}

export default Directions
