import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import './ProductDetails.css';
import { Container, Row, Col } from 'react-bootstrap';

const ProductDetails = () => {
  const { id } = useParams(); // Destructure `id` from URL params
  const [product, setProduct] = useState(null); 
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchProduct = async () => {
    setIsLoading(true);
    try {
      const res = await fetch(`https://dummyjson.com/products/${id}`);
      if (!res.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await res.json();
      setProduct(data); // Fetching specific product data
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, [id]); // Include `id` in the dependency array

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <Container>
      <Row className="justify-content-center">
        <Col md={8}>
          {product ? (
            <article className="product-details-card">
              {product.images && product.images.length > 0 && (
                <img
                  className="product-image"
                  src={product.images[0]}
                  alt={product.title}
                />
              )}
              <div className="product-info">
                <h2 className="product-title">{product.title}</h2>
                <p>
                  <strong>Description:</strong> {product.description}
                </p>
                <p>
                  <strong>Brand:</strong> {product.brand}
                </p>
                <p>
                  <strong>Category:</strong> {product.category}
                </p>
                <p>
                  <strong>Availability Status:</strong>{' '}
                  {product.availabilityStatus ? 'Available' : 'Unavailable'}
                </p>
              </div>
              <Link className="btn btn-primary mt-3" to="/products">
                Continue Shopping
              </Link>
            </article>
          ) : (
            <p>No Product Found</p>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetails;
