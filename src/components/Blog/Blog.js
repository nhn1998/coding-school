import React from 'react';
import { Col, Row } from 'react-bootstrap';

const Blog = () => {
    return (
        <div className='container'>
            <Row className='container mt-5 bg-secondary p-5 rounded-4'>
                <Col lg={6}>
                    <h2>What is Cors?</h2>
                    <p>Ans: In ReactJS, Cross-Origin Resource Sharing (CORS) refers to the method that allows you to make requests to the server deployed at a different domain. As a reference, if the frontend and backend are at two different domains, we need CORS there</p>
                </Col>
                <Col lg={6}>
                <h2>Why are you using firebase? What other options do you have to implement authentication?</h2>
                <p>Ans: Firebase is mainly work for authentication.Firebase gives us many solution in one time, like we can create authentication for our website very easy and smoothly.
                    in this firebase authentication there can make web application authentication,android app authentication,flutter app authentication ,IOS app authentication.etc.
                </p>
                </Col>
                <Col lg={6}>
                <h2>How does Private Route work?</h2>
                <p>Ans: The private route component is similar to the public route, the only change is that redirect URL and authenticate condition. If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated (Logged in).</p>
                </Col>
                <Col>
                <h2>What is NodeJs?How does Node Work</h2>
                <p>Node.js is a platform built on Chrome's JavaScript runtime for easily building fast and scalable network applications. Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient, perfect for data-intensive real-time applications that run across distributed devices.</p>
                <br />
                <p>It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node. js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive</p>
                </Col>
            </Row>
        </div>
    );
};

export default Blog;