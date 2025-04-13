import React from 'react';
import '../styles/global.scss';
import HeaderAuth from '../components/Auth/HeaderAuth/HeaderAuth';
import MainContentAuth from '../components/Auth/MainContentAuth/MainContentAuth';
import FooterAuth from '../components/Auth/FooterAuth/FooterAuth';

const Welcome = () => {
    return (
        <div className="Welcome">
            <HeaderAuth />
            <MainContentAuth />
            <FooterAuth/>
        </div>
    );
};

export default Welcome;