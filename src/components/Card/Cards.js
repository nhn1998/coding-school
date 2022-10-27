import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Card.css'

const Cards = ({ course }) => {
    const { name, img ,details} = course;
    console.log(course)
    return (
                <Row>
                    <Col className='mt-5'>
                    <Card className='size'>
                    <Card.Img className='img-fluid' variant="top" src={img} />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>
                            {details}
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
                    </Col>
                </Row>
    );
};

export default Cards;