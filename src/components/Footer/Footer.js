// Footer.js
import React from 'react';
import { getAuth, signOut } from "firebase/auth";
import './Footer.css';

const Footer = () => {
    const auth = getAuth();

    const handleLogout = () => {
        signOut(auth).then(() => {
            console.log("User signed out");
        }).catch((error) => {
            console.error("Error signing out: ", error);
        });
    };

    return (
        <div className="footer">
            <button onClick={handleLogout} className="logout">Logout</button>
        </div>
    );
};

export default Footer;