import React from 'react';
import HeaderAuth from '../components/Auth/HeaderAuth/HeaderAuth';
import Biceps from '../components/Auth/Exercises/Muscles/Biceps/Biceps';
import FooterAuth from '../components/Auth/FooterAuth/FooterAuth';
import '../styles/global.scss';

const MuscleBiceps = () => {
    return (
        <div className="exercises">
            <HeaderAuth />
            <Biceps />
            <FooterAuth />
        </div>
    );
};

export default MuscleBiceps;