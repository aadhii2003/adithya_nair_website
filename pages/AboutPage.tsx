import React from 'react';
import { Helmet } from 'react-helmet-async';
import About from '../components/About';

const AboutPage: React.FC = () => {
    return (
        <>
            <Helmet>
                <title>About Me | Adithya Nair - Python Developer</title>
                <meta name="description" content="Learn about Adithya Nair's journey as a Python Full Stack Developer. BCA graduate with 1+ year experience in web development and deployment." />
                <meta name="keywords" content="About Adithya Nair, Python Developer Background, Full Stack Developer Experience, Web Developer Kerala" />
                <meta property="og:title" content="About Adithya Nair | Python Full Stack Developer" />
                <meta property="og:description" content="BCA graduate with expertise in Python, Django, Flask, and modern web technologies" />
                <link rel="canonical" href="https://adithyanair.dev/about" />
            </Helmet>
            <div className="pt-20">
                <About />
            </div>
        </>
    );
};

export default AboutPage;
