import React, { useState } from 'react';
import { Card, Form, Button, Container, Row, Col } from 'react-bootstrap'; 
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SignIn = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        
        // Check credentials
        if (email === "sunitsen50@gmail.com" && password === "12345") {
            const user = {
                name: 'Sunit Sen',
                email: "sunitsen50@gmail.com",
                city: "Sylhet",
                country: "Bangladesh",
                admin: false,
            };

            // Save user data in localStorage
            localStorage.setItem("userData", JSON.stringify({ user, isSignIn: true }));

            // Redirect to user profile
            const isAdmin = user.admin ? "/dashboard/admin/profile" : "/dashboard/user/profile";
            navigate(isAdmin);
        } else {
            toast.error("Invalid credentials. Please try again.")
        }
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    return (
        <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
            <Row>
                <Col>
                    <Card style={{ width: '24rem', padding: '20px' }}>
                        <Card.Body>
                            <h2 className="text-center mb-4">User SignIn</h2>
                            <Form onSubmit={handleSubmit}>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control
                                        type="email"
                                        placeholder="Enter email"
                                        value={email}
                                        onChange={handleEmailChange}
                                        required
                                    />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control
                                        type="password"
                                        placeholder="Password"
                                        value={password}
                                        onChange={handlePasswordChange}
                                        required
                                    />
                                </Form.Group>

                                <Button variant="primary" type="submit" className="w-100">
                                    Sign In
                                </Button>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default SignIn;
