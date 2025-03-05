import React from 'react';
import HeaderAuth from '../components/Auth/HeaderAuth/HeaderAuth';
import Calf from '../components/Auth/Exercises/Muscles/Calf/Calf';
import FooterAuth from '../components/Auth/FooterAuth/FooterAuth';
import '../styles/global.scss';

const MuscleCalf = () => {
    return (
        <div className="exercises">
            <HeaderAuth />
            <Calf />
            <FooterAuth />
        </div>
    );
};

export default MuscleCalf;