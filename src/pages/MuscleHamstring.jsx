import React from 'react';
import HeaderAuth from '../components/Auth/HeaderAuth/HeaderAuth';
import Hamstring from '../components/Auth/Exercises/Muscles/Hamstring/Hamstring';
import FooterAuth from '../components/Auth/FooterAuth/FooterAuth';
import '../styles/global.scss';

const MuscleHamstring = () => {
    return (
        <div className="exercises">
            <HeaderAuth />
            <Hamstring />
            <FooterAuth />
        </div>
    );
};

export default MuscleHamstring;