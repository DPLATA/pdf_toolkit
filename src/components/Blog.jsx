import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Blog.css';

const BlogPost = ({ title, excerpt, date_published, post_id }) => (
  <div className="blog-post">
    <h2>{title}</h2>
    <p className="post-date">{new Date(date_published).toLocaleDateString()}</p>
    <p>{excerpt}</p>
    <Link to={`/blog/${post_id}`}>Read more</Link>
  </div>
);

const Blog = () => {
  const [blogPosts, setBlogPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlogPosts = async () => {
      try {
        const response = await fetch('https://api.transformadoc.com/blog/posts'); // Updated endpoint
        //const response = await fetch('http://127.0.0.1:5000/blog/posts'); 
        if (!response.ok) {
          throw new Error('Failed to fetch blog posts');
        }
        const data = await response.json();
        setBlogPosts(data.posts); // Access the 'posts' array from the response
        setLoading(false);
      } catch (error) {
        console.error('Error fetching blog posts:', error);
        setError('Failed to load blog posts. Please try again later.');
        setLoading(false);
      }
    };

    fetchBlogPosts();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="blog-container">
      <h1>Blog</h1>
      <div className="blog-list">
        {blogPosts.map((post) => (
          <BlogPost key={post.post_id} {...post} />
        ))}
      </div>
    </div>
  );
};

export default Blog;