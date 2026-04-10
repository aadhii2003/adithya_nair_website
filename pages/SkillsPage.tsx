import React from 'react';
import { Helmet } from 'react-helmet-async';
import Skills from '../components/Skills';

const SkillsPage: React.FC = () => {
    return (
        <>
            <Helmet>
                <title>Skills & Technologies | Adithya Nair</title>
                <meta name="description" content="Technical skills: Python, Django, Flask, FastAPI, React.js, PostgreSQL, MySQL, AWS, Docker. Full stack development expertise." />
                <meta name="keywords" content="Python Skills, Django Developer, Flask, FastAPI, React Developer, Full Stack Technologies, PostgreSQL, MySQL" />
                <meta property="og:title" content="Technical Skills | Adithya Nair" />
                <meta property="og:description" content="Comprehensive full stack development skills in Python, JavaScript, and modern frameworks" />
                <link rel="canonical" href="https://adithyanair.dev/skills" />
            </Helmet>
            <div className="pt-20">
                <Skills />
            </div>
        </>
    );
};

export default SkillsPage;
