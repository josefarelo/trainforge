import React from 'react';
import HeaderNoAuth from '../components/NoAuth/HeaderNoAuth/HeaderNoAuth';
import RegisterContent from '../components/NoAuth/LoginRegister/Register/RegisterContent';
import '../styles/global.scss';

const Register = () => {
    return (
        <div className="Register">
            <HeaderNoAuth />
            <RegisterContent />
        </div>
    );
};

export default Register;