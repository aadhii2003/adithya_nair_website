import React from 'react';
import { Helmet } from 'react-helmet-async';
import Contact from '../components/Contact';

const ContactPage: React.FC = () => {
    return (
        <>
            <Helmet>
                <title>Contact Me | Adithya Nair - Hire Python Developer</title>
                <meta name="description" content="Get in touch with Adithya Nair for Python development projects, collaborations, or job opportunities. Email: adithyanair2002324@gmail.com" />
                <meta name="keywords" content="Contact Python Developer, Hire Full Stack Developer, Web Development Services, Python Developer Kerala" />
                <meta property="og:title" content="Contact Adithya Nair | Python Developer" />
                <meta property="og:description" content="Available for Python development projects and collaborations" />
                <link rel="canonical" href="https://adithyanair.dev/contact" />
            </Helmet>
            <div className="pt-20">
                <Contact />
            </div>
        </>
    );
};

export default ContactPage;
