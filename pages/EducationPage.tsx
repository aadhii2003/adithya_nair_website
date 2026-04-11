
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Education from '../components/Education';

const EducationPage: React.FC = () => {
    return (
        <>
            <Helmet>
                <title>Education | Adithya Nair</title>
                <meta name="description" content="Adithya Nair's academic background and professional training in Python Full Stack Development." />
            </Helmet>
            <div className="pt-48 pb-20">
                <Education />
            </div>
        </>
    );
};

export default EducationPage;
