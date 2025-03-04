import React from 'react';
import HeaderAuth from '../components/Auth/HeaderAuth/HeaderAuth';
import ExercisesMainContent from '../components/Auth/Exercises/ExercisesMainContent';
import FooterAuth from '../components/Auth/FooterAuth/FooterAuth';
import '../styles/global.scss';

const Exercises = () => {
    return (
        <div className="exercises">
            <HeaderAuth />
            <ExercisesMainContent />
            <FooterAuth />
        </div>
    );
};

export default Exercises;