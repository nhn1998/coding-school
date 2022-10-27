import React from 'react';
import { Link } from 'react-router-dom';

const Catagories = ({course}) => {
    const {name}=course;
    return (
        <div className='mt-5 text-center p-3'>
            <Link className='fw-bold text-light' style={{textDecoration:'none'}}>{name}</Link>
        </div>
    );
};

export default Catagories;