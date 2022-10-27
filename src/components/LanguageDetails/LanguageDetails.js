import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
const LanguageDetails = () => {
    const details = useLoaderData();
    const { img, name, introduction } = details;
    console.log(details)
    return (
        <div className='d-flex mt-5'>
            <Card className='w-50 text-center '>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {introduction}
                    </Card.Text>
                </Card.Body>
            </Card>
            <div>
                <ul>
                    <li>
                        <h4>{name} is a high level programming languages</h4>
                    </li>
                    <li><h4>Every programming language has a different different value.</h4></li>
                    <li><h4>Mainly all programming lanuage use for make softwer</h4></li>
                </ul>
            </div>
        </div>
    );
};

export default LanguageDetails;