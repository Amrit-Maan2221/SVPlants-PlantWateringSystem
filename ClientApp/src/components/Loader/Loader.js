// Programmer: Amritpal Singh
// File Name: Loader.js
// Date: 31 January 2022
// Descrition: This file containes Loader component which is shown if content is not loaded yet




import React from "react";
import "./Loader.css";

const Loader = () => {
    return (
        <div className="loading">
            <div></div>
        </div>
    );
};

export default Loader;