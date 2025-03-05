import React from 'react';
import HeaderAuth from '../components/Auth/HeaderAuth/HeaderAuth';
import Shoulder from '../components/Auth/Exercises/Muscles/Shoulder/Shoulder';
import FooterAuth from '../components/Auth/FooterAuth/FooterAuth';
import '../styles/global.scss';

const MuscleShoulder = () => {
    return (
        <div className="exercises">
            <HeaderAuth />
            <Shoulder />
            <FooterAuth />
        </div>
    );
};

export default MuscleShoulder;