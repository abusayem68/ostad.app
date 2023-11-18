import { useEffect, useState } from 'react';
import { getCounters } from '../../APIRequest/APIRequest';

const StatList = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    (async () => {
      const res = await getCounters();
      setList(res);
    })();
  }, []);
  return (
    <section className="px-7 sm:px-16 lg:px-20 py-8 sm:py-10 lg:py-16 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 sm:gap-7">
          {list.map((item, i) => (
            <div
              key={i}
              className="stat-item bg-white max-w-sm flex flex-col justify-center items-center text-center py-10 sm:py-12">
              <div className="mb-5">
                <img
                  className="bg-[#D7F5DC] p-7 rounded-[20px]"
                  src={item?.img}
                  alt={item?.category}
                />
              </div>
              <div>
                <h5 className="text-2xl sm:text-3xl font-semibold mb-1">
                  {item?.total}
                </h5>
                <p className="text-sm sm:text-base font-medium">
                  {item?.category}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatList;
