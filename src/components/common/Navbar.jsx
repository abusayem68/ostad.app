import { NavLink } from 'react-router-dom';
import './Navbar.module.css';

const routes = [
  {
    id: 1,
    path: '/',
    name: 'Home',
  },
  {
    id: 2,
    path: '/service',
    name: 'Service',
  },
  {
    id: 3,
    path: '/about',
    name: 'About',
  },
  {
    id: 4,
    path: '/project',
    name: 'Project',
  },
  {
    id: 5,
    path: '/blog',
    name: 'Blog',
  },
  {
    id: 6,
    path: '/contact',
    name: 'Contact',
  },
];
const Navbar = () => (
  <nav>
    <ul>
      {routes.map((route) => (
        <li key={route.id}>
          <NavLink
            to={`${route.path}`}
            className={({ isActive, isPending }) =>
              isActive ? 'active' : isPending ? 'pending' : ''
            }>
            {route.name}
          </NavLink>
        </li>
      ))}
    </ul>
  </nav>
);

export default Navbar;
