import React from 'react';
import HeaderAuth from '../components/Auth/HeaderAuth/HeaderAuth';
import Forearm from '../components/Auth/Exercises/Muscles/Forearm/Forearm';
import FooterAuth from '../components/Auth/FooterAuth/FooterAuth';
import '../styles/global.scss';

const MuscleForearm = () => {
    return (
        <div className="exercises">
            <HeaderAuth />
            <Forearm />
            <FooterAuth />
        </div>
    );
};

export default MuscleForearm;