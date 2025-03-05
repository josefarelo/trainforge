import React from 'react';
import HeaderAuth from '../components/Auth/HeaderAuth/HeaderAuth';
import Back from '../components/Auth/Exercises/Muscles/Back/Back';
import FooterAuth from '../components/Auth/FooterAuth/FooterAuth';
import '../styles/global.scss';

const MuscleBack = () => {
    return (
        <div className="exercises">
            <HeaderAuth />
            <Back />
            <FooterAuth />
        </div>
    );
};

export default MuscleBack;