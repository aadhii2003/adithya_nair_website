import React from 'react';
import { Helmet } from 'react-helmet-async';
import Projects from '../components/Projects';

const ProjectsPage: React.FC = () => {
    return (
        <>
            <Helmet>
                <title>Projects & Portfolio | Adithya Nair</title>
                <meta name="description" content="Explore Adithya Nair's portfolio: Ringme (WebRTC), Pickframes (E-commerce), Spinel Aurora (Jewelry Platform), and more Python/React projects." />
                <meta name="keywords" content="Python Projects, Web Development Portfolio, Flask Projects, React Applications, Full Stack Projects" />
                <meta property="og:title" content="Projects Portfolio | Adithya Nair" />
                <meta property="og:description" content="Real-world web applications built with Python, Flask, Django, and React" />
                <link rel="canonical" href="https://adithyanair.dev/projects" />
            </Helmet>
            <div className="pt-48 pb-20">
                <Projects />
            </div>
        </>
    );
};

export default ProjectsPage;
