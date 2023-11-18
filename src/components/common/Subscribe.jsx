import React from 'react';

const Subscribe = () => {
  return (
    <section className="px-7 sm:px-16 lg:px-20 py-12 sm:py-20 bg-white flex justify-center">
      <div className="max-w-7xl">
        <div className="text-center mb-10">
          <h4 className="text-[#20B15A] text-lg sm:text-xl font-medium uppercase mb-3 sm:mb-5">
            SUBSCRIBE
          </h4>
          <h5 className="text-2xl sm:text-3xl font-semibold capitalize max-w-md mx-auto leading-normal">
            Subscribe to get the latest news about us
          </h5>
          <p className="text-sm sm:text-base text-[#8B8B8B] font-medium">
            Please drop your email below to get daily update about what we do
          </p>
        </div>
        <form className="w-full relative">
          <input
            className="w-full py-3 sm:py-5 px-4 rounded-2xl text-[#8B8B8B] text-base border border-black"
            type="text"
            placeholder="Enter Your Email Adress"
          />
          <div className=" text-center mt-3 sm:mt-0 sm:absolute sm:right-1.5 sm:top-2 ">
            <button
              className=" bg-[#F55F1D] text-white text-base py-3 px-7 rounded-2xl"
              type="submit">
              Subscribe
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Subscribe;
