import React from 'react';
import HeaderAuth from '../components/Auth/HeaderAuth/HeaderAuth';
import Glute from '../components/Auth/Exercises/Muscles/Glute/Glute';
import FooterAuth from '../components/Auth/FooterAuth/FooterAuth';
import '../styles/global.scss';

const MuscleGlute = () => {
    return (
        <div className="exercises">
            <HeaderAuth />
            <Glute />
            <FooterAuth />
        </div>
    );
};

export default MuscleGlute;