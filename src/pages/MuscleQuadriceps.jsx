import React from 'react';
import HeaderAuth from '../components/Auth/HeaderAuth/HeaderAuth';
import Quadriceps from '../components/Auth/Exercises/Muscles/Quadriceps/Quadriceps';
import FooterAuth from '../components/Auth/FooterAuth/FooterAuth';
import '../styles/global.scss';

const MuscleQuadriceps = () => {
    return (
        <div className="exercises">
            <HeaderAuth />
            <Quadriceps />
            <FooterAuth />
        </div>
    );
};

export default MuscleQuadriceps;