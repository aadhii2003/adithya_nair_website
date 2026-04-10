import React from 'react';
import { Helmet } from 'react-helmet-async';
import Hero from '../components/Hero';

const HomePage: React.FC = () => {
    return (
        <>
            <Helmet>
                <title>Adithya Nair | Python Full Stack Developer Portfolio</title>
                <meta name="description" content="Adithya Nair - Junior Python Full Stack Developer specializing in Django, Flask, FastAPI, React.js. Building scalable web applications with modern technologies." />
                <meta name="keywords" content="Python Developer, Full Stack Developer, Django, Flask, FastAPI, React, Web Development, Adithya Nair" />
                <meta property="og:title" content="Adithya Nair | Python Full Stack Developer" />
                <meta property="og:description" content="Junior Python Full Stack Developer specializing in building scalable web applications" />
                <meta property="og:type" content="website" />
                <link rel="canonical" href="https://adithyanair.dev/" />
            </Helmet>
            <Hero />
        </>
    );
};

export default HomePage;
