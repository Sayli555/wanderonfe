import React, { createContext, useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(!!Cookies.get('token'));
    const navigate = useNavigate();

    const login = (token) => {
        Cookies.set('token', token, { expires: 7 });  // Save token in cookie for 7 days
        setIsAuthenticated(true);
        navigate('/dashboard');  // Redirect to dashboard or another private route after login
    };

    const logout = () => {
        Cookies.remove('token');  // Remove token from cookie
        setIsAuthenticated(false);
        navigate('/login');  // Redirect to login page after logout
    };

    useEffect(() => {
        // Update authentication state if token is present in cookie
        if (Cookies.get('token')) {
            setIsAuthenticated(true);
        }
    }, []);

    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
