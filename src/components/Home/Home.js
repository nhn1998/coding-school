import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import React from 'react';
import { useContext } from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import { authContext } from '../Context/AuthProvider';
import BrandCarousel from './BrandCarousel/BrandCarousel';
import './Home.css';
import { FaGoogle ,FaGithub} from "react-icons/fa";

const Home = () => {
    const {googleLogin,githubLogin}=useContext(authContext);
    const provider=new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const HandleClick=()=>{
        googleLogin(provider)
        .then(result=>{
            const user = result.user;
            console.log(user)
        })
        .catch(error =>console.log(error))
    }
    const HandleGithub=()=>{
        githubLogin(githubProvider)
        .then(result=>{
            const user=result.user;
            console.log(user)
        })
        .catch(err=>{
            console.log(err)
        })
    }
    return (
        <div className='background-img'>
            <div className="container">
                <Row className='text-light'>
                    <Col className='margin' lg={5}>
                        <h1 className='bg-dark rounded'>Get help in coding from this wonderful platform</h1>
                        <h6>This is platform where you can get help for your coding.There we declare so many programming languages. Where you can learn those programming languages.First you have to Registration for this platform.then you can read all those programming laguages documentary . We try to do understand all the languages very easily.</h6>
                        <div className=''>
                            <Button onClick={HandleClick} className='w-100' variant="warning" size="lg">
                                <FaGoogle className='me-2'></FaGoogle>Sign in with Google
                            </Button>
                            <Button onClick={HandleGithub} className='w-100' variant="dark" size="lg">
                                <FaGithub className='me-2'></FaGithub>Sign in with Github
                            </Button>
                        </div>
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