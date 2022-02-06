// Programmer: Amritpal Singh
// File Name: PageHeading.js
// Date: 31 January 2022
// Descrition: This file containe the page heading component which display heading of the page to users




import React from 'react';

import './PageHeading.css'

function PageHeading() {
    return (
        <div className="page-header">
            <h2 className="page-header__heading">Water the plants</h2>
            <p>
                You can <em>individually</em> fill the water by going on each plant.
                If the plants aren't watered for more than <em>six hours</em> you are notified with red alert error msg and green background color on that plant.
            </p>
        </div>
    );
}

export default PageHeading;
