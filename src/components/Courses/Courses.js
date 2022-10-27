import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';
import Cards from '../Card/Cards';
import Catagories from '../Catagories/Catagories';

const Courses = () => {
    const courses = useLoaderData();
    console.log(courses)
    return (
        <div className='container mt-5'>
            <Row>
                <Col lg={4}>
                    <h1 className='text-center'>Programming languages</h1>
                    <div className='bg-secondary rounded-4'>
                        {
                            courses.map(course => <Catagories key={course.id} course={course}></Catagories>)
                        }
                    </div>
                    <div>
                        <button><Link>Get Premium Access</Link></button>
                    </div>
                </Col>
                <Col lg={8}>
                    <h1 className='mb-5 text-center'>Courses</h1>
                    {
                        courses.map(course => <Cards key={course.id} course={course}></Cards>)
                    }
                </Col>
            </Row>
        </div>
    );
};

export default Courses;