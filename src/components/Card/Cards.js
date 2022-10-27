import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import './Card.css'

const Cards = ({ course }) => {
    const { name, img ,details,cost} = course;
    console.log(course)
    return (
                <Row>
                    <Col className='mt-5'>
                    <Card className='size'>
                    <Card.Img className='img-fluid' variant="top" src={img} />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>
                            {details.slice(0,400)}...
                        </Card.Text>
                        <p>Take the Course for: <small className='text-warning fw-bold'>{cost}</small></p>
                    </Card.Body>
                </Card>
                    </Col>
                </Row>
    );
};

export default Cards;