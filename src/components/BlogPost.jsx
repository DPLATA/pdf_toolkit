import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './BlogPost.css';

const BlogPost = () => {
  const { post_id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await fetch(`https://api.transformadoc.com/blog/posts/${post_id}`);
        if (!response.ok) {
          throw new Error('Failed to fetch blog post');
        }
        const data = await response.json();
        setPost(data.post);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching blog post:', error);
        setError('Failed to load the blog post. Please try again later.');
        setLoading(false);
      }
    };

    fetchPost();
  }, [post_id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div className="blog-post-container">
      <h1>{post.title}</h1>
      <p className="post-date">{new Date(post.date_published).toLocaleDateString()}</p>
      <div className="post-tags">
        {post.tags.map((tag, index) => (
          <span key={index} className="tag">
            {tag}
          </span>
        ))}
      </div>
      <div className="post-content">{post.body}</div>
    </div>
  );
};

export default BlogPost;