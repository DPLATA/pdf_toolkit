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
        //const response = await fetch(`http://localhost:5000/blog/posts/${post_id}`); 
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

  const parseCustomMarkup = (content) => {
    const parseRecursive = (parts) => {
      const result = [];
      let currentText = '';
      
      for (let i = 0; i < parts.length; i++) {
        const part = parts[i];
        if (part.startsWith('[[')) {
          if (currentText) {
            result.push(currentText);
            currentText = '';
          }
          const endIndex = parts.indexOf(`[[/${part.slice(2)}]]`, i);
          if (endIndex !== -1) {
            const innerContent = parts.slice(i + 1, endIndex).join('');
            switch (part) {
              case '[[b]]':
                result.push(<strong key={i}>{parseRecursive([innerContent])}</strong>);
                break;
              case '[[h2]]':
                result.push(<h2 key={i}>{parseRecursive([innerContent])}</h2>);
                break;
              case '[[h3]]':
                result.push(<h3 key={i}>{parseRecursive([innerContent])}</h3>);
                break;
              case '[[ul]]':
                result.push(<ul key={i}>{parseRecursive([innerContent])}</ul>);
                break;
              case '[[ol]]':
                result.push(<ol key={i}>{parseRecursive([innerContent])}</ol>);
                break;
              case '[[li]]':
                result.push(<li key={i}>{parseRecursive([innerContent])}</li>);
                break;
              case '[[link|':
                const [href, linkText] = innerContent.split(']]');
                result.push(<a key={i} href={href}>{linkText}</a>);
                break;
              case '[[br]]':
                result.push(<br key={i} />);
                break;
              default:
                result.push(part);
            }
            i = endIndex;
          } else {
            currentText += part;
          }
        } else {
          currentText += part;
        }
      }
      
      if (currentText) {
        result.push(currentText);
      }
      
      return result;
    };

    return parseRecursive(content.split(/((?:\[\[[\s\S]*?\]\])|(?:\[\[\/[\s\S]*?\]\]))/));
  };

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
      <div className="post-content">{parseCustomMarkup(post.body)}</div>
    </div>
  );
};

export default BlogPost;