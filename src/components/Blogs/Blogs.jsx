import { useEffect, useState } from 'react';
import Blog from './Blog/Blog';
import './Blogs.css';

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts?_limit=20')
      .then((res) => {
        res.json().then((data) => setBlogs(data));
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <section style={{ padding: '20px 40px' }}>
      <h2
        style={{ textAlign: 'center', fontSize: '30px', marginBottom: '20px' }}>
        LATEST BLOG POSTS
      </h2>
      <div className="blogs">
        {blogs.map((blog) => (
          <Blog
            key={blog.id}
            blog={blog}
          />
        ))}
      </div>
    </section>
  );
};

export default Blogs;
