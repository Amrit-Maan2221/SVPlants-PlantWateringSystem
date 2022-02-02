import React from 'react';

import './PageHeading.css'

function PageHeading() {
    return (
        <div className="page-header">
            <h2 className="page-header__heading">Water the plants</h2>
            <p>
                You can <em>individually</em> fill the water by going on each plant or
                you can choose to water <em>multiple plants</em>  together by scrolling at the end of the website.
                If the plants aren't watered for more than <em>six hours</em> you are notified with red alert on that plant.
            </p>
        </div>
    );
}

export default PageHeading;
