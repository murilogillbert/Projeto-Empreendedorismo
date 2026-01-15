import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

interface ProtectedRouteProps {
    children: React.ReactNode;
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
    const location = useLocation();
    const isAuthenticated = !!localStorage.getItem('auth_token');

    if (!isAuthenticated) {
        // Redirect to login, but save the current location to return after login
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    return <>{children}</>;
};
