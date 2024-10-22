import React, { useEffect, useState } from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import './Navbar.css';  // Custom CSS for additional styles

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const NavigationBar = () => {
  const [isSignIn, setIsSignIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem('userData'));  // Get user data from localStorage
    setIsSignIn(userData?.isSignIn || false);  // Update state based on user data
  }, []);

  const handleSignOut = () => {
    // Update localStorage and navigate to sign-in page on sign-out
    localStorage.setItem("userData", JSON.stringify({ isSignIn: false }));
    setIsSignIn(false);  // Update local state
    navigate("/SignIn"); // Redirect to SignIn page
  };

  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand as={Link} to="/">
            MyWebsite
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/" className="nav-item">Home</Nav.Link>

              {isSignIn ? (
                <Nav.Link 
                  as={Link} 
                  to="/" 
                  onClick={handleSignOut} 
                  className="nav-item"
                >
                  SignOut
                </Nav.Link>
              ) : (
                <Nav.Link 
                  as={Link} 
                  to="/SignIn" 
                  className="nav-item"
                >
                  SignIn
                </Nav.Link>
              )}
              
              <Nav.Link as={Link} to="/about" className="nav-item">About</Nav.Link>
              <Nav.Link as={Link} to="/products" className="nav-item">Products</Nav.Link>
              <Nav.Link as={Link} to="/contact" className="nav-item">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Outlet />
      <ToastContainer/>
    </header>
  );
};

export default NavigationBar;
