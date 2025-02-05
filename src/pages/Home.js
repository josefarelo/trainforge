import React from 'react';
import Header from '../components/Header/Header';
import MainContent from '../components/MainContent/MainContent';
import Footer from '../components/Footer/Footer';
import '../styles/global.scss';

const Home = () => {
    return (
        <div className="home">
            <Header />
            <MainContent />
            <Footer />
        </div>
    );
};

export default Home;