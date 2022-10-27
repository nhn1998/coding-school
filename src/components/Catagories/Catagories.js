import React from 'react';
import { Link } from 'react-router-dom';

const Catagories = ({course}) => {
    const {name}=course;
    return (
        <div className='mt-5 text-center p-3 mb-3'>
            <Link className='fw-bold text-light' style={{textDecoration:'none'}} to={`/courses/${course.id}`}>{name}</Link>
        </div>
    );
};

export default Catagories;