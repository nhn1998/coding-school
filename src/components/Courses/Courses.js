import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
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
                </Col>
                <Col lg={8}>
                    <h1 className='mb-5'>ekhane onno kichu ekta</h1>
                    {
                        courses.map(course => <Cards course={course}></Cards>)
                    }
                </Col>
            </Row>
        </div>
    );
};

export default Courses;