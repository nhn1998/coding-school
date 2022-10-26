import React from 'react';
import { Col, Row } from 'react-bootstrap';
import BrandCarousel from './BrandCarousel/BrandCarousel';
import './Home.css';
const Home = () => {
    return (
        <div className='background-img'>
            <div className="container">
                <Row className='text-light'>
                    <Col className='margin' lg={5}>
                        <h1 className='bg-dark rounded'>Get help in coding from this wonderful platform</h1>
                        <h6>This is platform where you can get help for your coding.There we declare so many programming languages. Where you can learn those programming languages.First you have to Registration for this platform.then you can read all those programming laguages documentary . We try to do understand all the languages very easily.</h6>
                    </Col>
                    <Col className='margin1 container' lg={7}>
                        <BrandCarousel></BrandCarousel>
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default Home;