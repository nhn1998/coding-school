import React from 'react';
import { Link } from 'react-router-dom';

const PageNotFound = () => {
    return (
        <div>
            <h2>this page is no route</h2>
            <h5>Please go to the <Link to='/'>home page</Link></h5>
        </div>
    );
};

export default PageNotFound;