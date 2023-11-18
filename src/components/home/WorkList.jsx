import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getWorkList } from '../../APIRequest/APIRequest';
import SectionWithTitle from '../common/SectionWithTitle';

const WorkList = () => {
  const [workList, setWorkList] = useState([]);
  useEffect(() => {
    (async () => {
      const res = await getWorkList();
      setWorkList(res);
    })();
  }, []);
  return (
    <section className="px-7 sm:px-16 lg:px-20 py-10 sm:py-16 bg-white">
      <div className="max-w-7xl mx-auto">
        <SectionWithTitle
          title={'Work List'}
          subTitle={'We provide the Perfect Solution to your business growth'}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-11 mt-10">
            {workList.map((item, i) => (
              <div
                key={i}
                className="max-w-sm px-4 sm:px-7 py-7 sm:py-12">
                <div>
                  <img
                    className="bg-[#D7F5DC] p-7 rounded-[20px]"
                    src={item?.img}
                    alt={item?.imgAlt}
                  />
                </div>
                <div>
                  <h5 className="my-4 text-2xl font-semibold">{item?.title}</h5>
                  <p className="mb-11 text-lg">{item?.description}</p>
                  <Link
                    to={item?.link}
                    className="inline-flex items-center py-4 px-5 text-lg text-center ">
                    Learn more
                    <svg
                      className="rtl:rotate-180 w-4 h-3.5 ms-2.5"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 10">
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M1 5h12m0 0L9 1m4 4L9 9"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </SectionWithTitle>
      </div>
    </section>
  );
};

export default WorkList;
