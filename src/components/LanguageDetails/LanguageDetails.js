import React from 'react';
import { useLoaderData } from 'react-router-dom';

const LanguageDetails = () => {
    const details = useLoaderData();
    console.log(details)
    return (
        <div>
            <h1>this is details</h1>
        </div>
    );
};

export default LanguageDetails;