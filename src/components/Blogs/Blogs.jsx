import Blog from './Blog/Blog';
import './Blogs.css';

const Blogs = () => {
  return (
    <section style={{ padding: '20px 40px' }}>
      <h2
        style={{ textAlign: 'center', fontSize: '30px', marginBottom: '20px' }}>
        LATEST BLOG POSTS
      </h2>
      <div className="blogs">
        <Blog />
        <Blog />
        <Blog />
      </div>
    </section>
  );
};

export default Blogs;
