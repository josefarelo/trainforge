import React from 'react';
import HeaderAuth from '../components/Auth/HeaderAuth/HeaderAuth';
import Plan from '../components/Auth/Plan/Plan';
import FooterAuth from '../components/Auth/FooterAuth/FooterAuth';
import '../styles/global.scss';

const Planning = () => {
    return (
        <div className="exercises">
            <HeaderAuth />
            <Plan />
            <FooterAuth />
        </div>
    );
};

export default Planning;