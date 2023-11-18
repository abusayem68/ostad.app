import { useEffect, useState } from 'react';
import { getTestimonials } from '../../APIRequest/APIRequest';
import SectionWithTitle from '../common/SectionWithTitle';

const TestimonialList = () => {
  const [testimonials, setTestimoials] = useState([]);

  useEffect(() => {
    (async () => {
      const res = await getTestimonials();
      setTestimoials(res);
    })();
  }, []);
  return (
    <section className="px-7 sm:px-16 lg:px-20 py-10 sm:py-16 bg-white">
      <div className="max-w-7xl mx-auto">
        <SectionWithTitle
          title={'Testimonial List'}
          subTitle={'Better Agency/SEO Solution At Your Fingertips'}>
          <div className="mt-10 sm:mt-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-7">
              {testimonials.map((testimonial, i) => (
                <div
                  key={i}
                  className="bg-white py-8 sm:py-12 px-4 sm:px-6 shadow-[0px_4px_20px_0px_rgba(0,0,0,0.2)] rounded-2xl">
                  <div className="w-[100px] h-[100px] mx-auto">
                    <img
                      className="w-full h-full object-cover rounded-3xl"
                      src={testimonial?.profileImg}
                      alt={testimonial?.name}
                    />
                  </div>
                  <div className="text-center">
                    <p className="text-[#9D9D9D] text-sm sm:text-base capitalize mt-8 sm:mt-10 mb-4 sm:mb-6">
                      {testimonial?.description}
                    </p>
                    <h5 className="text-xl sm:text-2xl font-semibold uppercase mb-2 sm:mb-2.5">
                      {testimonial?.name}
                    </h5>
                    <div className="text-sm sm:text-base capitalize ">
                      {testimonial?.profession}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </SectionWithTitle>
      </div>
    </section>
  );
};

export default TestimonialList;
