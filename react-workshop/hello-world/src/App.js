
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {

    const [posts, setPosts] = useState([]); // State to store the fetched posts
    const [loading, setLoading] = useState(true); // State to manage loading status
  
    useEffect(() => {
      // Call API when the component mounts
      axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response => {
          setPosts(response.data); // Update the state with fetched posts
          setLoading(false); // Set loading to false when data is fetched
        })
        .catch(error => {
          console.error('Error fetching data:', error);
          setLoading(false); // Set loading to false in case of error
        });
    }, []);
    if (loading) {
      return <div>Loading...</div>; // Show loading message until the data is fetched
    }
    return (
      <div class="container">
      <h1 class="text-center mb-5">Blog Posts</h1>
      <div class="row">
        {posts.map(post => (
          <div class="col-md-4">
            <div class="post-card">
              <p class="post-id">Post ID: {post.id}</p>
              <h2 class="post-title">{post.title}</h2>
              <p class="post-body">{post.body}</p>
              <div class="post-footer">
                <a href="#">Read more</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    );
  };
export default App;
