import React from 'react';
import HeaderAuth from '../components/Auth/HeaderAuth/HeaderAuth';
import Abdomen from '../components/Auth/Exercises/Muscles/Abdomen/Abdomen';
import FooterAuth from '../components/Auth/FooterAuth/FooterAuth';
import '../styles/global.scss';

const MuscleAbdomen = () => {
    return (
        <div className="exercises">
            <HeaderAuth />
            <Abdomen />
            <FooterAuth />
        </div>
    );
};

export default MuscleAbdomen;