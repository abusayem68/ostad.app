import './Blog.css';

const Blog = ({ blog }) => {
  const { title, body } = blog || {};
  return (
    <div className="blog">
      <a href="">
        <div className="blog-thumbnail">
          <img
            src="https://img.freepik.com/free-photo/web-design-concept-with-drawings_1134-77.jpg?w=740&t=st=1699148685~exp=1699149285~hmac=9fbde0dcdebb041fbca0e83302832c0389176f2cc7071c8b1384cd6efbc1bcca"
            alt=""
          />
        </div>
      </a>
      <h2>
        <a href="">{title}</a>
      </h2>
    </div>
  );
};

export default Blog;
