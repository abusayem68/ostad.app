import { useEffect, useState } from 'react';
import { getServices } from '../../APIRequest/APIRequest';
import SectionWithTitle from '../../components/common/SectionWithTitle';
import Service from './Service';
const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    (async () => {
      const res = await getServices();
      setServices(res);
    })();
  }, []);
  return (
    <section className="px-7 sm:px-16 lg:px-20 bg-white pt-12 sm:pt-16 pb-14 sm:pb-24">
      <div className="max-w-7xl mx-auto">
        <SectionWithTitle
          title={'Our All Services'}
          subTitle={'We Provide BestWeb design services'}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-8 sm:gap-y-12 mt-10 sm:mt-12">
            {services.map((service, i) => (
              <Service
                key={i}
                service={service}
              />
            ))}
          </div>
        </SectionWithTitle>
      </div>
    </section>
  );
};

export default Services;
