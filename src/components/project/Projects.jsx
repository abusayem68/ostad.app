import { useEffect, useState } from 'react';
import { getProjects } from '../../APIRequest/APIRequest';
import SectionWithTitle from '../common/SectionWithTitle';

export const Projects = () => {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    (async () => {
      const res = await getProjects();
      setProjects(res);
    })();
  }, []);
  return (
    <section className="px-7 sm:px-16 lg:px-20 py-10 sm:py-16 bg-white">
      <div className="max-w-7xl mx-auto">
        <SectionWithTitle
          title={'All Project'}
          subTitle={'Better Agency/SEO Solution At Your Fingertips'}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-7 sm:gap-10 mt-10 sm:mt-12">
            {projects.map((project, i) => (
              <div
                key={i}
                className="bg-white pt-7 sm:pt-10 px-6 sm:px-8 pb-6 sm:pb-8 rounded-3xl shadow-[0px_4px_25px_0px_rgba(0,0,0,0.2)]">
                <img
                  className="w-full h-auto object-cover rounded-3xl"
                  src={project?.img}
                  alt={project?.title}
                />
                <h5 className="text-lg sm:text-2xl font-semibold uppercase mt-5 sm:mt-7">
                  {project?.title}
                </h5>
              </div>
            ))}
          </div>
        </SectionWithTitle>
      </div>
    </section>
  );
};
