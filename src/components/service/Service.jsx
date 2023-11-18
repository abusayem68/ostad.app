import React from 'react';

const Service = ({ service }) => {
  const { title, subTitle, images } = service || {};
  return (
    <div className="shadow-[0px_4px_25px_0px_rgba(0,0,0,0.3)] py-6 sm:py-10 px-5 sm:px-8 rounded-xl">
      <h4 className="text-xl sm:text-[26px] font-semibold uppercase mb-3 sm:mb-5">
        {title}
      </h4>
      <h5 className="text-[#9D9D9D] font-normal text-sm sm:tex-base capitalize mb-8 sm:mb-14">
        {subTitle}
      </h5>
      <div>
        <div className="h-[120px] sm:h-[164px] flex gap-3 sm:gap-8 mb-2 sm:mb-5">
          <div className="w-[70%] h-full rounded-lg overflow-hidden ">
            <img
              className="w-full h-full object-cover"
              src={images?.length > 0 && images[0]}
              alt={title}
            />
          </div>
          <div className="w-[30%] rounded-lg overflow-hidden">
            <img
              className="w-full h-full object-cover"
              src={images?.length > 0 && images[1]}
              alt={title}
            />
          </div>
        </div>
        <div className="flex h-[120px] sm:h-[263px] gap-3 sm:gap-8">
          <div className="w-1/2 h-full rounded-lg overflow-hidden">
            <img
              className="w-full h-full object-cover"
              src={images?.length > 0 && images[2]}
              alt={title}
            />
          </div>
          <div className="w-1/2 rounded-lg overflow-hidden">
            <img
              className="w-full h-full object-cover"
              src={images?.length > 0 && images[3]}
              alt={title}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
