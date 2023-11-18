import { createBrowserRouter } from 'react-router-dom';
import PageLayout from '../layout/PageLayout';
import RootLayout from '../layout/RootLayout';
import HomePage from '../pages/HomePage';
import ProjectPage from '../pages/ProjectPage';
import ServicePage from '../pages/ServicePage';
import TeeamPage from '../pages/TeeamPage';
import TestimonialPage from '../pages/TestimonialPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'team',
        element: (
          <PageLayout>
            <TeeamPage />
          </PageLayout>
        ),
      },
      {
        path: 'service',
        element: (
          <PageLayout>
            <ServicePage />
          </PageLayout>
        ),
      },
      {
        path: 'project',
        element: (
          <PageLayout>
            <ProjectPage />
          </PageLayout>
        ),
      },
      {
        path: 'testimonial',
        element: (
          <PageLayout>
            <TestimonialPage />
          </PageLayout>
        ),
      },
    ],
  },
]);
