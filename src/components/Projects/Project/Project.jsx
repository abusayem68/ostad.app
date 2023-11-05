import './Project.css';

const Project = () => {
  return (
    <div className="project">
      <div className="project-thumbnail">
        <img
          src="https://img.freepik.com/free-photo/web-design-concept-with-drawings_1134-77.jpg?w=740&t=st=1699148685~exp=1699149285~hmac=9fbde0dcdebb041fbca0e83302832c0389176f2cc7071c8b1384cd6efbc1bcca"
          alt=""
        />
      </div>
      <div className="project-content">
        <h2>ecommerce store</h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate
          quam perspiciatis numquam non iste ducimus commodi necessitatibus
          tenetur eos illo?
        </p>
      </div>
      <div>
        <ul>
            <li><a href="">Live link</a></li>
            <li><a href="">GitHub</a></li>
        </ul>
      </div>
    </div>
  );
};

export default Project;
