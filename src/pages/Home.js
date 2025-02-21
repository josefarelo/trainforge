import React from 'react';
import HeaderNoAuth from '../components/NoAuth/HeaderNoAuth/HeaderNoAuth';
import MainContentNoAuth from '../components/NoAuth/MainContentNoAuth/MainContentNoAuth';
import FooterNoAuth from '../components/NoAuth/FooterNoAuth/FooterNoAuth';
import '../styles/global.scss';

const Home = () => {
    return (
        <div className="home">
            <HeaderNoAuth />
            <MainContentNoAuth />
            <FooterNoAuth />
        </div>
    );
};

export default Home;