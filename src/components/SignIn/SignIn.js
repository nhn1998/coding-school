import React from 'react';
import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { authContext } from '../Context/AuthProvider';
const SignIn = () => {
    const {login}=useContext(authContext)
    const HandleClick= event=>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password= form.password.value;
        console.log(email,password)
        login(email,password)
        .then(result=>{
            const user = result.user;
            console.log(user)
        })
        .catch(error=>{
            console.log(error)
        })
    }
    return (
        <div>
            <h2 className='text-center text-info mt-5'>Please Register Your Account</h2>
            <Form onSubmit={HandleClick} className='container w-75 mt-5 bg-success p-5'>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" name='email' placeholder="Enter email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" name='password' placeholder="Password" />
            </Form.Group>
            <Button className='mt-3' variant="primary" type="submit">
                Login
            </Button>
        </Form>
        </div>
    );
};

export default SignIn;