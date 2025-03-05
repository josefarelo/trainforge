import React from 'react';
import HeaderAuth from '../components/Auth/HeaderAuth/HeaderAuth';
import Chest from '../components/Auth/Exercises/Muscles/Chest/Chest';
import FooterAuth from '../components/Auth/FooterAuth/FooterAuth';
import '../styles/global.scss';

const MuscleChest = () => {
    return (
        <div className="exercises">
            <HeaderAuth />
            <Chest />
            <FooterAuth />
        </div>
    );
};

export default MuscleChest;