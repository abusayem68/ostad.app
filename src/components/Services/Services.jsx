import Service from './Service/Service';
import './Services.css';

const servicesArr = [
  {
    id: 1,
    thumbnail:
      'https://img.freepik.com/free-photo/web-design-concept-with-drawings_1134-77.jpg?w=740&t=st=1699148685~exp=1699149285~hmac=9fbde0dcdebb041fbca0e83302832c0389176f2cc7071c8b1384cd6efbc1bcca',
    name: 'Web Development',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam inventore corporis molestiae doloribus recusandae est quaerat vitae a hic veniam voluptas, eligendi ab fuga molestias aliquid tempore. Architecto, maxime repudiandae!',
  },
  {
    id: 2,
    thumbnail:
      'https://img.freepik.com/free-vector/gradient-ui-ux-background_23-2149065783.jpg?w=740&t=st=1699200213~exp=1699200813~hmac=ee892f9b1ff80b0152093c9fab36c429189b4465e9226e4a85c3d7443c97be2b',
    name: 'App Development',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam inventore corporis molestiae doloribus recusandae est quaerat vitae a hic veniam voluptas, eligendi ab fuga molestias aliquid tempore. Architecto, maxime repudiandae!',
  },
  {
    id: 3,
    thumbnail:
      'https://img.freepik.com/free-vector/seo-analysis-isometric-composition-with-web-optimization-symbols_1284-32010.jpg?w=740&t=st=1699200718~exp=1699201318~hmac=a47fc0f47f1159d777225c3aea8577908434f3b41b9a19f96187877fc0f39548',
    name: 'SEO',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam inventore corporis molestiae doloribus recusandae est quaerat vitae a hic veniam voluptas, eligendi ab fuga molestias aliquid tempore. Architecto, maxime repudiandae!',
  },
  {
    id: 4,
    thumbnail:
      'https://img.freepik.com/free-vector/mobile-ui-ux-concept-illustration_114360-11697.jpg?w=740&t=st=1699200762~exp=1699201362~hmac=775594545ef4f1a4bc283047385f0f11cfcb52aa8dea9bf3562589cb12b05246',
    name: 'UI/UX Design',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam inventore corporis molestiae doloribus recusandae est quaerat vitae a hic veniam voluptas, eligendi ab fuga molestias aliquid tempore. Architecto, maxime repudiandae!',
  },
];

const Services = () => {
  return (
    <section className="services">
      {servicesArr.map((service) => (
        <Service
          key={service.id}
          service={service}
        />
      ))}
    </section>
  );
};

export default Services;
