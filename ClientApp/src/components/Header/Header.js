// Programmer: Amritpal Singh
// File Name: MainContent.js
// Date: 31 January 2022
// Descrition: Header Component showing the head of the website





import React from 'react';
import './Header.css';

function Header() {
    return (
        <header className="siteheader">
            <div className="site-title">SVPlants</div>
            <div className="site-description">We don't want your Plants to die.</div>
        </header>
    );
}

export default Header;
