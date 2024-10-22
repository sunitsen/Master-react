import React from 'react';
import { Card, Container } from 'react-bootstrap'; // Import React Bootstrap components

const UserProfile = () => {
    // Fetch user data from localStorage
    const userData = localStorage.getItem('userData') 
        ? JSON.parse(localStorage.getItem('userData')) 
        : null;

    // Destructure user info from userData, using defaults for safety
    const { user } = userData || {};
    const { name, email, city, country } = user || {};

    return (
        <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
            <Card style={{ width: '24rem', padding: '20px' }}>
                <Card.Body>
                    <h2 className="text-center mb-4">User Profile</h2> {/* Title using <h2> */}
                    {user ? ( // Conditional rendering
                        <>
                            <Card.Title>{name || "No Name Provided"}</Card.Title> {/* Display User Name */}
                            <Card.Text>
                                <strong>Email:</strong> {email || "No Email Provided"}<br />
                                <strong>City:</strong> {city || "No City Provided"}<br />
                                <strong>Country:</strong> {country || "No Country Provided"}<br />
                            </Card.Text>
                        </>
                    ) : (
                        <p className="text-center">No profile found</p> // Message if no user data is present
                    )}
                </Card.Body>
            </Card>
        </Container>
    );
};

export default UserProfile;
