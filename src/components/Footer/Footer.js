// Footer.js
import React from 'react';
import { getAuth, signOut } from "firebase/auth";
import './Footer.css';

const Footer = () => {
    const auth = getAuth();

    const handleLogout = () => {
        signOut(auth).then(() => {
        }).catch((error) => {
            console.error("Error signing out: ", error);
        });
    };

    return (
        <div className="footer">
            <button onClick={handleLogout} className="logout">LOGOUT</button>
        </div>
    );
};

export default Footer;