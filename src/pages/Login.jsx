import React from 'react';
import HeaderNoAuth from '../components/NoAuth/HeaderNoAuth/HeaderNoAuth';
import LoginContent from '../components/NoAuth/LoginRegister/LoginContent';
import FooterNoAuth from '../components/NoAuth/FooterNoAuth/FooterNoAuth';
import '../styles/global.scss';

const Login = () => {
    return (
        <div className="Login">
            <HeaderNoAuth />
            <LoginContent />
            <FooterNoAuth />
        </div>
    );
};

export default Login;