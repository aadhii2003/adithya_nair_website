import React from 'react';
import { Helmet } from 'react-helmet-async';
import Experience from '../components/Experience';

const ExperiencePage: React.FC = () => {
    return (
        <>
            <Helmet>
                <title>Work Experience | Adithya Nair</title>
                <meta name="description" content="Professional experience: Junior Python Full Stack Developer at Crudops Pvt Ltd, Internship at Luminar Techno Lab. 1+ year in web development." />
                <meta name="keywords" content="Python Developer Experience, Full Stack Developer Jobs, Web Development Career, Crudops, Luminar Techno Lab" />
                <meta property="og:title" content="Work Experience | Adithya Nair" />
                <meta property="og:description" content="Professional journey as a Python Full Stack Developer" />
                <link rel="canonical" href="https://adithyanair.dev/experience" />
            </Helmet>
            <div className="pt-20">
                <Experience />
            </div>
        </>
    );
};

export default ExperiencePage;
