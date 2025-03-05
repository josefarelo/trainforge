import React from 'react';
import HeaderAuth from '../components/Auth/HeaderAuth/HeaderAuth';
import Triceps from '../components/Auth/Exercises/Muscles/Triceps/Triceps';
import FooterAuth from '../components/Auth/FooterAuth/FooterAuth';
import '../styles/global.scss';

const MuscleTriceps = () => {
    return (
        <div className="exercises">
            <HeaderAuth />
            <Triceps />
            <FooterAuth />
        </div>
    );
};

export default MuscleTriceps;