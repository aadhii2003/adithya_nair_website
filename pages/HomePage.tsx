import React from 'react';
import { Helmet } from 'react-helmet-async';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Experience from '../components/Experience';
import Education from '../components/Education';
import Contact from '../components/Contact';

const HomePage: React.FC = () => {
    return (
        <>
            <Helmet>
                <title>Adithya Nair | Python Full Stack Developer Portfolio</title>
                <meta name="description" content="Adithya Nair - Junior Python Full Stack Developer specializing in Django, Flask, FastAPI, React.js." />
            </Helmet>
            <main>
                <Hero />
                <About />
                <Skills />
                <Projects />
                <Experience />
                <Education />
                <Contact />
            </main>
        </>
    );
};

export default HomePage;
