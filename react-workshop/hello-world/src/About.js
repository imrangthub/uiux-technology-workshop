import React from 'react';

const About = () => {
  return (
    <div className="container py-5">
      <div className="row align-items-center">
 
        <div className="col-md-6">
          <h1 className="display-4 text-primary">About Us</h1>
          <p className="lead text-muted">
            Welcome to our React app! We are dedicated to creating beautiful and functional web
            applications. Our team focuses on delivering high-quality user experiences and
            cutting-edge technology solutions.
          </p>
          <p>
            With a commitment to innovation and excellence, we aim to exceed expectations and make
            a positive impact in the world of technology.
          </p>
          <a href="/contact" className="btn btn-primary btn-lg mt-3">
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
