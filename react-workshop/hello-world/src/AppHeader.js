import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import App from './App'; // Assuming PostList component is in the same directory
import About from './About'; // Import the About component



function AppHeader() {
  return (
    <Router>
    <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
      <a class="navbar-brand" href="#"><Link to="/">Home</Link></a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarCollapse">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link" href="#"><Link to="/about">About</Link></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Link</a>
          </li>
        </ul>
      </div>
    </nav>
        <Routes>
          <Route path="/" element={<App />} /> {/* Home route */}
          <Route path="/about" element={<About />} /> {/* About route */}
        </Routes>
    </Router>
  );
}
export default AppHeader;
