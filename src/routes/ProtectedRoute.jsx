import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

import Loader from "../components/Loader/Loader";

const ProtectedRoute = ({ children }) => {
    const { user, loading } = useAuth();

    if(loading) {
        return <Loader />;
    }

    return user ? children : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
