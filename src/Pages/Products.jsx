import React, { useEffect, useState } from 'react';
import { Card, Col, Row, Spinner, Alert,  Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Products.css'; // Import your CSS file
import { Link } from 'react-router-dom';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

 
  const fetchProducts = async () => {
    setIsLoading(true);
    try {
      const res = await fetch('https://dummyjson.com/products');
      if (!res.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await res.json();
      setProducts(data.products);
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };


  useEffect(() => {
    fetchProducts();
  }, []);

  const truncateDescription = (description, maxLength = 100) => {
    return description.length > maxLength ? description.substring(0, maxLength) + '...' : description;
  };

  if (isLoading) {
    return (
      <div className="text-center mt-5">
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div>
    );
  }

  if (error) {
    return (
      <div className="mt-5">
        <Alert variant="danger">
          <Alert.Heading>Error!</Alert.Heading>
          <p>{error}</p>
        </Alert>
      </div>
    );
  }


  return (
    <div>
      <h2>All Products</h2>
      <section className='products'>
      <Container>
      <Row xs={1} md={2} lg={4} className="g-4">
  {products && products.length > 0 ? (
    products.map((product) => {
      const { id, title, description, brand, category, availabilityStatus, images } = product;
      return (
        <Col key={id}>
          <Card>
            {/* Use the first image from the images array */}
            <Card.Img variant="top" src={images[0]} alt={title} />
            <Card.Body>
              <Card.Title>{title}</Card.Title>
              <Card.Text>
                <strong>Description:</strong> {truncateDescription(description)}
              </Card.Text>
              <Card.Text>
                <strong>Brand:</strong> {brand}
              </Card.Text>
              <Card.Text>
                <strong>Category:</strong> {category}
              </Card.Text>
              <Card.Text>
                <strong>Availability Status:</strong> {availabilityStatus}
              </Card.Text>
              <Link className="btn btn-primary" 
                to={`/products/${id}`} 
                state={product}>
                Show Details
              </Link>
            </Card.Body>
          </Card>
        </Col>
      );
    })
  ) : (
    <p>No products available</p> // Optional: message when there are no products
  )}
</Row>

      </Container>
      </section>
    </div>
  );
};

export default Products;
