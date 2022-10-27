import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
const LanguageDetails = () => {
    const details = useLoaderData();
    const {img,name,introduction}=details;
    console.log(details)
    return (
        <Card className='w-50 text-center mt-5'>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
         {introduction}
        </Card.Text>
      </Card.Body>
    </Card>
    );
};

export default LanguageDetails;