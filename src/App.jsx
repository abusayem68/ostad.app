import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import AboutPage from './pages/AboutPage';
import BlogPage from './pages/BlogPage';
import ContactPage from './pages/ContactPage';
import HomePage from './pages/HomePage';
import ProjectPage from './pages/ProjectPage';
import ServicePage from './pages/ServicePage';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <MainLayout />,
      children: [
        {
          index: true,
          element: <HomePage />,
        },
        {
          path: 'service',
          element: <ServicePage />,
        },
        {
          path: 'about',
          element: <AboutPage />,
        },
        {
          path: 'project',
          element: <ProjectPage />,
        },
        {
          path: 'blog',
          element: <BlogPage />,
        },
        {
          path: 'contact',
          element: <ContactPage />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
